<script setup lang="ts">
import type { Member } from "~/types";
import type { Database } from "~/types/supabase.types";
const client = useSupabaseClient<Database>();

const q = ref("");
const isInviteModalOpen = ref(false);

const {
  data: admins,
  isLoading,
  refetch,
  error,
} = useQuery({
  queryKey: ["admins"],
  queryFn: async () => {
    const { data, error } = await client.from("dashboard_users").select();
    if (error) {
      throw error;
    }
    if (!data) {
      throw new Error("No data returned");
    }
    return data;
  },
});

const filteredMembers = computed(() => {
  if (!admins.value) return [];

  return admins.value.filter((admin) => {
    return (
      admin.name.search(new RegExp(q.value, "i")) !== -1 ||
      admin.email.search(new RegExp(q.value, "i")) !== -1
    );
  });
});
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection
      title="Manage access"
      description="Invite new members by email address."
      orientation="horizontal"
      :ui="{ container: 'lg:sticky top-2' }"
    >
      <template #links>
        <UButton
          label="Add Admin"
          color="black"
          @click="isInviteModalOpen = true"
        />
      </template>

      <UCard
        :ui="{ header: { padding: 'p-4 sm:px-6' }, body: { padding: '' } }"
        class="min-w-0"
      >
        <template #header>
          <UInput
            v-model="q"
            icon="i-heroicons-magnifying-glass"
            placeholder="Search admins"
            autofocus
          />
        </template>

        <!-- ~/components/settings/MembersList.vue -->
        <div class="w-full space-y-2 p-4" v-if="isLoading">
          <USkeleton
            v-for="(i, index) in new Array(5).fill(0)"
            :key="index"
            class="h-[60px] w-full"
            :ui="{ rounded: 'rounded-md' }"
          />
        </div>
        <ErrorCard
          v-if="error"
          title="Error fetching memebers"
          :message="error.message"
        />
        <SettingsMembersList
          v-if="filteredMembers"
          :members="filteredMembers"
        />
      </UCard>
    </UDashboardSection>

    <UDashboardModal
      v-model="isInviteModalOpen"
      title="Create Admin Account"
      description="Admins have access to the dashbaord"
      :ui="{ width: 'sm:max-w-md' }"
    >
      <!-- ~/components/settings/MembersForm.vue -->
      <SettingsMembersForm @close="isInviteModalOpen = false" />
    </UDashboardModal>
  </UDashboardPanelContent>
</template>
