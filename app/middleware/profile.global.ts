import type { Database } from "~/types/supabase.types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();
  const userStore = useUserStore();

  if (to.fullPath.includes("dashboard") && !user.value) {
    // return navigateTo("/");
  }
});
