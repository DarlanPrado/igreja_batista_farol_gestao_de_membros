export default defineNuxtPlugin((nuxtApp) => {
    return {
        name: 'notification',
        parallel: true,

        provide: {
            notification: {
                success(title: string, description?: string, actions?: Array<NotificationAction>){
                    useToast().add({
                        title: title,
                        description: description,
                        icon: 'i-heroicons-check-badge-solid',
                        color: 'green',
                        actions: actions,
                        timeout: 2500,
                    })
                },
                warning(title: string, description?: string, actions?: Array<NotificationAction>){
                    useToast().add({
                        title: title,
                        description: description,
                        icon: 'i-heroicons-exclamation-circle-solid',
                        color: 'amber',
                        actions: actions,
                        timeout: 2500,
                    })
                },
                danger(title: string, description?: string, actions?: Array<NotificationAction>){
                    useToast().add({
                        title: title,
                        description: description,
                        icon: 'i-heroicons-exclamation-triangle-solid',
                        color: 'red',
                        actions: actions,
                        timeout: 2500,
                    })
                },
                info(title: string, description?: string, actions?: Array<NotificationAction>){
                    useToast().add({
                        title: title,
                        description: description,
                        icon: 'i-heroicons-light-bulb-solid',
                        color: 'sky',
                        actions: actions,
                        timeout: 2500,
                    })
                },
            }
        }
    }
});