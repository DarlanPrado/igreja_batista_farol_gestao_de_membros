export default defineNuxtRouteMiddleware((to, from) => {
    
    if(!to.name || useRuntimeConfig().public.open_path.split(",").some(pathOpen => pathOpen == to.path)){
        return
    }

    // if(!useUserSession().sessionCookie.value){

    //     useUserSession().close();
    //     //Necessário correção no plugin notification, para ser possivel chamar no lado servidor
    //     if(import.meta.client){
    //         useNuxtApp().$notification.warning("Sessão expirada", "logue novamente para continuar");
    //     }
    //     return navigateTo({
    //         path: "/",
    //         force: true,
    //     });
    // }
});