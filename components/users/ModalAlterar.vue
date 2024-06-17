<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-end">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                </div>
            </template>
            <div class="flex flex-col items-center text-center px-16">
                <h2 class="text-xl mb-5">Alteração de e-mail</h2>
                <p>Uma mensagem de confirmação será enviada ao novo e-mail informado.</p>
                <UForm :schema="schema" :state="state" class="space-y-4 mt-5" @submit="onSubmit">
                    <UFormGroup class="mb-5" name="email">
                        <label class="flex">Novo e-mail:<UInput class="ml-5" v-model="state.email" placeholder="E-mail"/></label>
                    </UFormGroup>
                    <div class="buttons flex justify-center">
                        <UButton type="submit" size="sm" color="amber" variant="solid" label="Confirmar" @click="notification()"/>
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
    email: $yup.string().email().required(),
})

type Schema = InferType<typeof schema>

const state = reactive({
    email: undefined,
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  emit('submit')
}

function notification(){
    $notification.success("Enviando...")
    setTimeout(() => {
        showModal.value = false
    }, 2500)
}

</script>