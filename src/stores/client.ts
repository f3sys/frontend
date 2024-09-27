import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useClientStore = defineStore('client', () => {
    const F3SiD = ref("")

    const SelectedPerson = ref(0)

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

    async function sendSelectedPerson(id: number): Promise<boolean> {
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const url = import.meta.env.VITE_API_URL;

        SelectedPerson.value = id

        try {
            const data = await fetch(url + "vote", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ f3sid: F3SiD.value, model_id: id })
            });

            return data.ok
        } catch (e) {
            return false
        }
    }

    return { F3SiD, setF3SiD, SelectedPerson, sendSelectedPerson }
}, {
    persist: true
})
