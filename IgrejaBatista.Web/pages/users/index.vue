<template>
    <div class="w-full mt-14">
        <UsersModalIsOpenCad v-model="isOpenCad" @submit="createUs" />
        <UCard>
            <template #header>
                <div class="w-1/4 m-4 flex justify-start">
                    <UInput v-model="searchInput" placeholder="Buscar. . ." />
                </div>
            </template>
            <UsersModalTableUser v-model:search="searchInput"/>
            <!-- <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
            </div> -->
        </UCard>
        <div class="flex justify-center my-10">
            <UButton size="sm" color="amber" variant="solid" label="Novo cadastro" :trailing="false" @click="isOpenCad = true"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useUsuarioStore } from '~/stores/usuarios';
import { ref, onMounted } from 'vue'
import UsersModalIsOpenCad from '~/components/users/ModalIsOpenCad.vue';
import UsersModalTableUser from '~/components/users/ModalTableUser.vue';

const searchInput = ref('')
const isOpenCad = ref(false)

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
    
    
    const isOpenPassword = ref(false)

    function createUs () {
        isOpenPassword.value = true
    }

    onMounted(() => {
    findUsuarios();
    })

    const findUsuarios = () => {
      useUsuarioStore().defineUsuarios([{
        id: 1,
        nome: "user 1",
        email: "adm@gmail.com",
        tipo: "admin",
        senha: "senha"
      },{
        id: 2,
        nome: "user 2",
        email: "padrao@gmail.com",
        tipo: "padrao",
        senha: "senha"
      },{
        id:3,
        nome:'user 3',
        email:'user@gamil.com',
        tipo: 'padrao',
        senha: 'senha'
      }
    ])
    }

</script>