<template>
    <div>
        <UsersModalOpenInfo v-model="openInfo" />
        
        <UsersModalIsOpenCad v-model="isOpenCad" @submit="createUs" />

        <div class="table h-1/2 w-1/2 items-center mt-10 border-2 dark:border-gray-400 border-gray-800 rounded-2xl">
            <UTable :columns="columns" :rows="people" @click="openInfo = true"/>
            
            <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
            </div>
        </div>
        <div class="flex justify-center my-10">
            <UButton size="sm" color="amber" variant="solid" label="Novo cadastro" :trailing="false" @click="isOpenCad = true"/>
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
    .test('is-full-name', 'Por favor, insira um nome completo!', (value: any) => {
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
        layout: 'layout-home'
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

    const openInfo = ref(false)
    const isOpenCad = ref(false)
    const isOpenPassword = ref(false)
    

    const creatUs = useToast()
    const confEm = useToast()
    const confA = useToast()
    const delUs = useToast()

    

    function createUs () {
        isOpenPassword.value = true
    }

    


</script>