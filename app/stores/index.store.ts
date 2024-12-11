import type { DashboardUserRow } from "~/types/db.types";

export const useUserStore = defineStore("user", () => {
  const profile = ref<DashboardUserRow>(null);

  return { profile };
});
