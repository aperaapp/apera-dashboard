<template>
  <UCard :ui="{
    background: 'bg-red-400 dark:bg-red-800',
    rounded: 'rounded-3xl',
    body: {
      padding: 'py-2'
    }
  }">
    <div class="grid place-items-center gap-1">
      <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5 mx-auto" />
      <p class="text-center font-semibold">{{ title }}</p>
    </div>
    <p class="text-center">{{ message }}</p>
  </UCard>
</template>

<script setup lang="ts">
const { title = "Error", message } = defineProps<{
  title?: string
  message: string
}>();
</script>

<style scoped></style>
