<template>    
    <UsersModalAltPass v-model="altPass" @submit="delUser" />
    <UsersModalExclusao v-model="exclusao" @submit="delUser" @cancel="cancel" />
    <UsersModalAlterar v-model="alterar" @submit="confirmEm" />
    <div>
        <UModal v-model="showModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex justify-end">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                    </div>
                </template>
                <div class="flex flex-col" v-if="usuario && usuario.tipo === 'admin'">
                <label class="flex justify-between mb-4" for="name">Nome completo:
                    <UInput class="w-2/3" name="name" v-model="state.nome" disabled />
                </label>
                <label class="flex justify-between mb-4" for="email">E-mail:
                    <UInput class="w-2/3" name="email" v-model="state.email" disabled />
                    <UButton size="sm" color="amber" variant="solid" label="Alterar" :trailing="false" @click="alterar = true"/>
                </label>
                <URadioGroup v-model="state.tipo" :options="radioOptions" disabled/>
            </div>
            <div class="flex flex-col" v-else-if="usuario && usuario.tipo === 'padrao'">
                <label class="flex justify-between mb-4" for="name">Nome completo:
                    <UInput class="w-2/3" name="name" v-model="state.nome" disabled />
                </label>
                <label class="flex justify-between mb-4" for="email">E-mail:
                    <UInput class="w-2/3" name="email" v-model="state.email" disabled />
                    <UButton size="sm" color="amber" variant="solid" label="Alterar" :trailing="false" @click="alterar = true"/>
                </label>
                <URadioGroup v-model="state.tipo" :options="radioOptions" disabled/>
            </div>
                <template #footer>
                    <div class="buttons flex justify-around">
                        <UButton size="sm" color="amber" variant="solid" label="Excluir" :trailing="false" @click="exclusao = true"/>
                        <UButton size="sm" color="amber" variant="solid" label="Alterar senha" :trailing="false" @click="altPass = true"/>
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { useUsuarioStore } from '~/stores/usuarios';
import type { UsuarioData } from '~/types/stores/usuarios';

const showModal = defineModel({required: true});
const openInfo = ref(false)
const alterar = ref(false)
const altPass = ref(false)
const exclusao = ref(false)
const radioOptions = [
    { label: 'Usuário administrador', help: 'Tem todos os direitos: cadastrar, excluir, etc.' , value: 'admin' || 'adm' },
    { label: 'Usuário padrão', help: 'Não pode excluir cadastros e nem criar ou editar usuários.', value: 'padrao' || 'padrão' }
];

function cancel (){
        exclusao.value = false
    }

    function delUser (){
        exclusao.value = false
        openInfo.value = false
    }

    function confirmEm (){
        alterar.value = false
    }

    const selectedUser = ref({
  nome: '',
  email: '',
  tipo: ''
});

// Funções de atualização
const updateName = (value: string) => {
  selectedUser.value.nome = value;
};

const updateEmail = (value: string) => {
  selectedUser.value.email = value;
};

const props = defineProps<{ idUsuario: number | null }>();
const usuario = ref<UsuarioData | undefined>(undefined);

const state = reactive ({
    nome: '',
    email: '',
    tipo: '',
    senha: ''
})

watch(() => props.idUsuario, (newId) => {
    if(newId !== null){
        usuario.value = useUsuarioStore().getUsuarioDataById(newId)
        if (usuario.value){
            state.nome = usuario.value.nome || ''
            state.email = usuario.value.email || ''
            state.tipo = usuario.value.tipo || ''
            state.senha = usuario.value.senha || ''
        } else {
            state.nome = ''
            state.email = ''
            state.tipo = ''
            state.senha = ''
        }
    }
}, { immediate: true })

</script>