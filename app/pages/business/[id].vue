<template>
  <div class="flex gap-4 w-full p-4">
    <div class="w-[20%]">
      <USkeleton v-if="isLoadingProfile" class="h-full w-full" :ui="{ rounded: 'rounded-xl' }" />
      <ErrorCard v-if="profileError" title="Erorr fetching business profile" :message="profileError.message" />
      <UCard v-if="profile" :ui="{ body: { padding: 'px-0 sm:p-0' }, rounded: 'rounded-2xl' }">
        <div class="space-y flex flex-col pt-4">
          <UAvatar v-bind="{ src: profile.avatar }" :alt="profile.full_name" size="2xl" class="mx-auto" />
          <ListItem label="Name" :value="profile.full_name" />
          <ListItem label="Email" :value="profile.email" />
          <ListItem label="Phone Number" :value="'+' + profile.phone_number" />
          <ListItem label="Address" :value="profile.address" />
          <ListItem label="Created At" :value="new Date(profile.created_at).toDateString()" class="border-b-0" />
          <UDivider label="Stripe" />
          <ListItem label="Customer ID" :value="profile.stripe_customer_id" />
        </div>
      </UCard>
    </div>
    <div class="w-[50%]">
      <USkeleton v-if="isLoadingGigs" class="h-full w-full" :ui="{ rounded: 'rounded-xl' }" />
      <ErrorCard v-if="gigsError" title="Error fetching business profile" :message="gigsError.message" />

      <UCard :ui="{ body: { padding: 'px-0 sm:p-0' }, rounded: 'rounded-2xl' }">
        <BusinessGigsTable v-if="gigs && gigs.length > 0" :gigs="gigs" />
        <div v-if="gigs && gigs.length === 0" class="grid place-items-center gap-2 p-4 h-full">
          <Icon name="i-heroicons-folder-open" size="lg" />
          <p>No Gigs Found</p>
        </div>
      </UCard>
    </div>
    <div class="w-[30%]">
      <USkeleton v-if="isLoadingPayouts" class="h-full w-full" :ui="{ rounded: 'rounded-xl' }" />
      <ErrorCard v-if="payoutsError" title="Error fetching business profile" :message="payoutsError.message" />

      <UCard :ui="{ body: { padding: 'px-0 sm:p-0' }, rounded: 'rounded-2xl' }">
        <BusinessPayoutsTable v-if="payouts && payouts.length > 0" :payouts="payouts" />
        <div v-if="payouts && payouts.length === 0" class="grid place-items-center gap-2 p-4 h-full">
          <Icon name="i-heroicons-folder-open" size="lg" />
          <p>No Payouts Found</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Database } from '~/types/supabase.types';

const client = useSupabaseClient<Database>();

const route = useRoute()

const businessId = route.params.id

const { isLoading: isLoadingProfile, data: profile, error: profileError } = useQuery({
  queryKey: ['business', businessId],
  queryFn: async () => {
    const { data, error } = await client.from("businesses").select().eq("id", businessId).single()
    if (error) {
      throw error
    }

    if (!data) {
      throw new Error("No data returned")
    }

    return data
  },
})

const { isLoading: isLoadingGigs, data: gigs, error: gigsError } = useQuery({
  queryKey: ['business', businessId, 'gigs'],
  queryFn: async () => {
    const { data, error } = await client.from("gigs_view").select().eq("business_id", businessId)
    console.log({ data, error })
    if (error) {
      throw error
    }

    if (!data) {
      throw new Error("No data returned")
    }


    return data
  },
})

const { isLoading: isLoadingPayouts, data: payouts, error: payoutsError } = useQuery({
  queryKey: ['business', businessId, 'payouts'],
  queryFn: async () => {
    const { data, error } = await client.from("payouts_view").select().eq("business_id", businessId)
    console.log({ data, error })
    if (error) {
      throw error
    }

    if (!data) {
      throw new Error("No data returned")
    }


    return data
  },
})
</script>

<style lang="scss" scoped></style>
