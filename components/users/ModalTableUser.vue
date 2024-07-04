<template>
    <UsersModalOpenInfo v-model="openInfo" :id-usuario="idUsuarioSelected"/>
    <UTable :columns="columns" :rows="filteredRows">
        <template #action-data="{row}">
            <div @click="info(row)">
                <UButton color="gray" variant="solid" icon="i-heroicons-pencil-square-solid"/>
            </div>
        </template>
    </UTable>
</template>
<script setup lang="ts">
import type { UsuarioData } from '~/types/stores/usuarios';
import { useUsuarioStore } from '~/stores/usuarios';
import { ref, computed } from 'vue'
import UsersModalOpenInfo from '~/components/users/ModalOpenInfo.vue'

const idUsuarioSelected = ref<number | null>(null);
const openInfo = ref(false)

function info(row: UsuarioData){
    idUsuarioSelected.value = row.id
    openInfo.value = true
}

const columns = [
        {key: 'id', label: 'Nº'},
        {key: 'nome', label: 'Nome'},
        {key: 'email', label: 'E-mail'},
        {key: 'tipo', label: 'Usuário'},
        {key: 'action'}
    ]

    const searchInput: Ref<string> = defineModel('search', { required: true});
    
    const filteredRows = computed(() => {
        if (!searchInput.value){
            return useUsuarioStore().getAllUsuarios
        }

    return useUsuarioStore().getAllUsuarios.filter((person) => {
        return Object.values(person).some((value) => {
            return String(value).toLowerCase().includes(searchInput.value.toLowerCase())
        })
    })
    })

</script>