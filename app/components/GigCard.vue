<template>
  <div class="h-screen overflow-y-auto">
    <ListItem label="ID" :value="gig.id" />
    <ListItem label="Title" :value="gig.title" />
    <ListItem label="Hourly Pay" :value="gig.hourly_pay" />

    <div class="flex">
      <ListItem class="flex-1" label="Status">
        <UBadge
          :label="gig.status.replace('_', ' ')"
          :color="getStatusColor(gig.status)"
          variant="solid"
          class="capitalize mt-2"
          :ui="{ rounded: 'rounded-full' }"
          icon="i-solar-notification-unread-linear"
        />
      </ListItem>
      <ListItem class="flex-1" label="Posted By" :value="gig.business_name" />
    </div>
    <div class="flex">
      <ListItem
        label="Matched Worker"
        class="flex-1"
        v-if="gig.matched_worker_id"
      >
        <UButton
          label="Open Profile"
          :to="`/workers/${gig.matched_worker_id}`"
          variant="soft"
          :ui="{ rounded: 'rounded-full' }"
          size="xs"
          class="mt-2"
        />
      </ListItem>
      <ListItem
        label="Assigned Worker"
        class="flex-1"
        v-if="gig.assigned_worker_id"
      >
        <UButton
          label="Open Profile"
          :to="`/workers/${gig.matched_worker_id}`"
          variant="soft"
          :ui="{ rounded: 'rounded-full' }"
          size="xs"
          class="mt-2"
        />
      </ListItem>
    </div>
    <div class="flex">
      <ListItem
        label="Start Time"
        :value="new Date(gig.start_time).toLocaleTimeString('en-US')"
        class="flex-1"
      />
      <ListItem
        label="End Time"
        :value="new Date(gig.end_time).toLocaleTimeString('en-US')"
        class="flex-1"
      />
    </div>

    <div class="flex">
      <ListItem
        v-if="gig.clock_in_time"
        label="Clock In Time"
        :value="new Date(gig.clock_in_time).toLocaleTimeString('en-US')"
        class="flex-1"
      />
      <ListItem
        v-if="gig.clock_out_time"
        label="Clock Out Time"
        :value="new Date(gig.clock_out_time).toLocaleTimeString('en-US')"
        class="flex-1"
      />
    </div>
    <ListItem
      label="Required Specialties"
      :value="gig.required_specialties.join(', ')"
    />

    <ListItem label="Posted By" :value="gig.business_name" />
    <div class="flex">
      <ListItem
        label="Posted On"
        :value="new Date(gig.created_at).toDateString()"
        class="flex-1"
      />
      <ListItem
        label="Posted At"
        :value="new Date(gig.created_at).toLocaleTimeString('en-US')"
        class="flex-1"
      />
    </div>
    <ListItem label="Location" :value="gig.location_name" />

    <ListItem label="Description" :value="gig.description" />
    <ListItem label="Extra Instructions" :value="gig.extra_instructions" />
  </div>
</template>

<script setup lang="ts">
import type { GigViewRow } from "~/types/db.types";
import type { Database } from "~/types/supabase.types";

const { gig } = defineProps<{
  gig: GigViewRow;
}>();

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
</script>
