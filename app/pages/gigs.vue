<script setup lang="ts">
import type { User } from "~/types";
import type { GigViewRow } from "~/types/db.types";
import type { Database } from "~/types/supabase.types";

const defaultColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "required_specialties",
    label: "Required Specialties",
  },
  {
    key: "created_at",
    label: "Posted On",
    sortable: true,
  },
  {
    key: "day",
    label: "Day",
    sortable: true,
  },
  {
    key: "location_name",
    label: "Location",
  },
  {
    key: "status",
    label: "Status",
  },
];

const q = ref("");
const selected = ref<User[]>([]);
const selectedColumns = ref(defaultColumns);
const selectedStatuses = ref([]);
const selectedLocations = ref([]);
const sort = ref({ column: "id", direction: "asc" as const });
const input = ref<{ input: HTMLInputElement }>();

const columns = computed(() =>
  defaultColumns.filter((column) => selectedColumns.value.includes(column)),
);

const client = useSupabaseClient<Database>();

const { data: gigs, error } = await useAsyncData("gigs", async () => {
  const { data } = await client
    .from("gigs_view")
    .select()
    .order("created_at", { ascending: true });
  return data;
});

const filterSorted = computed(() => {
  return gigs.value
    .filter((gig) => {
      console.log(q.value);
      if (!q.value) return true;

      return gig.title.search(new RegExp(q.value, "i")) !== -1;
    })
    .filter((gig) => {
      if (!selectedStatuses.value?.length) return true;

      return selectedStatuses.value.includes(gig.status.replace("_", " "));
    })
    .filter((gig) => {
      if (!selectedLocations.value?.length) return true;

      return selectedLocations.value.includes(gig.location_name);
    })
    .sort((a, b) => {
      if (!sort.value.column) return 0;

      const aValue = a[sort.value.column];
      const bValue = b[sort.value.column];

      if (aValue < bValue) return sort.value.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sort.value.direction === "asc" ? 1 : -1;
      return 0;
    });
});

const defaultLocations = gigs.value.reduce(
  (acc, gig: NonNullable<GigViewRow>) => {
    if (!acc.includes(gig.location_name)) {
      acc.push(gig.location_name);
    }
    return acc;
  },
  [] as string[],
);

const defaultStatuses = gigs.value.reduce((acc, gig) => {
  const st = gig.status.replace("_", " ");
  if (!acc.includes(st)) {
    acc.push(st);
  }
  return acc;
}, [] as string[]);

function getStatusColor(
  status: Database["public"]["Enums"]["work_status"],
): string {
  switch (status) {
    case "not_started":
      return "orange";
    case "started":
      return "blue";
    case "completed":
      return "green";
    case "not_matched":
      return "red";
    case "matched":
      return "purple";
    default:
      return "black";
  }
}

defineShortcuts({
  "/": () => {
    input.value?.input?.focus();
  },
});

const selectedGig = ref<GigViewRow | null>(null);
const showGigDetails = ref(false);
function onSelectRow(row: GigViewRow) {
  selectedGig.value = row;
  showGigDetails.value = true;
}
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Gigs" :badge="gigs.length">
        <template #right>
          <UInput
            ref="input"
            v-model="q"
            icon="i-heroicons-funnel"
            autocomplete="off"
            placeholder="Filter gigs..."
            class="hidden lg:block"
            @keydown.esc="$event.target.blur()"
          >
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <USelectMenu
            v-model="selectedStatuses"
            icon="i-heroicons-check-circle"
            placeholder="Status"
            multiple
            :options="defaultStatuses"
            :ui-menu="{ option: { base: 'capitalize' } }"
          />
          <USelectMenu
            v-model="selectedLocations"
            icon="i-heroicons-map-pin"
            placeholder="Location"
            :options="defaultLocations"
            multiple
          />
        </template>

        <template #right>
          <USelectMenu
            v-model="selectedColumns"
            icon="i-heroicons-adjustments-horizontal-solid"
            :options="defaultColumns"
            multiple
            class="hidden lg:block"
          >
            <template #label> Show Columns </template>
          </USelectMenu>
        </template>
      </UDashboardToolbar>

      <UTable
        v-model:sort="sort"
        :rows="filterSorted"
        :columns="columns"
        sort-mode="manual"
        class="w-full"
        :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }"
        @select="onSelectRow"
      >
        <template #id-data="{ row }">
          <div class="flex items-center gap-3">
            <UTooltip :text="row.id">
              <span class="text-gray-900 dark:text-white font-medium"
                >{{ row.id.slice(0, 3) }}...</span
              >
            </UTooltip>
          </div>
        </template>
        <template #title-data="{ row }">
          <p
            class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"
          >
            {{ row.title }}
          </p>
        </template>
        <template #created_at-data="{ row }">
          <p
            class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"
          >
            {{ new Date(row.created_at).toDateString() }}
          </p>
        </template>
        <template #day-data="{ row }">
          <p
            class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"
          >
            {{ new Date(row.day).toDateString() }}
          </p>
        </template>
        <template #required_specialties-data="{ row }">
          <div class="flex items-center gap-3">
            <span class="text-gray-900 dark:text-white font-medium">
              <span v-if="row.required_specialties">
                {{ row.required_specialties.slice(0, 2).join(", ") }}
              </span>
              <span v-if="!row.required_specialties" class="opacity-10">
                Empty
              </span>
              <span
                v-if="
                  row.required_specialties &&
                  row.required_specialties.length > 3
                "
                class="ml-2"
              >
                <UKbd>
                  {{
                    row.required_specialties?.length <= 3
                      ? ""
                      : `+${row.required_specialties?.slice(2).length} more`
                  }}
                </UKbd>
              </span>
            </span>
          </div>
        </template>
        <template #status-data="{ row }">
          <UBadge
            :label="row.status.replace('_', ' ')"
            :color="getStatusColor(row.status)"
            variant="subtle"
            class="capitalize"
          />
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>

  <USlideover v-model="showGigDetails">
    <GigCard :gig="selectedGig" />
  </USlideover>
</template>
