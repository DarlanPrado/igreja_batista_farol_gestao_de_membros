<template>
    <UCard :ui="{background: 'bg-primary-600 dark:bg-gray-900'}" >
        <template #header>
            <h6 class="font-bold text-center">Aniversariantes do dia</h6>
        </template>
        <div class="h-48">
            <div v-if="useAniversariantesStore().getAniversariantesByData(props.date).length >= 0">
                <div v-for="aniversariante in useAniversariantesStore().getAniversariantesByData(props.date)">
                    <span>aaa{{ aniversariante.name }}</span>
                </div>
            </div>  
            <div class="flex justify-center items-center" v-if="useAniversariantesStore().getAniversariantesByData(props.date).length <= 0">
                <span class="font-semibold text-primary-900 dark:text-gray-600" >Nenhum aniversariante encontrado</span>
            </div>
        </div>
    </UCard>
</template>
<script setup lang="ts">

interface Props {
    date: Date
}

const props = defineProps<Props>()

</script>