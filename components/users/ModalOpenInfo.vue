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
                <div class="flex flex-col">
                    <label class="flex justify-between mb-4" for="name">Nome completo:<UInput class="w-2/3" name="name" disabled /></label>
                    <label class="flex justify-between mb-4" for="email">E-mail:<UInput class="w-2/3" name="email" disabled/><UButton size="sm" color="amber" variant="solid" label="Alterar" :trailing="false" @click="alterar = true"/></label>
                    <URadioGroup v-model="selected" disabled :options="[{label:'Usuário administrador', help:'Tem todos os direitos: cadastrar, excluir, etc.'}, {label:'Usuário padrão', help:'Não pode excluir cadastros e nem criar ou editar usuários.'}]"/>
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

const showModal = defineModel({required: true});


const openInfo = ref(false)
const isOpenCad = ref(false)

const alterar = ref(false)
const altPass = ref(false)
const exclusao = ref(false)


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

    const selected = ref('')
</script>