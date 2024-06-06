import type * as Yup from './yup';

declare module '#app' {
    interface NuxtApp {
      $yup: Yup
    }
  }
  
  declare module 'vue' {
    interface ComponentCustomProperties {
      $yup: Yup
    }
  }