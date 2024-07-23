<template>
    <div class="w-full mt-14">
        <MembersModalCreateMember v-model="showModalCreatemMember" />
        <UCard>
            <template #header>
                <div class="flex justify-between">
                    <div>
                        <UInput v-model="searchInput" placeholder="Buscar..." />
                    </div>
                    <div>
                        <UTooltip text="Adicionar membro">
                            <UButton @click="showModalCreatemMember = true" icon="i-heroicons-plus-solid" />
                        </UTooltip>
                    </div>
                </div>
            </template>

            <MembersTableMembros v-model:search="searchInput"  @find-members="findMembers"/>
        </UCard>
    </div>
</template>
<script setup lang="ts">
const searchInput = ref();
const showModalCreatemMember = ref(false);
const { $http } = useNuxtApp()

onMounted(() => {
    findMembers();
    findEnderecos();
})

definePageMeta({
    layout: 'layout-home'
});
useHead({
    title: 'Membros'
});



const findMembers = () => {
    $http.back().get('membros').then((res) => {
        console.log(res)
        useMembroStore().defineMembros(res)
    })

}

const findEnderecos = () => {
    useMembroStore().defineEnderecos([{
        id_endereco: 1,
        cidade: {
            id: 1,
            nome: "cidade 1"
        },
        bairro: {
            id: 1,
            nome: "bairro 1"
        }
    },{
        id_endereco: 2,
        cidade: {
            id: 2,
            nome: "cidade 2"
        },
        bairro: {
            id: 2,
            nome: "bairro 2"
        }
    }, {
        id_endereco: 3,
        cidade: {
            id: 3,
            nome: "cidade 3"
        },
        bairro: {
            id: 3,
            nome: "bairro 3"
        }
    }])
}

</script>