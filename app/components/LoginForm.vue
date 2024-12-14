<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import type { Database } from "~/types/supabase.types";
import type { DashboardUserRow } from "~/types/db.types";
import z from "zod";

const { $toast } = useNuxtApp();
const userStore = useUserStore();

interface State {
  email: string;
  password: string;
}

const emit = defineEmits(["close"]);

const REQUEST_PAYLOAD_SCHEMA = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type Schema = z.output<typeof REQUEST_PAYLOAD_SCHEMA>;

const state = reactive<Schema>({
  password: "",
  email: "",
});

const router = useRouter();
// https://ui.nuxt.com/components/form
const login = useMutation({
  mutationFn: async (event: FormSubmitEvent<State>) => {
    const { data, error } = await $fetch<{
      data: DashboardUserRow;
      error: Error;
    }>("/api/signin", {
      method: "post",
      body: { email: event.data.email, password: event.data.password },
    });
    if (error) {
      console.log({ error });
      throw error;
    }

    return data;
  },
  onSuccess: (profile) => {
    console.log("Login succesful");
    userStore.profile = profile;
    router.push("/");
  },
  onError: (error) => {
    $toast.error("Error", { description: error.message });
  },
});

const showPassword = ref(false);
</script>

<template>
  <UCard>
    <template #header>
      <p class="font-bold text-center">Apera Login</p>
    </template>
    <UForm
      :schema="REQUEST_PAYLOAD_SCHEMA"
      :validate-on="['submit']"
      :state="state"
      class="space-y-4 w-full md:w-[40vh]"
      @submit="login.mutate"
    >
      <UFormGroup label="Email" name="email">
        <UInput
          v-model="state.email"
          type="email"
          placeholder="john.doe@example.com"
        />
      </UFormGroup>

      <UFormGroup label="Password" name="password" class="w-full">
        <UButtonGroup orientation="horizontal" class="w-full">
          <UInput
            v-model="state.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="******"
            class="flex-1"
          />
          <UButton
            icon="i-heroicons-eye"
            color="white"
            @click="showPassword = !showPassword"
          />
        </UButtonGroup>
      </UFormGroup>

      <UButton
        type="submit"
        label="Submit"
        color="black"
        block
        :loading="login.isPending.value"
      />
    </UForm>
  </UCard>
</template>
