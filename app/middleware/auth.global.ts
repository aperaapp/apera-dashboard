import type { Database } from "~/types/supabase.types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const session = useSupabaseSession();

  const userStore = useUserStore();

  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  console.log({ to });
  if (to.path === "login") {
    return;
  }
  if (!session.value) {
    return navigateTo("/login");
  }

  if (userStore.profile) {
    return;
  }
  try {
    // fetch profile
    const { data, error } = await client
      .from("dashboard_users")
      .select()
      .eq("id", user.value.id)
      .single();

    if (error || !data) {
      console.log({ data, error });
      return navigateTo("/login");
    }

    userStore.profile = data;
  } catch (error) {
    return navigateTo("/login");
  }
});
