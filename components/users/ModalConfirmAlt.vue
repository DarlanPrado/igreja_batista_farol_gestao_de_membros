<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <div class="flex flex-col text-center items-center">
                <h2 class="text-xl mb-5">Alteração feita com sucesso!</h2>
                <UButtonGroup class="mb-5"size="sm" orientation="horizontal">
                    <UInput v-model="senhaGerada" readonly/>
                    <UButton icon="i-heroicons-clipboard-document" color="gray" @click="copiar"/>
                </UButtonGroup>
                <p>A nova senha foi enviada também para o e-mail associado à conta.</p>
            </div>
            <template #footer>
                <div class="flex justify-center">
                    <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="() => { showModal = false, emit('close') }"/>
                </div>
            </template>
        </UCard>
    </UModal>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { $yup, $notification } = useNuxtApp();

const emit = defineEmits(['close'])
const showModal = defineModel({required: true});
const senhaGerada = ref<string>('')

const gerarSenha = (): string => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
};

senhaGerada.value = gerarSenha()

const copiar = () => {
    navigator.clipboard.writeText(senhaGerada.value).then(() => {
        $notification.success("Senha copiada")
    }).catch(err => {
        console.error('Erro ao copiar a senha: ', err);
    });
};

</script>