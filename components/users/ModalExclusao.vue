<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <div class="flex flex-col items-center text-center px-16">
                <h2 class="text-xl mb-5">Excluir usuário</h2>
                <p>Digite a sua senha para confirmar a exclusão do cadastro.</p>
                <UForm :schema="schema" :state="state" class="space-y-4 flex flex-col items-center" @submit="onSubmit">
                    <UFormGroup name="password">
                        <UInput class="my-5" v-model="state.password" type="password" placeholder="Senha"/>
                    </UFormGroup>
                    <div class="buttons flex flex-row">
                        <UButton class="mx-5"size="sm" color="amber" variant="solid" label="Cancelar" @click="emit('cancel')"/>
                        <UButton class="mx-5" type="submit" size="sm" color="amber" variant="solid" label="Confirmar" @click="notification()"/>
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

const emit = defineEmits(["submit","cancel"])
const showModal = defineModel({required: true});

const schema = $yup.object({
  password: $yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres!').required('Por favor, insira uma senha válida!').required(),
})

type Schema = InferType<typeof schema>

const state = reactive({
  password: undefined,
})

async function onSubmit (event: FormSubmitEvent<Schema>){
  emit('submit')
}

function notification(){
    $notification.warning("Excluindo usuário")
    setTimeout(() => {
        window.location.reload()
    }, 2500)
}

</script>