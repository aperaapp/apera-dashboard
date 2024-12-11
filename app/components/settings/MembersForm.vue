<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { Database } from '~/types/supabase.types';
import z from "zod"
import { useClipboard } from '@vueuse/core'
import { generatePassword } from '../utils/common.utils';
import type { EdgeFxResponse } from '~/types/db.types';

const { $toast } = useNuxtApp()

interface State { email: string; password: string }

const client = useSupabaseClient<Database>();

const emit = defineEmits(['close'])

const REQUEST_PAYLOAD_SCHEMA = z.object({
  fullname: z.string().min(3, "Full Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().min(3, "Role is required"),
});

type Schema = z.output<typeof REQUEST_PAYLOAD_SCHEMA>

const state = reactive<Schema>({
  password: '',
  email: "",
  role: "",
  fullname: ""
})
// https://ui.nuxt.com/components/form
const createAdminMutation = useMutation({
  mutationFn: async (event: FormSubmitEvent<State>) => {
    const { error, data } = await client.functions.invoke<EdgeFxResponse<any>>("create-dashboard-user", {
      body: event.data
    })
    if (error) {
      console.log({ error })
      throw error
    }
    if (data.error) {
      throw new Error(data.error)
    }
    return true
  },
  onSuccess: () => {
    $toast.success("Admin account created", { description: "Share the password to the admin" })
    emit('close')
  },
  onError: (error) => {
    $toast.error("Error adding member", { description: error.message })
  }
})

const showPassword = ref(false)

const { copy } = useClipboard()

function genPassword() {
  const password = generatePassword(6)
  console.log({ password })
  state.password = password;
  showPassword.value = true
  copy(password)
  $toast.success("Password copied")
}

</script>

<template>
  <UForm :schema="REQUEST_PAYLOAD_SCHEMA" :validate-on="['submit']" :state="state" class="space-y-4"
    @submit="createAdminMutation.mutate">
    <UFormGroup label="Full name" name="fullname">
      <UInput v-model="state.fullname" type="name" placeholder="John Doe" autofocus />
    </UFormGroup>
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" type="email" placeholder="john.doe@example.com" />
    </UFormGroup>

    <UFormGroup label="Role" name="role">
      <USelectMenu v-model="state.role" :options="['Viewer', 'Editor', 'Manager']"
        :ui-menu="{ select: 'capitalize', option: { base: 'capitalize' } }" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" class="w-full">
      <UButtonGroup orientation="horizontal" class="w-full">
        <UInput v-model="state.password" :type="showPassword ? 'text' : 'password'" placeholder="******"
          class="flex-1" />
        <UButton icon="i-heroicons-eye" color="white" @click="showPassword = !showPassword" />
        <UButton icon="i-heroicons-sparkles" label="Generate" color="gray" @click="genPassword" />
      </UButtonGroup>
    </UFormGroup>

    <div class="flex justify-end gap-3">
      <UButton label="Cancel" color="gray" variant="ghost" @click="emit('close')" />
      <UButton type="submit" label="Submit" color="black" :loading="createAdminMutation.isPending.value" />
    </div>
  </UForm>
</template>
