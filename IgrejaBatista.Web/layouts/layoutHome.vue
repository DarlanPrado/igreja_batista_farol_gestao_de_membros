<template>
    <div class="flex flex-col h-screen">
        <header class="h-20 w-full px-5 bg-gray-50 dark:bg-gray-300 flex justify-between items-center dark:text-gray-950">
            <div>
                <h1>logo</h1>
            </div>
            <div class="flex gap-2">
                <ColorMode />
                <UTooltip text="Sair">
                    <UButton icon="i-heroicons-arrow-right-on-rectangle-solid" @click="useUserSession().close" color="gray" />
                </UTooltip>
            </div>
        </header>
        <div class="h-full w-full flex">
            <div class="min-w-52">
                <NavigateMenu />
            </div>
            <UContainer class="h-full w-full flex">
                <slot />
            </UContainer>
        </div>
        <!-- <UContainer class="h-full w-full flex">
            <div class="w-20">
                <NavigateMenu />
            </div>
            <div class="w-full">
                <slot />
            </div>
        </UContainer> -->
    </div>
    <footer class="bg-gray-200 dark:bg-gray-900 min-h-24 flex justify-center items-center">
        <p class="font-semibold">© Copyright igreja Batista Farol Joinville</p>
    </footer>
</template>
<script setup lang="ts">

</script>