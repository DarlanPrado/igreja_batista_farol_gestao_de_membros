<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-end">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                </div>
            </template>
            <div class="flex flex-col items-center text-center px-16">
                <h2 class="text-xl mb-5">Alteração de senha</h2>
                <p>Digite a sua senha para confirmar a alteração.</p>
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormGroup name="password">
                        <UInput class="mt-5" v-model="state.password" type="password" placeholder="Senha"/>
                    </UFormGroup>
                    <div class="buttons flex justify-center">
                        <UButton type="submit" size="sm" color="amber" variant="solid" label="Confirmar"/>
                    </div>
                </UForm>
            </div>
        </UCard>
    </UModal>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification } = useNuxtApp();

const emit = defineEmits(["submit"])
const showModal = defineModel({required: true});

const schema = $yup.object({
  password: $yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres!').required('Por favor, insira uma senha válida!').required(),
})

type Schema = InferType<typeof schema>

const state = reactive({
  password: undefined,
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  $notification.success("Enviando...")
  emit('submit')
}

</script>