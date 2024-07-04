<template>
    <div class="w-full h-full bg-gray-800 dark:bg-gray-900">
        <div class="flex justify-center items-center p-4 border-b-2 border-primary-500">
            <span class="text-center font-semibold text-primary-500">Menu</span>
        </div>
        <UVerticalNavigation :links="links" />
    </div>
</template>
<script setup lang="ts">


const links = [{
    label: 'Inicio',
    icon: 'i-heroicons-home-solid',
    to: '/home'
},{
    label: 'Membros',
    icon: 'i-heroicons-user-group-solid',
    to: '/members'
},{
    label: 'Usuarios',
    icon: 'i-heroicons-users-solid',
    to: '/users'
},{
    label: 'Relatórios',
    icon: 'i-heroicons-clipboard-document-list-solid',
    to: '/reports'
}]

</script>