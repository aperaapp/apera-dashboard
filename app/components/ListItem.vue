<template>
  <div class="p-3 border-b border-b-gray-200 dark:border-b-gray-800">
    <p class="text-gray-400 dark:text-gray-500 line-clamp-1">
      {{ label }}
    </p>
    <p v-if="value" class="font-medium">
      {{ value }}
    </p>
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
const { label, value } = defineProps<{
  label: string;
  value?: string | number
}>();
</script>

<style scoped></style>
