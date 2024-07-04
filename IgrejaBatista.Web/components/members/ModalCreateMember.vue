<template>
    <UModal v-model="showModal" @close="resetForm">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Adicionar Membro</h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                </div>
            </template>
  
            <div>
                <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormGroup name="nome" label="Nome">
                        <UInput v-model="state.nome" autofocus />
                    </UFormGroup>
                    <UFormGroup name="telefone" label="Telefone">
                        <UInput v-model="state.celular" />
                    </UFormGroup>
                    <div class="grid grid-cols-2 gap-2">
                        <UFormGroup name="data_nascimento" label="Data nascimento">
                            <UInput type="date" v-model="state.data_nascimento" />
                        </UFormGroup>
                        <UFormGroup name="data_ingresso" label="Ingresso em">
                            <UInput type="date" v-model="state.data_ingresso" />
                        </UFormGroup>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <UFormGroup name="cidade" label="Cidade">
                            <UInputMenu v-model="state.cidade" :options="[{ id: 1, nome: 'Joinville' }]" valueAttribute="id" optionAttribute="nome" />
                        </UFormGroup>
                        <UFormGroup name="bairro" label="Bairro">
                            <UInputMenu v-model="state.bairro" :options="[{ id: 1, nome: 'Anita Garibaldi' } , { id: 2, nome: 'Comasa'} ]" valueAttribute="id" optionAttribute="nome" :disabled="!state.cidade" />
                        </UFormGroup>
                    </div>
                    <div class="grid grid-cols-2 gap-2">                        
                        <UFormGroup name="bl_batizado" label="Batizado">
                            <USelect v-model="state.bl_batizado" :options="blBatizadoOptions" />
                        </UFormGroup>
                        <UFormGroup name="bl_ativo" label="Status">
                            <USelect v-model="state.bl_ativo" :options="statusOptions" />
                        </UFormGroup>
                    </div>
                    <div class="buttons flex justify-center">
                        <UButton type="submit" size="sm" color="amber" variant="solid" label="Salvar" block/>
                    </div>
                </UForm>
            </div>
        </UCard>
    </UModal>
</template>
<script setup lang="ts">
import { type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification, $http } = useNuxtApp();
const form = ref();
const showModal = defineModel({required: true});

const schema = $yup.object({
    nome: $yup.string().required(),
    data_nascimento: $yup.date(),
    id_estado_civil: $yup.number(),
    celular: $yup.string(),
    id_endereco: $yup.number(),
    cidade: $yup.number(),
    bairro: $yup.number(),
    data_ingresso: $yup.date(),
    bl_batizado: $yup.boolean().required(),
    bl_ativo: $yup.boolean().required(),
})

type Schema = InferType<typeof schema>

const state = reactive({
    id_usuario: 1,
    nome: "",
    data_nascimento: undefined,
    id_estado_civil: 1,
    celular: "",
    id_endereco: 0,
    cidade: undefined,
    bairro: undefined,
    data_ingresso: undefined,
    bl_batizado: false,
    bl_ativo: true,
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
    if (state.bairro == 1){
        state.id_endereco = 1
    } else {
        state.id_endereco = 2
    }

  console.log(state)

  $http.back().post('membros', state).then(() => {})
  $notification.success("Enviando...")
  showModal.value = false;
}

const blBatizadoOptions = [{
    label: "Sim",
    value: 1,
},{
    label: "Não",
    value: 0,
}];

const statusOptions = [{
    label: "Habilitado",
    value: 1,
},{
    label: "Desabilitado",
    value: 0,
}];

const resetForm = () => {
    state.nome =  "",
    state.data_nascimento =  undefined,
    state.Estado_civil =  undefined,
    state.telefone =  "",
    state.cidade =  undefined,
    state.bairro =  undefined,
    state.data_ingresso =  undefined,
    state.bl_batizado =  false,
    state.bl_ativo =  true,

    form.value.clear();
}

</script>