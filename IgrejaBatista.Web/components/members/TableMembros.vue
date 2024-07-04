<template>
    <!-- <div class="w-full mt-14">
        <UCard>
            <template #header>
                <div class="flex justify-between">
                    <div>
                        <UInput v-model="searchInput" placeholder="Buscar..." />
                    </div>
                    <div>
                        <UTooltip text="Adicionar membro">
                            <UButton @click="emit('createMembers')" icon="i-heroicons-plus-solid" />
                        </UTooltip>
                    </div>
                </div>
            </template>

            <UTable :columns="columns" :rows="filteredRows" >
                <template #bl_ativo-data="{ row }">
                    <UBadge v-if="row.bl_ativo" label="Habilitado" color="green"/>
                    <UBadge v-else label="Desabilitado" color="red"/>
                </template>
                <template #data_nascimento-data="{ row }">
                    <span v-if="row.data_nascimento">{{ new Date(row.data_nascimento).toLocaleDateString() }}</span>
                </template>
                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>
            </UTable>
        </UCard>
    </div> -->
    <div>
        <MembersModalEditMember v-if="showModalEditMember" v-model="showModalEditMember" :idMembro="idMemberSelected"/>
        <UTable :columns="columns" :rows="filteredRows" >
            <template #bl_ativo-data="{ row }">
                <UBadge v-if="row.bl_ativo" label="Habilitado" color="green"/>
                <UBadge v-else label="Desabilitado" color="red"/>
            </template>
            <template #data_nascimento-data="{ row }">
                <span v-if="row.data_nascimento">{{ new Date(row.data_nascimento).toLocaleDateString() }}</span>
            </template>
            <template #actions-data="{ row }">
                <UDropdown :items="items(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                </UDropdown>
            </template>
        </UTable>
    </div>
</template>
<script setup lang="ts">
import type { Membro } from '~/types/stores/membros';
const searchInput: Ref<string> = defineModel('search', { required: true});
const idMemberSelected = ref();
const showModalEditMember = ref(false);
const emit = defineEmits(['findMembers','createMembers']);

const columns = [{
  key: 'nome',
  label: 'Nome'
},{
  key: 'data_nascimento',
  label: 'Nascimento',
  sortable: true,
}, {
    key: 'bl_ativo',
    label: 'Status',
    sortable: true
},{
    key: 'actions',
}]


const dinamicAlterStatus = (status: Membro["bl_ativo"]) => {
    if(status){
        return [{
            label: 'Desabilitar',
            icon: 'i-heroicons-bolt-slash-solid',
            click: desabilitarMembro
        }]
    }else{
        return [{
            label: 'Habilitar',
            icon: 'i-heroicons-bolt-solid',
            click: habilitarMembro
        }]
    }
}

const filteredRows = computed(() => {
    if (!searchInput.value) {
        return useMembroStore().getAllMembros
    }

    return useMembroStore().getAllMembros.filter((person) => {
        return Object.values(person).some((value) => {
            return String(value).toLowerCase().includes(searchInput.value.toLowerCase())
        })
    })
})

const items = (row: Membro) => [
  [{
    label: 'Editar',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => { idMemberSelected.value = row.id_membro, showModalEditMember.value = true }
  }], dinamicAlterStatus(row.bl_ativo),
]

const habilitarMembro = (idMembro: Membro["id"]) => {
    emit("findMembers");
}

const desabilitarMembro = (idMembro: Membro["id"]) => {
    emit("findMembers");
}

</script>