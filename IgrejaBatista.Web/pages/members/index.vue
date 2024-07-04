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