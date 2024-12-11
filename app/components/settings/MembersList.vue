<script setup lang="ts">
import type { DashboardUserRow } from '~/types/db.types';


defineProps({
  members: {
    type: Array as PropType<DashboardUserRow[]>,
    default: () => []
  }
})

function getItems(member: DashboardUserRow) {
  return [[{
    label: 'Edit member',
    click: () => console.log('Edit', member)
  }, {
    label: 'Remove member',
    labelClass: 'text-red-500 dark:text-red-400',
    click: () => console.log('Remove', member)
  }]]
}

function onRoleChange(member: DashboardUserRow, role: string) {
  // Do something with data
  console.log(member.name, role)
}
</script>

<template>
  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800">
    <li v-for="(member, index) in members" :key="index"
      class="flex items-center justify-between gap-3 py-3 px-4 sm:px-6">
      <div class="flex items-center gap-3 min-w-0">
        <UAvatar v-bind="{ src: member.avatar }" :alt="member.name" size="md" />

        <div class="text-sm min-w-0">
          <p class="text-gray-900 dark:text-white font-medium truncate">
            {{ member.name }}
          </p>
          <p class="text-gray-500 dark:text-gray-400 truncate">
            {{ member.email }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <USelectMenu :model-value="member.role" :options="['member', 'owner']" color="white"
          :ui-menu="{ select: 'capitalize', option: { base: 'capitalize' } }"
          @update:model-value="onRoleChange(member, $event)" />

        <UDropdown :items="getItems(member)" position="bottom-end">
          <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" />
        </UDropdown>
      </div>
    </li>
  </ul>
</template>
