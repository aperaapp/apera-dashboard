<script setup lang="ts">
import type { User } from '~/types'
import type { BusinessRow } from '~/types/db.types';
import type { Database } from '~/types/supabase.types';

const defaultColumns = [
  {
    key: 'id',
    label: '#'
  },
  {
    key: 'stripe_customer_id',
    label: 'Stripe ID'
  },
  {
    key: 'full_name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true
  },
  {
    key: 'phone_number',
    label: 'Phone Number',
    sortable: true
  },
  {
    key: 'address',
    label: 'Address'
  },
]

const q = ref('')
const selected = ref<User[]>([])
const selectedColumns = ref(defaultColumns)
const selectedLocations = ref([])
const sort = ref({ column: 'id', direction: 'asc' as const })
const input = ref<{ input: HTMLInputElement }>()

const columns = computed(() => defaultColumns.filter(column => selectedColumns.value.includes(column)))

const client = useSupabaseClient<Database>();

const { data: businesses, error } = await useAsyncData('businesses', async () => {
  const { data } = await client.from('businesses').select().order("created_at", { ascending: true });
  return data;
});

const filterSorted = computed(() => {
  return businesses.value.filter((business) => {
    console.log(q.value)
    if (!q.value) return true

    return business.full_name?.search(new RegExp(q.value, 'i')) !== -1 || business.email.search(new RegExp(q.value, 'i')) !== -1
  }).filter((business) => {
    if (!selectedLocations.value?.length) return true

    return selectedLocations.value.includes(business.address)
  }).sort((a, b) => {
    if (!sort.value.column) return 0

    const aValue = a[sort.value.column]
    const bValue = b[sort.value.column]

    if (aValue < bValue) return sort.value.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sort.value.direction === 'asc' ? 1 : -1
    return 0
  })
})

const defaultLocations = businesses.value.reduce((acc, business: NonNullable<BusinessRow>) => {
  if (!acc.includes(business.address)) {
    acc.push(business.address)
  }
  return acc
}, [] as string[])



defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})


const selectedBusiness = ref<BusinessRow | null>(null)
const showBusinessDetails = ref(false)

function onSelectRow(row: BusinessRow) {
  selectedBusiness.value = row
  showBusinessDetails.value = true
}

</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Businesses" :badge="businesses.length">
        <template #right>
          <UInput ref="input" v-model="q" icon="i-heroicons-funnel" autocomplete="off"
            placeholder="Filter businesses..." class="hidden lg:block" @keydown.esc="$event.target.blur()">
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>

        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <USelectMenu v-model="selectedLocations" icon="i-heroicons-map-pin" placeholder="Location"
            :options="defaultLocations" multiple />
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
        <template #full_name-data="{ row }">
          <div class="flex items-center gap-3">
            <UAvatar v-bind="{ src: row.avatar }" :alt="row.name" size="xs" />

            <span class="text-gray-900 dark:text-white font-medium">{{ row.full_name }}</span>
          </div>
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
  <USlideover v-model="showBusinessDetails">
    <div class="max-h-screen">
      <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="() => {
          console.log('Closing popover');
          selectedBusiness = null
          showBusinessDetails = false

        }" label="Close" />
      <div class="h-full w-full overflow-y-auto">
        <div class="pt-4 grid place-items-center gap-2">
          <UAvatar size="xl" :src="selectedBusiness.avatar" :alt="selectedBusiness.full_name" />
          <p class="font-bold md:text-lg text-center">{{ selectedBusiness.full_name }}</p>
        </div>
        <div class="w-full space-y">
          <ListItem label="ID" :value="selectedBusiness.id" />
          <ListItem label="Stripe Customer ID" :value="selectedBusiness.stripe_customer_id" />
          <ListItem label="Created At" :value="new Date(selectedBusiness.created_at).toDateString()" />
          <ListItem label="Email" :value="selectedBusiness.email" />
          <ListItem label="Phone Number" :value="'+' + selectedBusiness.phone_number" />
          <ListItem label="Address" :value="selectedBusiness.address" />
        </div>
        <UCard class="m-4">
          <template #header>
            <div class="grid place-items-center">
              <UIcon name="i-heroicons-square-3-stack-3d" class="w-5 h-5 mx-auto" />
              <p class="font-medium text-lg text-center">Gigs</p>
            </div>
          </template>

          <div class="grid grid-cols-2 gap-3">
            <SummaryItem label="in Total Posted" value="10" class="col-span-2" />
            <SummaryItem label="Pending Match" value="2" />
            <SummaryItem label="Match Found" value="3" />
            <SummaryItem label="Ongoing" value="1" />
            <SummaryItem label="Completed" value="3" />
          </div>

          <template #footer>
            <UButton label="View All" block variant="solid" color="gray" />
          </template>
        </UCard>
        <UCard class="m-4">
          <template #header>
            <div class="grid place-items-center">
              <UIcon name="i-heroicons-square-3-stack-3d" class="w-5 h-5 mx-auto" />
              <p class="font-medium text-lg text-center">Payouts</p>
            </div>
          </template>

          <div class="grid grid-cols-1 gap-3">
            <SummaryItem label="in Total Paid" value="$200" />
            <SummaryItem label="Pending Payouts" value="3 → $50" />
          </div>

          <template #footer>
            <UButton label="View All" block variant="solid" color="gray" />
          </template>
        </UCard>
      </div>
    </div>
  </USlideover>
</template>
