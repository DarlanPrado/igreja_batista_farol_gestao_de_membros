<template>
    <UsersModalIsOpenPassword v-model="isOpenPassword" @submit="closeAll" />
    <div>
        <UModal v-model="showModal" prevent-close @close="resetForm">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex justify-end">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                    </div>
                </template>
                <div class="flex flex-col">
                    <UForm ref="form" :schema="userSchema" :state="state" class="space-y-4" @submit="onSubmit">
                        <UFormGroup class="mb-5" name="name">
                            <label class="flex justify-between mb-5">Nome completo:<UInput class="w-2/3" v-model="state.nome" placeholder="Nome completo"/></label>
                        </UFormGroup>
                        <UFormGroup class="mb-5" name="email">
                            <label class="flex justify-between mb-5">E-mail:<UInput class="w-2/3" v-model="state.email" placeholder="E-mail"/></label>
                        </UFormGroup>
                        <UFormGroup class="mb-5" name="tipo">
                            <URadioGroup v-model="state.bl_admin" :options="radioOptions" />
                        </UFormGroup>
                        <div class="flex justify-end mr-5">
                            <UButton type="submit" size="sm" color="amber" variant="solid" label="Criar" :trailing="false" @click="notification()"/>
                        </div>
                    </UForm>
                </div>
            </UCard>
        </UModal>
    </div>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { _selected } from '#tailwind-config/theme/aria';
import type { _help } from '#tailwind-config/theme/cursor';
const { $yup, $notification } = useNuxtApp();
import { ref, reactive } from 'vue'

const emit = defineEmits(["submit"])
const showModal = defineModel({required: true});
const form = ref()

const userSchema = $yup.object({
    email: $yup.string().email().required(),
    senha: $yup.string(),
    nome: $yup.string().required('Por favor, insira um nome!')
    .test('is-full-name', 'Por favor, insira um nome completo!', (value: any) => {
      return value && value.trim().split(' ').length > 1;
    }),
    bl_admin: $yup.number().required('Por favor, selecione um tipo de usuário!'),
    bl_ativo: $yup.number()
})

type UserSchema = InferType<typeof userSchema>

const state = reactive<UserSchema>({
    email: undefined,
    senha: undefined,
    nome: undefined,
    bl_admin: undefined,
    bl_ativo: 1
})

async function onSubmit (event: FormSubmitEvent<UserSchema>) {
  try {
    await userSchema.validate(state, {abortEarly: false})
    emit('submit', state)
    notification()
  } catch (error) {
    console.error(error)
  }
}

function notification(){
    $notification.success("Gerando senha...")
    setTimeout(() => {
        isOpenPassword.value = true
    }, 2500)
}


const isOpenPassword = ref(false)
function closeAll (){
        isOpenPassword.value = false
        showModal.value = false
    }


const radioOptions = [
    { label: 'Usuário administrador', value: 1 || 'adm', help: 'Tem todos os direitos: cadastrar, excluir, etc.' },
    { label: 'Usuário padrão', value: 0 || 'padrão', help: 'Não pode excluir cadastros e nem criar ou editar usuários.' }
];


const resetForm = () => {
    state.nome = '',
    state.email = '',
    state.tipo = '',
    form.value.clear()
}
</script>