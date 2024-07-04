<template>
  <div>
    <NuxtLayout>
      <NuxtPage  :page-key="route => route.fullPath"/>
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-stone-300 dark:bg-stone-800'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | IBF gestao de membros` : 'IBF gestao de membros';
  },  
  // link: [
  //   {
  //     rel: 'icon',
  //     type: 'image/svg+xml',
  //     href: '/logo.png'
  //   }
  // ]
});

</script>
