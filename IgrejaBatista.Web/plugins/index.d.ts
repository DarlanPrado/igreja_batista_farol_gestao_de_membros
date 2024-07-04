import type * as Yup from './yup';
import type * as http from './http'

declare module '#app' {
    interface NuxtApp {
      $yup: Yup,
      $http: http
    }
  }
  
  declare module 'vue' {
    interface ComponentCustomProperties {
      $yup: Yup,
      $http: http
    }
  }