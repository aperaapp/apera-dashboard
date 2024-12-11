<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="mx-auto p-4 grid place-items-center">
      <p class="text-3xl font-black">${{ payout.wk_fee + payout.bs_fee }}</p>
      <p>Profit</p>
    </div>
    <div class="w-full space-y">
      <ListItem label="ID" :value="payout.id" />
      <ListItem
        label="Date"
        :value="new Date(payout.created_at).toDateString()"
      />
      <ListItem label="Business" :value="payout.business_name" />
      <ListItem label="Business Payment" :value="payout.bs_amount" />
      <ListItem label="Business Fee" :value="payout.bs_fee" />
      <ListItem label="Worker" :value="payout.worker_name" />
      <ListItem label="Worker Payment" :value="payout.wk_amount" />
      <ListItem label="Worker Fee" :value="payout.wk_fee" />

      <div class="flex gap-2 items-center justify-center p-2">
        <UButton
          label="Go to Worker"
          :to="`/workers/${payout.worker_id}`"
          variant="soft"
          icon="i-solar-user-hands-outline"
        />
        <UButton
          label="Go to Business"
          :to="`/business/${payout.business_id}`"
          variant="soft"
          icon="i-solar-shop-linear"
        />
        <UButton
          label="Go to Gig"
          :to="`/gigs?id=${payout.gig_id}`"
          variant="soft"
          icon="i-solar-inbox-unread-linear"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PayoutViewRow } from "~/types/db.types";
const { payout } = defineProps<{
  payout: PayoutViewRow;
}>();
</script>
