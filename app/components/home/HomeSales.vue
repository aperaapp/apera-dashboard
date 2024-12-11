<script setup lang="ts">
import type { Database } from '~/types/supabase.types';


const formatNumber = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format


const client = useSupabaseClient<Database>();

const { isLoading: isLoadingPayouts, data: payouts, error: payoutsError } = useQuery({
  queryKey: ['payouts', 'preview'],
  queryFn: async () => {
    const { data, error } = await client.from("payouts_view").select().order("created_at", { ascending: false })
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

const summaryMessage = computed(() => {
  if (!payouts.value) {
    return ""
  } else {
    const totalAmountSales = payouts.value.reduce((previous, current) => {
      return previous + current.wk_fee + current.bs_fee
    }, 0)
    return `${totalAmountSales}$ made in ${payouts.value.length} sale${payouts.value.length === 0 ? '' : 's'}`
  }
})
</script>

<template>
  <UDashboardCard title="Sales" :description="summaryMessage" icon="i-heroicons-banknotes">

    <USkeleton v-if="isLoadingPayouts" class="h-full w-full min-h-[100px]" :ui="{ rounded: 'rounded-xl' }" />
    <ErrorCard v-if="payoutsError" title="Error fetching payouts" :message="payoutsError.message" />
    <NuxtLink v-if="payouts" v-for="(payout) in payouts" :key="payout.id"
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative">
      <div class="pa-2 size-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5">
        <Icon name="i-heroicons-currency-dollar" class="size-5" />
      </div>
      <div class="text-sm flex-1">
        <div>
          <p class="text-gray-900 dark:text-white font-medium">
            {{ new Date(payout.created_at).toDateString() }}
          </p>
          <div class="flex items-center  gap-1">
            <Icon name="i-heroicons-user" />
            <span>{{ payout.worker_name }}</span>
          </div>
          <div class="flex items-center  gap-1">
            <Icon name="i-heroicons-building-storefront" />
            <span> {{ payout.business_name }} </span>
          </div>
        </div>
      </div>

      <p class="text-gray-900 dark:text-white font-medium text-lg">
        {{ formatNumber(payout.wk_fee + payout.bs_fee) }}
      </p>
    </NuxtLink>
  </UDashboardCard>
</template>
