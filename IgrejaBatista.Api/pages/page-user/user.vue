<template>
    <div>
        <div class="table h-1/2 w-1/2 items-center mt-10 border-2 dark:border-gray-400 border-gray-800 rounded-2xl">
            <UTable :columns="columns" :rows="people" @click="isOpen = true"/>
            <UModal v-model="isOpen" prevent-close>
                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <div class="flex justify-end">
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                        </div>
                    </template>
                    <div class="flex flex-col">
                        <label class="flex justify-between mb-4" for="name">Nome completo:<UInput class="w-2/3" name="name" disabled /></label>
                        <label class="flex justify-between mb-4" for="email">E-mail:<UInput class="w-2/3" name="email" disabled/><UButton size="sm" color="amber" variant="solid" label="Alterar" :trailing="false" @click="alterar = true"/></label>
                        <UModal v-model="alterar" prevent-close>
                            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                <template #header>
                                    <div class="flex items-center justify-end">
                                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="alterar = false" />
                                    </div>
                                </template>
                                <div class="flex flex-col items-center text-center px-16">
                                    <h2 class="text-xl mb-5">Alteração de e-mail</h2>
                                    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                                        <UFormGroup class="mb-5" name="email">
                                            <label class="flex">Novo e-mail:<UInput class="ml-5" v-model="state.email" placeholder="E-mail"/></label>
                                        </UFormGroup>
                                    </UForm>
                                    <p>Uma mensagem de confirmação será enviada ao novo e-mail informado.</p>
                                </div>
                                <template #footer>
                                    <div class="buttons flex justify-center">
                                        <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="confEm.add({ title: 'Enviando...', timeout: 2500, callback: confirmEm })"/>
                                    </div>
                                </template>
                            </UCard>
                        </UModal>
                        <div class="flex justify-around">
                            <UCheckbox disabled label="Usuário administrador" help="Tem todos os direitos: cadastrar, excluir, etc."/>
                            <UCheckbox disabled label="Usuário padrão" help="Não pode excluir cadastros e nem criar ou editar usuários."/>
                        </div>
                    </div>
                    <template #footer>
                        <div class="buttons flex justify-around">
                            <UButton size="sm" color="amber" variant="solid" label="Excluir" :trailing="false" @click="exclusao = true"/>
                            <UModal v-model="exclusao" prevent-close>
                                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                    <div class="flex flex-col items-center text-center px-16">
                                        <h2 class="text-xl mb-5">Excluir usuário</h2>
                                        <p>Digite a sua senha para confirmar a exclusão do cadastro.</p>
                                        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                                            <UFormGroup name="password">
                                                <UInput class="mt-5" v-model="state.password" type="password" placeholder="Senha"/>
                                            </UFormGroup>
                                        </UForm>
                                    </div>
                                    <template #footer>
                                        <div class="buttons flex justify-around mx-24">
                                            <UButton size="sm" color="amber" variant="solid" label="Cancelar" :trailing="false" @click="cancel()"/>
                                            <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="delUs.add({ title: 'Excluindo usuário...', timeout: 2500, callback: delUser })"/>
                                        </div>
                                    </template>
                                </UCard>
                            </UModal>
                            <UButton size="sm" color="amber" variant="solid" label="Alterar senha" :trailing="false" @click="altPass = true"/>
                            <UModal v-model="altPass" prevent-close>
                                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                    <template #header>
                                        <div class="flex items-center justify-end">
                                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="altPass = false" />
                                        </div>
                                    </template>
                                    <div class="flex flex-col items-center text-center px-16">
                                        <h2 class="text-xl mb-5">Alteração de senha</h2>
                                        <p>Digite a sua senha para confirmar a alteração.</p>
                                        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                                            <UFormGroup name="password">
                                                <UInput class="mt-5" v-model="state.password" type="password" placeholder="Senha"/>
                                            </UFormGroup>
                                        </UForm>
                                    </div>
                                    <template #footer>
                                        <div class="buttons flex justify-center">
                                            <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="confA.add({ title: 'Enviando...', timeout: 2500, callback: confAlt })"/>
                                            <UModal v-model="confirmAlt" prevent-close>
                                                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                                    <div class="flex flex-col text-center items-center">
                                                        <h2 class="text-xl mb-5">Alteração feita com sucesso!</h2>
                                                        <UButtonGroup class="mb-5"size="sm" orientation="horizontal">
                                                            <UInput /><UButton icon="i-heroicons-clipboard-document" color="gray" />
                                                        </UButtonGroup>
                                                        <p>A nova senha foi enviada também para o e-mail associado à conta.</p>
                                                    </div>
                                                    <template #footer>
                                                        <div class="flex justify-center">
                                                            <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="closeConf"/>
                                                        </div>
                                                    </template>
                                                </UCard>
                                            </UModal>
                                        </div>
                                    </template>
                                </UCard>
                            </UModal>
                        </div>
                    </template>
                </UCard>
            </UModal>
            <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
            </div>
        </div>
        <div class="flex justify-center my-10">
            <UButton size="sm" color="amber" variant="solid" label="Novo cadastro" :trailing="false" @click="isOpenCad = true"/>
            <UModal v-model="isOpenCad" prevent-close>
                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <div class="flex justify-end">
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpenCad = false" />
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
                    <template #footer>
                        <div class="flex justify-end mr-5">
                            <UButton size="sm" color="amber" variant="solid" label="Criar" :trailing="false" @click="creatUs.add({ title: 'Criando usuário...', timeout: 2500, callback: createUs })"/>
                            <UModal v-model="isOpenPassword" prevent-close>
                                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                    <div class="flex flex-col text-center items-center">
                                        <h2 class="text-xl mb-5">Senha gerada para o novo cadastro!</h2>
                                        <UButtonGroup class="mb-5"size="sm" orientation="horizontal">
                                            <UInput /><UButton icon="i-heroicons-clipboard-document" color="gray" />
                                        </UButtonGroup>
                                        <p>A senha foi enviada também para o e-mail inserido anteriormente.</p>
                                    </div>
                                    <template #footer>
                                        <div class="flex justify-center">
                                            <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="closeAll"/>
                                        </div>
                                    </template>
                                </UCard>
                            </UModal>
                        </div>
                    </template>
                </UCard>
            </UModal>
        </div>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('E-mail inválido').required('Por favor, insira um e-mail válido!'),
  password: string()
    .min(8, 'A senha deve conter no mínimo 8 caracteres!')
    .required('Por favor, insira uma senha válida!'),
    name: string().required('Por favor, insira um nome!')
    .test('is-full-name', 'Por favor, insira um nome completo!', value => {
      return value && value.trim().split(' ').length > 1;
    })
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
  name:undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}

    definePageMeta({
        layout: 'layout-geral'
    })

    const columns = [
        {key: 'id', label: 'Nº'},
        {key: 'name', label: 'Nome'},
        {key: 'email', label: 'E-mail'},
        {key: 'type', label: 'Usuário'},
        {key: 'edit'}
    ]

    const people = [{
        id: 1,
        name: 'nome',
        email: 'cdk.adfd@gmail.com',
        type: 'adm'
    }]
    const page = ref(1)
    const pageCount = 5

    const rows = computed(() => {
        return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
    })

    const isOpen = ref(false)
    const alterar = ref(false)
    const isOpenCad = ref(false)
    const isOpenPassword = ref(false)
    const altPass = ref(false)
    const exclusao = ref(false)
    const confirmAlt = ref(false)

    const creatUs = useToast()
    const confEm = useToast()
    const confA = useToast()
    const delUs = useToast()

    function cancel (){
        exclusao.value = false
    }

    function delUser (){
        exclusao.value = false
        isOpen.value = false
    }

    function confirmEm (){
        alterar.value = false
    }
    function confAlt(){
        confirmAlt.value = true
    }

    function createUs () {
        isOpenPassword.value = true
    }

    function closeAll (){
        isOpenPassword.value = false
        isOpenCad.value = false
    }
    function closeConf (){
        confirmAlt.value = false
        altPass.value = false
    }


</script>