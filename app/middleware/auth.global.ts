import type { Database } from "~/types/supabase.types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  if (userStore.profile) return;
  loadProfile();
});

async function loadProfile() {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();
  const userStore = useUserStore();
  try {
    // fetch profile
    const { data, error } = await client
      .from("dashboard_users")
      .select()
      .eq("id", user.value.id)
      .single();

    if (error || !data) {
      console.log({ data, error });
    }

    userStore.profile = data;
  } catch (error) {}
}
