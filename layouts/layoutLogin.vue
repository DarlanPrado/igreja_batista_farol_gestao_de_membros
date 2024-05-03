<template>
    <div class="flex flex-col h-screen">
        <header class="h-20 w-full px-5 bg-gray-50 dark:bg-gray-300 grid grid-cols-2 md:grid-cols-3 dark:text-gray-950">
            <div class="hidden md:block">
            </div>
            <div class="flex justify-center items-center">
                <h1>Logo</h1>
            </div>
            <div class="flex justify-end items-center">
                <ColorMode />
            </div>
        </header>
        <UContainer class="h-full w-full">
            <slot />
        </UContainer>
        <!-- <div class="h-full content flex justify-center items-center">
            <slot />
        </div> -->
    </div>
    <footer class="bg-gray-200 dark:bg-gray-900 min-h-24 flex justify-center items-center">
        <p class="font-semibold">© Copyright igreja Batista Farol Joinville</p>
    </footer>
</template>
<script setup lang="ts">


</script>
<style scoped>

/* .content {
    min-height: calc(100vh - 80px);
} */
</style>