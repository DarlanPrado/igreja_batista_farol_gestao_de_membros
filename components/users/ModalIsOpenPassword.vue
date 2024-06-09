<template>
    <UModal v-model="showModal" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <div class="flex flex-col text-center items-center">
                <h2 class="text-xl mb-5">Senha gerada para o novo cadastro!</h2>
                <UButtonGroup class="mb-5"size="sm" orientation="horizontal">
                    <UInput /><UButton icon="i-heroicons-clipboard-document" color="gray" />
                </UButtonGroup>
                <p>A senha foi enviada também para o e-mail inserido anteriormente.</p>
            </div>
            <template #footer>
                <div class="flex justify-center">
                    <UButton size="sm" color="amber" variant="solid" label="Confirmar" :trailing="false" @click="emit('submit')"/>
                </div>
            </template>
        </UCard>
    </UModal>
</template>
<script setup lang="ts">

const emit = defineEmits(["submit"])
const showModal = defineModel({required: true});

</script>