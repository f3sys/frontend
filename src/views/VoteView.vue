<script setup lang="ts">
import { useClientStore } from '@/stores/client';
import Image from 'primevue/image';

const people: Array<{ id: number, name: string, class: string, info: string, src: string }> = [
    {
        id: 1,
        name: "名前",
        class: "クラス",
        info: "説明分",
        src: "https://placehold.co/400"
    }, {
        id: 2,
        name: "名前",
        class: "クラス",
        info: "説明分",
        src: "https://placehold.co/400"
    }, {
        id: 3,
        name: "名前",
        class: "クラス",
        info: "説明分",
        src: "https://placehold.co/400"
    }, {
        id: 4,
        name: "名前",
        class: "クラス",
        info: "説明分",
        src: "https://placehold.co/400"
    }
]

const clientStore = useClientStore();

</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 mt-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6">
                投票
            </span>
            <div class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color">
                <span>
                    AICJコレクションに投票できます。
                </span>
                <span>
                    <i class="pi pi-asterisk !text-sm" />
                    一人一票です。
                </span>
            </div>

            <!-- <Button label="投票する" icon="pi pi-send" class="w-full" /> -->
        </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 w-4/5 mx-auto p-4 md:py-8">
        <Card v-for="ppl in people" style="width: auto; overflow: hidden"
            class="border border-surface-200 dark:border-surface-700">
            <template #header>
                <Image image-class="object-cover h-full w-full" alt="user header" src="https://placehold.co/400" />
            </template>
            <template #title>{{ ppl.name }}</template>
            <template #subtitle>{{ ppl.class }}</template>
            <template #content>
                <p class="m-0">
                    {{ ppl.info }}
                </p>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <!-- <Button label="" severity="secondary" outlined class="w-full" /> -->
                    <Button @click="clientStore.sendSelectedPerson(ppl.id)"
                        :icon="clientStore.SelectedPerson == ppl.id ? 'pi pi-check' : ''"
                        :label="clientStore.SelectedPerson == ppl.id ? '投票済み' : '投票する'"
                        :severity="clientStore.SelectedPerson == ppl.id ? '' : 'secondary'"
                        :outlined="clientStore.SelectedPerson == ppl.id ? false : true" class="w-full" />
                </div>
            </template>
        </Card>
    </div>
</template>