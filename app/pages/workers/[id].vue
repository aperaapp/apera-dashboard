<template>
  <div class="w-full h-screen overflow-y-auto">
    <UDashboardNavbar>
      <template #left>
        <UButton
          color="white"
          variant="ghost"
          size="sm"
          icon="i-heroicons-arrow-left"
          @click="$router.back()"
        />
      </template>
      <template #center>
        <p>{{ profile ? profile.full_name : "Profile" }}</p>
      </template>
    </UDashboardNavbar>
    <div class="flex flex-col flex-wrap md:flex-row gap-4 w-full p-4">
      <div class="flex-1">
        <USkeleton
          v-if="isLoadingProfile"
          class="h-full w-full"
          :ui="{ rounded: 'rounded-xl' }"
        />
        <ErrorCard
          v-if="profileError"
          title="Erorr fetching worker profile"
          :message="profileError.message"
        />
        <UCard
          v-if="profile"
          :ui="{ body: { padding: 'px-0 sm:p-0' }, rounded: 'rounded-2xl' }"
        >
          <div class="space-y flex flex-col pt-4">
            <UAvatar
              v-bind="{ src: profile.avatar }"
              :alt="profile.full_name"
              size="2xl"
              class="mx-auto"
            />
            <ListItem label="Name" :value="profile.full_name" />
            <ListItem label="Email" :value="profile.email" />
            <ListItem
              label="Phone Number"
              :value="'+' + profile.phone_number"
            />
            <ListItem
              label="Specialties"
              :value="profile.specialties.join(', ')"
            />
            <ListItem
              label="Created At"
              :value="new Date(profile.created_at).toDateString()"
              class="border-b-0"
            />
            <UDivider label="Stripe" />
            <ListItem label="Account ID" :value="profile.stripe_account_id" />
            <ListItem label="Details Submitted">
              <UBadge
                :label="profile.details_submitted ? 'Yes' : 'No'"
                :color="profile.details_submitted ? 'green' : 'red'"
                variant="soft"
                :icon="
                  profile.details_submitted
                    ? 'i-heroicons-check-badge'
                    : 'i-heroicons-shield-exclamation'
                "
              />
            </ListItem>
            <ListItem label="Payouts Enabled" class="border-b-0">
              <UBadge
                :label="profile.payouts_enabled ? 'Yes' : 'No'"
                :color="profile.payouts_enabled ? 'green' : 'red'"
                variant="soft"
                :icon="
                  profile.payouts_enabled
                    ? 'i-heroicons-check-badge'
                    : 'i-heroicons-shield-exclamation'
                "
              />
            </ListItem>
          </div>
        </UCard>
      </div>
      <div class="flex-[0.5]">
        <USkeleton
          v-if="isLoadingGigs"
          class="h-full w-full"
          :ui="{ rounded: 'rounded-xl' }"
        />
        <ErrorCard
          v-if="gigsError"
          title="Error fetching worker profile"
          :message="gigsError.message"
        />

        <UCard
          :ui="{ body: { padding: 'px-0 sm:p-0' }, rounded: 'rounded-2xl' }"
        >
          <WorkerGigsTable v-if="gigs && gigs.length > 0" :gigs="gigs" />
          <div
            v-if="gigs && gigs.length === 0"
            class="grid place-items-center gap-2 p-4 h-full"
          >
            <Icon name="i-heroicons-folder-open" size="lg" />
            <p>No Gigs Found</p>
          </div>
        </UCard>
      </div>
      <div class="flex-1">
        <USkeleton
          v-if="isLoadingPayouts"
          class="h-full w-full"
          :ui="{ rounded: 'rounded-xl' }"
        />
        <ErrorCard
          v-if="payoutsError"
          title="Error fetching worker profile"
          :message="payoutsError.message"
        />

        <UCard
          :ui="{ body: { padding: 'px-0 sm:p-0' }, rounded: 'rounded-2xl' }"
        >
          <WorkerPayoutsTable
            v-if="payouts && payouts.length > 0"
            :payouts="payouts"
          />
          <div
            v-if="payouts && payouts.length === 0"
            class="grid place-items-center gap-2 p-4 h-full"
          >
            <Icon name="i-heroicons-folder-open" size="lg" />
            <p>No Payouts Found</p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Database } from "~/types/supabase.types";

const client = useSupabaseClient<Database>();

const route = useRoute();

const workerId = route.params.id;

const {
  isLoading: isLoadingProfile,
  data: profile,
  error: profileError,
} = useQuery({
  queryKey: ["worker", workerId],
  queryFn: async () => {
    const { data, error } = await client
      .from("workers")
      .select()
      .eq("id", workerId)
      .single();
    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error("No data returned");
    }

    return data;
  },
});

const {
  isLoading: isLoadingGigs,
  data: gigs,
  error: gigsError,
} = useQuery({
  queryKey: ["worker", workerId, "gigs"],
  queryFn: async () => {
    const { data, error } = await client
      .from("gigs_view")
      .select()
      .or(`matched_worker_id.eq.${workerId},assigned_worker_id.eq.${workerId}`);
    console.log({ data, error });
    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error("No data returned");
    }

    return data;
  },
});

const {
  isLoading: isLoadingPayouts,
  data: payouts,
  error: payoutsError,
} = useQuery({
  queryKey: ["worker", workerId, "payouts"],
  queryFn: async () => {
    const { data, error } = await client
      .from("payouts_view")
      .select()
      .eq("worker_id", workerId);
    console.log({ data, error });
    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error("No data returned");
    }

    return data;
  },
});
</script>

<style lang="scss" scoped></style>
