<template>
  <div class="p-3 border border-gray-200 dark:border-gray-800 grid place-items-center rounded-md">
    <p class="font-medium text-lg">
      {{ value }}
    </p>
    <p class="text-gray-400 dark:text-gray-500 line-clamp-1">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { label, value } = defineProps<{
  label: string;
  value: string | number
}>();
</script>

<style scoped></style>
