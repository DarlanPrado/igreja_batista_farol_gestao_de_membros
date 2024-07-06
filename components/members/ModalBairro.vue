<template>
    <div>
        <UModal v-model="showModal" prevent-close @close="resetForm">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex justify-end">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                    </div>
                </template>
                <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                        <UFormGroup class="mb-5" name="bairro">
                            <label class="flex justify-around mb-5">Nome do bairro:<UInput class="w-2/3" v-model="state.bairro"/></label>
                        </UFormGroup>
                    </UForm>
                <div class="flex justify-center mt-5">
                    <UButton type="submit" size="sm" color="amber" variant="solid" label="Criar" :trailing="false" @click="notification()"/>
                </div>
            </UCard>
        </UModal>
    </div>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification } = useNuxtApp();
const form = ref();
type Schema = InferType<typeof schema>
const emit = defineEmits(["submit","cancel"])
const showModal = defineModel({required: true});

const state = reactive({
    bairro: undefined
})

const schema = $yup.object({
    nome: $yup.string().required('Por favor, insira um nome!')
})

const resetForm = () => {
    state.bairro =  undefined,

    form.value.clear();
}

async function onSubmit (event: FormSubmitEvent<Schema>){
  emit('submit')
}

function notification(){
    $notification.success("Criando...")
    setTimeout(() => {
        showModal.value = false
    }, 2500)
}
</script>