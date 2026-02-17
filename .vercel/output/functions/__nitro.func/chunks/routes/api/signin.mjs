import { u as useRuntimeConfig, a as getHeader, s as setCookie, e as eventHandler, r as readBody } from '../../nitro/nitro.mjs';
import { z } from 'zod';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

async function fetchWithRetry(req, init) {
  const retries = 3;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fetch(req, init);
    } catch (error) {
      if (init?.signal?.aborted) {
        throw error;
      }
      if (attempt === retries) {
        console.error(`Error fetching request ${req}`, error, init);
        throw error;
      }
      console.warn(`Retrying fetch attempt ${attempt + 1} for request: ${req}`);
    }
  }
  throw new Error("Unreachable code");
}

const serverSupabaseClient = async (event) => {
  if (!event.context._supabaseClient) {
    const {
      supabase: {
        url,
        key,
        cookieOptions,
        clientOptions: { auth = {}, global = {} }
      }
    } = useRuntimeConfig().public;
    event.context._supabaseClient = createServerClient(url, key, {
      auth,
      cookies: {
        getAll: () => parseCookieHeader(getHeader(event, "Cookie") ?? ""),
        setAll: (cookies) => cookies.forEach(({ name, value, options }) => setCookie(event, name, value, options))
      },
      cookieOptions,
      global: {
        fetch: fetchWithRetry,
        ...global
      }
    });
  }
  return event.context._supabaseClient;
};

const LOGIN_SCHEMA = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});
const signin = eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const credentials = await readBody(event);
  console.log({ body: credentials });
  const result = LOGIN_SCHEMA.safeParse(credentials);
  if (result.error) {
    return { data: null, error: result.error };
  }
  const { data: authData, error: userError } = await client.auth.signInWithPassword(credentials);
  console.log({ authData });
  if (userError) {
    return { data: null, error: userError };
  }
  if (!authData) {
    return { data: null, error: new Error("User not found") };
  }
  const { data: profile, error: profileError } = await client.from("dashboard_users").select().eq("id", authData.user.id).single();
  console.log("profile:", profile);
  console.error(profileError ? profileError.message : "");
  if (profileError) {
    return { data: null, error: profileError };
  }
  if (!profile) {
    return { data: null, error: new Error("Admin not found") };
  }
  return { data: profile, error: null };
});

export { signin as default };
//# sourceMappingURL=signin.mjs.map
