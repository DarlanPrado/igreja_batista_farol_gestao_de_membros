import type { Aniversariante } from "~/types/stores/aniversariantes"

interface State {
    aniversatiantes : Array<Aniversariante>
}

export const useAniversariantesStore = defineStore("aniversariantes", {
    state: ():State => {
        return {
            aniversatiantes: []
        }
    },
    getters: {
        getAniversariantes(state){
            return state.aniversatiantes
        },
        getAniversariantesByData(state){
            return (date: Date) => {
                let aniversariantes: Array<Aniversariante> = [];
                state.aniversatiantes.forEach(aniversariante => {
                    if(aniversariante.data == date){
                        aniversariantes.push(aniversariante);
                    }
                });
                return aniversariantes;
            }
        },
        getAniversariantesDatas(state){
            let aniversariantes: Array<Date> = []
            state.aniversatiantes.forEach(aniversariante => {
                aniversariantes.push(new Date(aniversariante.data));
            });
            return aniversariantes;
        }
    },
    actions: {
        defineAniversariantes(aniversariantes: Array<Aniversariante>) {
            this.aniversatiantes = aniversariantes;
        }
    }
})