import type Session from "~/types/session";

export const useUserSession = () => {
    const { $http, $notification } = useNuxtApp();
    const session: Ref<Session | void> = useState("session", () => {})

    const sessionCookie = useCookie("session", {
        maxAge: parseInt(useRuntimeConfig().public.cookie_expire),
        watch: true,
    });

    watch(sessionCookie, (value) => {
        if(value){
            navigateTo("/home");
        }else{
            navigateTo("/login");
        }
    });

    const create = async(email: string, senha: string) => {
        try{
            await $http.back().post("open/login", {
                email,
                senha,
            }).then(response => {
                if(response){
                    switch(response.code){
                        case 400:
                            $notification.warning("Acesso negado", response.message);
                            break
                        case 404:
                            $notification.warning("Acesso negado", response.message);
                            break
                        case 200:
                            session.value = response.data;
                            sessionCookie.value = session.value!.token;
                            break
                        default: 
                            throw new Error("Retorno inesperado", {
                                cause: response
                            });
                    }
                }
            });
        }catch(e){
            console.error(e);
            $notification.danger("Erro", "Ocorreu um erro inesperado, tente novamente mais tarde. \n Se o erro persistir entre em contato com o responsável");
            throw createError({
                message: "Ocorreu um erro ao tentar fazer a requisição",
                cause: e,
                fatal: true
            });
        }
    }

    const close = () => {
        session.value = undefined
        sessionCookie.value = undefined
    }

    return {
        create,
        close,
        sessionCookie,
    }
}