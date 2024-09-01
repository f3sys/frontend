import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useClientStore = defineStore('client', () => {
    const F3SiD = ref("")

    async function setF3SiD() {
        const url = import.meta.env.VITE_API_URL;
        const data = await fetch(url + "visitor").then((r) => r.json());
        F3SiD.value = data.f3sid
    }

    return { F3SiD, setF3SiD, }
}, {
    persist: true
})
