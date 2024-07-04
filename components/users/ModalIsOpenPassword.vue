<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <div class="flex flex-col text-center items-center">
                <h2 class="text-xl mb-5">Senha gerada para o novo cadastro!</h2>
                <UButtonGroup class="mb-5"size="sm" orientation="horizontal">
                    <UInput v-model="senhaGerada" readonly/>
                    <UButton @click="copiar" icon="i-heroicons-clipboard-document" color="gray" />
                </UButtonGroup>
                <p>A senha foi enviada também para o e-mail inserido anteriormente.</p>
            </div>
            <template #footer>
                <div class="flex justify-center">
                    <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="notification()"/>
                </div>
            </template>
        </UCard>
    </UModal>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { $yup, $notification } = useNuxtApp();

const showModal = defineModel({required: true});

function notification(){
    $notification.success("Criando usuário")
    setTimeout(() => {
        window.location.reload()
    }, 2500)
}

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