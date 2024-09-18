import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useClientStore = defineStore('client', () => {
    const F3SiD = ref("")

    async function setF3SiD(): Promise<boolean> {
        const url = import.meta.env.VITE_API_URL;
        try {
            const data = await fetch(url + "visitor", {
                method: "GET"
            });
            F3SiD.value = (await data.json()).f3sid;
            return true
        } catch (e) {
            return false
        }
    }

    return { F3SiD, setF3SiD, }
}, {
    persist: true
})
