<template>
    <div class="h-full w-full flex justify-center items-center">
        <!-- <div class="bg-gray-200 dark:bg-gray-900 p-6 rounded w-96">
            
        </div> -->
        <UCard :ui="{ base: 'w-full sm:w-[60%] md:w-[40%]' }">
            <UForm :schema="schemaLogin" :state="stateLogin" @submit="logar" class="space-y-2">
                <UFormGroup size="md" label="Email" name="email">
                    <UInput v-model="stateLogin.email"/>
                </UFormGroup>
                <UFormGroup size="md" label="Senha" name="senha">
                    <!-- <UInput v-model="stateLogin.senha" /> -->
                    <UButtonGroup class="w-full" size="md" orientation="horizontal">
                        <UInput v-model="stateLogin.senha" :type=" showPassword ? 'text':'password'" class="w-full" />
                        <UTooltip :text="showPassword ? 'Ocultar senha' : 'Mostrar senha'">
                            <UButton @click="showPassword = !showPassword" :icon="showPassword ? 'i-heroicons-eye-slash-solid' : 'i-heroicons-eye-solid'" color="gray" />
                        </UTooltip>
                    </UButtonGroup>
                </UFormGroup>
                <div class="flex justify-end">
                    <NuxtLink :to="`/login/esqueciASenha/${stateLogin.email ? stateLogin.email : ''}`" class="hover:text-primar cursor-pointer" text="Esqueci a senha" />
                </div>  
                <div class="flex justify-center">
                    <UButton class="text-gray-900" size="md" type="submit" label="Entrar" :variant="useColorMode().value == 'dark' ? 'outline' : 'solid'" block/>
                </div>
            </UForm>
        </UCard>
    </div>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification, $http, $store } = useNuxtApp()
const showPassword = ref(false)



definePageMeta({
    layout: 'layout-login'
})

const schemaLogin = $yup.object({
  email: $yup.string().email().required(),
  senha: $yup.string().required()
})

type schemaLogin = InferType<typeof schemaLogin>

const stateLogin = reactive({
  email: undefined,
  senha: undefined
})

const logar =  async(event: FormSubmitEvent<schemaLogin>) => {

    $http.back().post('auth', stateLogin, null, true).then((res) => {
        let user = {
            token: res.result
        }

        localStorage.setItem('USERDATA', JSON.stringify(user))

        navigateTo('/home')
    })
}

</script>