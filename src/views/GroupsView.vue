<script setup lang="ts">

const groups: Array<{ name: string, belong: string, description: string }> = [
    {
        name: 'グループ1',
        belong: '7A',
        description: 'グループ1の紹介文です'
    },
    {
        name: 'グループ2',
        belong: '7B',
        description: 'グループ2の紹介文です'
    },
    {
        name: 'グループ3',
        belong: '7C',
        description: 'グループ3の紹介文です'
    },
    {
        name: 'グループ4',
        belong: '7D',
        description: 'グループ4の紹介文です'
    },
    {
        name: 'グループ5',
        belong: '7E',
        description: 'グループ5の紹介文です'
    },
    {
        name: 'グループ6',
        belong: '7F',
        description: 'グループ6の紹介文です'
    },
    {
        name: 'グループ7',
        belong: '7G',
        description: 'グループ7の紹介文です'
    },
    {
        name: 'グループ8',
        belong: '7H',
        description: 'グループ8の紹介文です'
    },
    {
        name: 'グループ9',
        belong: '7I',
        description: 'グループ9の紹介文です'
    },
    {
        name: 'グループ10',
        belong: '7J',
        description: 'グループ10の紹介文です'
    }
]
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6">
                参加グループ
            </span>
            <div class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color">
                <span>
                    中学生クラス展示・高校食販・ステージ企画・生徒企画の紹介文一覧です。
                </span>
                <span>
                    高校食販メニューは<RouterLink class="underline" to="/foods">こちら</RouterLink>からご覧いただけます。
                </span>
            </div>
            <Accordion :value="['0']" multiple>
                <AccordionPanel v-for="group in groups" :key="group.name" :value="group.belong">
                    <AccordionHeader>
                        <span class="text-lg text-black dark:text-white font-semibold">{{ group.name
                            }}</span>
                        <span class="text-md ml-auto mr-4 md:text-base font-light text-muted-color">
                            {{ group.belong }}</span>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="m-0 font-light text-muted-color-emphasis">{{ group.description }}</p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>
</template>