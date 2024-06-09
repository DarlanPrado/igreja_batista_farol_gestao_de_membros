<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex justify-end">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                </div>
            </template>
            <div class="flex flex-col">
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormGroup class="mb-5" name="name">
                        <label class="flex justify-between mb-5">Nome completo:<UInput class="w-2/3" v-model="state.name" placeholder="Nome completo"/></label>
                    </UFormGroup>
                </UForm>
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormGroup class="mb-5" name="email">
                        <label class="flex justify-between mb-5">E-mail:<UInput class="w-2/3" v-model="state.email" placeholder="E-mail"/></label>
                    </UFormGroup>
                    <div class="flex justify-end mr-5">
                        <UButton type="submit" size="sm" color="amber" variant="solid" label="Criar" :trailing="false"/>
                    </div>
                </UForm>
                <div class="flex justify-around">
                    <div class="flex flex-col">
                        <UCheckbox label="Usuário administrador" help="Tem todos os direitos: cadastrar, excluir, etc."/>
                    </div>
                    <div class="flex flex-col">
                        <UCheckbox label="Usuário padrão" help="Não pode excluir cadastros e nem criar ou editar usuários."/>
                    </div>
                </div>
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
    password: $yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres!').required('Por favor, insira uma senha válida!').required(),
    name: $yup.string().required('Por favor, insira um nome!')
    .test('is-full-name', 'Por favor, insira um nome completo!', (value: any) => {
      return value && value.trim().split(' ').length > 1;
    })
})

type Schema = InferType<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
    name: undefined,
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  $notification.success("Criando usuário...")
  emit('submit')
}

</script>