<script setup lang="ts">
import type { User } from '~/types'
import type { WorkerRow } from '~/types/db.types';
import type { Database } from '~/types/supabase.types';

const defaultColumns = [
  {
    key: 'id',
    label: '#'
  },
  {
    key: 'stripe_account_id',
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
    key: 'specialties',
    label: 'Specialties'
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

const { data: workers, error } = await useAsyncData('workers', async () => {
  const { data } = await client.from('workers').select().order("created_at", { ascending: true });
  return data;
});

const filterSorted = computed(() => {
  return workers.value.filter((worker) => {
    console.log(q.value)
    if (!q.value) return true

    return worker.full_name?.search(new RegExp(q.value, 'i')) !== -1 || worker.email.search(new RegExp(q.value, 'i')) !== -1
  }).sort((a, b) => {
    if (!sort.value.column) return 0

    const aValue = a[sort.value.column]
    const bValue = b[sort.value.column]

    if (aValue < bValue) return sort.value.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sort.value.direction === 'asc' ? 1 : -1
    return 0
  })
})



defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})


const selectedWorker = ref<WorkerRow | null>(null)
const showWorkerDetails = ref(false)
const router = useRouter()
function onSelectRow(row: WorkerRow) {
  router.push(`/dashboard/workers/${row.id}`)
  // selectedWorker.value = row
  // showWorkerDetails.value = true
}

</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Workers" :badge="workers.length">
        <template #right>
          <UInput ref="input" v-model="q" icon="i-heroicons-funnel" autocomplete="off" placeholder="Filter workers..."
            class="hidden lg:block" @keydown.esc="$event.target.blur()">
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>

        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
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
        <template #specialties-data="{ row }">
          <div class="flex items-center gap-3">
            <span class="text-gray-900 dark:text-white font-medium">
              <span v-if="row.specialties"> {{
                row.specialties.slice(0, 2).join(", ")
                }}
              </span>
              <span v-if="!row.specialties" class="opacity-10"> Empty </span>
              <span v-if="row.specialties && row.specialties.length > 3" class="ml-2">
                <UKbd>
                  {{ row.specialties?.length <= 3 ? "" : `+${row.specialties?.slice(2).length} more` }} </UKbd>
              </span>
            </span>


          </div>
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
  <USlideover v-model="showWorkerDetails">
    <div class="max-h-screen">
      <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="() => {
          console.log('Closing popover');
          showWorkerDetails = null
          showWorkerDetails = false

        }" label="Close" />
      <div class="h-full w-full overflow-y-auto">
        <div class="pt-4 grid place-items-center gap-2">
          <UAvatar size="xl" :src="selectedWorker.avatar" :alt="selectedWorker.full_name" />
          <p class="font-bold md:text-lg text-center">{{ selectedWorker.full_name }}</p>
        </div>
        <div class="w-full space-y">
          <ListItem label="ID" :value="selectedWorker.id" />
          <ListItem label="Stripe Account ID" :value="selectedWorker.stripe_account_id" />
          <ListItem label="Created At" :value="new Date(selectedWorker.created_at).toDateString()" />
          <ListItem label="Email" :value="selectedWorker.email" />
          <ListItem label="Phone Number" :value="'+' + selectedWorker.phone_number" />
          <ListItem label="Specialties" :value="selectedWorker.specialties.join(', ')" />
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
