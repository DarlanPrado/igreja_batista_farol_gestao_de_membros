<template>
    <ReportsRelatorioModal v-if="openReports" v-model="openReports"  :id-membro="idMemberSelected"/>
    <UTable :rows="filteredRows" :columns="columns">
                <template #action-data="{ row }">
                <div @click="report(row)">
                    <UButton color="gray" variant="solid" icon="i-heroicons-clipboard-document-list-solid" />
                </div>
            </template>
            </UTable>
</template>
<script setup lang="ts">
import ReportsRelatorioModal from '~/components/reports/relatorioModal.vue';
import type { Membro } from '~/types/stores/membros';
import { ref, computed } from 'vue'
import { useMembroStore } from '~/stores/membros';


const idMemberSelected = ref<number | null>(null);
const openReports = ref(false)

function report(row: Membro){
        idMemberSelected.value = row.id
        openReports.value = true
    }


const columns = [{
        key: 'nome',
        label: 'Nome'
    },
    {
        key: 'action'
    }]


    const searchInput: Ref<string> = defineModel('search', { required: true});
    
    const filteredRows = computed(() => {
        if (!searchInput.value){
            return useMembroStore().getAllMembros
        }

    return useMembroStore().getAllMembros.filter((person) => {
        return Object.values(person).some((value) => {
            return String(value).toLowerCase().includes(searchInput.value.toLowerCase())
        })
    })
    })
</script>