<script setup lang="ts">
import type { PayoutViewRow } from '~/types/db.types';

const { payouts } = defineProps<{
  payouts: PayoutViewRow[]
}>()

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
    key: 'wk_amount',
    label: 'Amount',
    sortable: true
  },
]

const q = ref('')
const selectedColumns = ref(defaultColumns)
const selectedBusiness = ref<string>()
const sort = ref({ column: 'id', direction: 'asc' as const })
const input = ref<{ input: HTMLInputElement }>()

const columns = computed(() => defaultColumns.filter(column => selectedColumns.value.includes(column)))

const filterSorted = computed(() => {
  return payouts.filter((payout) => {
    console.log(q.value)
    if (!q.value) return true

    return payout.worker_name.search(new RegExp(q.value, 'i')) !== -1
  }).filter((payout) => {
    if (!selectedBusiness.value) return true

    return selectedBusiness.value === payout.business_name
  }).sort((a, b) => {
    if (!sort.value.column) return 0

    const aValue = a[sort.value.column]
    const bValue = b[sort.value.column]

    if (aValue < bValue) return sort.value.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sort.value.direction === 'asc' ? 1 : -1
    return 0
  })
})


const defaultBusinesses = payouts.reduce((acc, payout) => {
  if (!acc.includes(payout.business_name)) {
    acc.push(payout.business_name)
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
      <UDashboardNavbar title="Payments" :badge="payouts.length">
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

        <template #created_at-data="{ row }">
          <span class="text-gray-900 dark:text-white font-medium">{{ new Date(row.created_at).toLocaleDateString()
            }}</span>
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
</template>
