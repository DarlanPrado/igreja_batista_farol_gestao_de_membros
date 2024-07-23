<template>
    <div class="bg-gray-200 dark:bg-gray-900 p-6 rounded w-96">
        <UForm :schema="schemaLogin" :state="stateLogin" @submit="enviarEmailRecuperarSenha" class="space-y-2">
            <UFormGroup size="md" label="Email" name="email">
                <UInput v-model="stateLogin.email"/>
            </UFormGroup>
            <UFormGroup size="md" label="Confirmar email" name="confirmarEmail">
                <UInput v-model="stateLogin.confirmarEmail" />
            </UFormGroup>
            <div class="flex justify-end">
                <NuxtLink to="/login" class="hover:text-primar cursor-pointer" text="Acessar conta" />
            </div>  
            <div class="flex justify-center">
                <UButton class="text-gray-900" size="md" type="submit" label="Recuperar senha" :variant="useColorMode().value == 'dark' ? 'outline' : 'solid'" block/>
            </div>
        </UForm>
    </div>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification } = useNuxtApp()

definePageMeta({
    layout: 'layout-login'
})

const schemaLogin = $yup.object({
  email: $yup.string().email().required(),
  confirmarEmail: $yup.string().email().oneOf([$yup.ref('email')], 'Os e-mails devem ser iguais').required('Confirme o e-mail'),
})

type schemaLogin = InferType<typeof schemaLogin>

const stateLogin = reactive({
  email: useRoute().params.slug[0] || undefined,
  confirmarEmail: undefined
})

const enviarEmailRecuperarSenha =  async(event: FormSubmitEvent<schemaLogin>) => {
  // Do something with event.data
  $notification.warning("Este recurso está em desenvolvimento")
}


</script>