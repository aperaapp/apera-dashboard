<script setup lang="ts">
import type { User } from '~/types'
import type { PayoutViewRow } from '~/types/db.types';
import type { Database } from '~/types/supabase.types';

const defaultColumns = [
  {
    key: 'id',
    label: '#'
  },
  {
    key: 'created_at',
    label: 'Date',
    sortable: true
  },
  {
    key: 'business_name',
    label: 'Business',
    sortable: true
  },
  {
    key: 'worker_name',
    label: 'Worker',
    sortable: true
  },
  {
    key: 'bs_amount',
    label: 'Business Payment',
    sortable: true
  },
  {
    key: 'wk_amount',
    label: 'Worker Payment',
    sortable: true
  },
]

const q = ref('')
const selected = ref<User[]>([])
const selectedColumns = ref(defaultColumns)
const selectedBusiness = ref<string>()
const selectedWorker = ref<string>()
const sort = ref({ column: 'id', direction: 'asc' as const })
const input = ref<{ input: HTMLInputElement }>()

const columns = computed(() => defaultColumns.filter(column => selectedColumns.value.includes(column)))

const client = useSupabaseClient<Database>();

const { data: payouts, error } = await useAsyncData('payouts', async () => {
  const { data } = await client.from('payouts_view').select().order("created_at", { ascending: true });
  return data;
});

const filterSorted = computed(() => {
  return payouts.value.filter((payout) => {
    console.log(q.value)
    if (!q.value) return true

    return payout.business_name.search(new RegExp(q.value, 'i')) !== -1 || payout.worker_name.search(new RegExp(q.value, 'i')) !== -1
  }).filter((payout) => {
    if (!selectedBusiness.value) return true

    return selectedBusiness.value === payout.business_name
  }).filter((payout) => {
    if (!selectedWorker.value) return true

    return selectedWorker.value === payout.worker_name
  }).sort((a, b) => {
    if (!sort.value.column) return 0

    const aValue = a[sort.value.column]
    const bValue = b[sort.value.column]

    if (aValue < bValue) return sort.value.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sort.value.direction === 'asc' ? 1 : -1
    return 0
  })
})


const defaultBusinesses = payouts.value.reduce((acc, payout) => {
  if (!acc.includes(payout.business_name)) {
    acc.push(payout.business_name)
  }
  return acc
}, [] as string[])

const defaultWorkers = payouts.value.reduce((acc, payout) => {
  if (!acc.includes(payout.worker_name)) {
    acc.push(payout.worker_name)
  }
  return acc
}, [] as string[])

defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})


const selectedPayout = ref<PayoutViewRow | null>(null)
const showPayoutDetails = ref(false)

function onSelectRow(row: PayoutViewRow) {
  selectedPayout.value = row
  showPayoutDetails.value = true
}

</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Workers" :badge="payouts.length">
        <template #right>
          <UInput ref="input" v-model="q" icon="i-heroicons-funnel" autocomplete="off" placeholder="Filter Payouts..."
            class="hidden lg:block" @keydown.esc="$event.target.blur()">
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>

        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <USelectMenu v-model="selectedBusiness" icon="i-heroicons-building-office" placeholder="Business"
            :options="defaultBusinesses" :ui-menu="{ option: { base: 'capitalize' } }" />
          <USelectMenu v-model="selectedWorker" icon="i-heroicons-user" placeholder="Workers"
            :options="defaultWorkers" />
        </template>
        <template #right>
          <USelectMenu v-model="selectedColumns" icon="i-heroicons-adjustments-horizontal-solid"
            :options="defaultColumns" multiple class="hidden lg:block">
            <template #label>
              Show Columns
            </template>
          </USelectMenu>
        </template>
      </UDashboardToolbar>


      <UTable v-model:sort="sort" :rows="filterSorted" :columns="columns" sort-mode="manual" class="w-full"
        :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }" @select="onSelectRow">

        <template #id-data="{ row }">
          <div class="flex items-center gap-3">
            <UTooltip :text="row.id">
              <span class="text-gray-900 dark:text-white font-medium">{{ row.id.slice(0, 3) }}...</span>
            </UTooltip>
          </div>
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
  <USlideover v-model="showPayoutDetails">
    <div class="max-h-screen">
      <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="() => {
          console.log('Closing popover');
          showPayoutDetails = null
          showPayoutDetails = false

        }" label="Close" />
      <div class="h-full w-full overflow-y-auto">
        <div class="mx-auto p-4 grid place-items-center">
          <p class="text-3xl font-black">
            ${{ selectedPayout.wk_fee + selectedPayout.bs_fee }}
          </p>
          <p>Profit</p>
        </div>
        <div class="w-full space-y">
          <ListItem label="ID" :value="selectedPayout.id" />
          <ListItem label="Date" :value="new Date(selectedPayout.created_at).toDateString()" />
          <ListItem label="Business" :value="selectedPayout.business_name" />
          <ListItem label="Business Payment" :value="selectedPayout.bs_amount" />
          <ListItem label="Business Fee" :value="selectedPayout.bs_fee" />
          <ListItem label="Worker" :value="selectedPayout.worker_name" />
          <ListItem label="Worker Payment" :value="selectedPayout.wk_amount" />
          <ListItem label="Worker Fee" :value="selectedPayout.wk_fee" />
        </div>
      </div>
    </div>
  </USlideover>
</template>
