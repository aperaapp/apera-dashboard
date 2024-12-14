import { serverSupabaseClient } from "#supabase/server";
import { z } from "zod";
import type { Database } from "~/types/supabase.types";

const LOGIN_SCHEMA = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);

  const credentials = (await readBody(event)) as {
    email: string;
    password: string;
  };
  console.log({ body: credentials });
  const result = LOGIN_SCHEMA.safeParse(credentials);

  if (result.error) {
    return { data: null, error: result.error };
  }

  const { data: authData, error: userError } =
    await client.auth.signInWithPassword(credentials);

  console.log({ authData });

  if (userError) {
    return { data: null, error: userError };
  }

  if (!authData) {
    return { data: null, error: new Error("User not found") };
  }

  // Find admin account
  const { data: profile, error: profileError } = await client
    .from("dashboard_users")
    .select()
    .eq("id", authData.user.id)
    .single();

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
