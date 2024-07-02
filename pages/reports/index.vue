<template>
    <div class="w-full mt-14">
        <UCard>
            <template #header>
                <div class="w-1/4 m-4 flex justify-start">
                    <UInput v-model="searchInput" placeholder="Buscar. . ."/>
                </div>
            </template>
            <TableReport v-model:search="searchInput"/>
            <!-- <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.length" />
            </div> -->
        </UCard>
        
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMembroStore } from '~/stores/membros'
import TableReport from '~/components/reports/TableReport.vue';

const searchInput = ref();

    definePageMeta({
        layout: 'layout-home'
    })
    useHead({
        title: 'Relatórios'
    });


    onMounted(() => {
    findMembers();
    })

    const findMembers = () => {
    useMembroStore().defineMembros([{
        id: 1,
        nome: "membro 1",
        celular: "123123123123",
        data_nascimento: new Date(),
        id_estado_civil: 1,
        id_endereco: 1,
        data_ingresso: new Date(),
        bl_batizado: true,
        bl_ativo: true,
    },{
        id: 2,
        nome: "membro 2",
        bl_batizado: false,
        bl_ativo: false,
    },{
        id: 3,
        nome: "membro 3",
        bl_batizado: true,
        bl_ativo: true,
    },{
        id: 4,
        nome: "membro 4",
        bl_batizado: true,
        bl_ativo: true,
    }])
}
</script>