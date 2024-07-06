<template>
    <div>
        <MembersModalCidade v-model="ModalCidade"/>
        <MembersModalBairro v-model="ModalBairro"/>
        <UModal v-model="showModal" prevent-close @close="resetForm">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex justify-between">
                        <UInput v-model="searchInput" placeholder="Buscar. . ." />
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                    </div>
                </template>
                <UTable :columns="columns" :rows="filteredRows">
                    <template #action-data="{row}">
                        <div @click="del()">
                            <UButton color="gray" variant="solid" icon="i-heroicons-x-mark"/>
                        </div>
                    </template>
                </UTable>
                <div class="flex justify-center gap-20 mt-5">
                    <UButton type="submit" size="sm" color="amber" variant="solid" label="Nova cidade" :trailing="false" @click="ModalCidade = true" />
                    <UButton type="submit" size="sm" color="amber" variant="solid" label="Novo bairro" :trailing="false" @click="ModalBairro = true" />
                </div>
            </UCard>
        </UModal>
    </div>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification } = useNuxtApp();
const form = ref();
const showModal = defineModel({required: true});
import type { Endereco } from '~/types/stores/membros';
import { ref, computed } from 'vue'
import { useMembroStore } from '~/stores/membros';

const ModalCidade = ref(false)
const ModalBairro = ref(false)

const schema = $yup.object({
    cidade: $yup.string()
})

type Schema = InferType<typeof schema>

const state = reactive({
    cidade: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  $notification.warning("Enviando...")
  showModal.value = false;
}


const resetForm = () => {
    state.cidade =  undefined

    form.value.clear();
}

const columns = [{
    key: 'nome',
    label: 'Nome'
},{
    key: 'tipo',
    label: 'Tipo'
},{
    key: 'action'
}]


function del(){
    $notification.warning("Excluindo endereço")
}

const searchInput: Ref<string> = defineModel('search', { required: true});
    
    const filteredRows = computed(() => {
        if (!searchInput.value){
            return useUsuarioStore().getAllUsuarios
        }

    return useMembroStore().getAllMembros.filter((person) => {
        return Object.values(person).some((value) => {
            return String(value).toLowerCase().includes(searchInput.value.toLowerCase())
        })
    })
    })
</script>