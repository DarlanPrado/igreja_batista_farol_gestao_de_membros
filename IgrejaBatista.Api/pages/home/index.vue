<template>
    <div>
        <HomeAniversariantesDoDia :date="date"/>
        <VDatePicker v-model="date" :attributes="attrs" />
    </div>
</template>
<script setup lang="ts">
import type { Aniversariante } from "~/types/stores/aniversariantes"

definePageMeta({
    middleware: ["session-guardian"]
});


const date = ref(new Date());
onMounted(() => {
    findAniversariantes();
})
definePageMeta({
    layout: 'layout-home'
});
useHead({
    title: 'Inicio'
});

const attrs = ref([
    {
        key: 'aniversarios',
        dot: true,
        dates: useAniversariantesStore().getAniversariantesDatas
    },
]); 

const findAniversariantes = async() => {
    const aniversariantes: Array<Aniversariante > = [{
        id: 1,
        name: "teste 1",
        data: new Date(2024, 5, 5)
    },{
        id: 2,
        name: "teste 2",
        data: new Date()
    },{
        id: 3,
        name: "teste 3",
        data: new Date()
    }]

    console.log("")
    useAniversariantesStore().defineAniversariantes(aniversariantes);
}


</script>