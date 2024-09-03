<script setup lang="ts">
import { ref } from "vue";

const day1 = ref([
    { name: 'Grade 7', date: '9:30' },
    { name: 'Chamber Ensemble', date: '10:00' },
    { name: 'りまれも。', date: '10:40' },
    { name: 'ダンス部', date: '11:00' },
])

const day2 = ref([
    { name: 'ダンス部', date: '10:00' },
    { name: 'GANJO-Kenjo-sanjo', date: '10:20' },
    { name: 'Chamber Ensemble', date: '10:30' },
])

const selectButtonValue = ref('Day 1');
const selectButtonOptions = ref(['Day 1', 'Day 2']);
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6">
                スケジュール
            </span>
            <div class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color">
                <span>
                    ステージ企画のスケジュールをご確認いただけます
                </span>
                <span>
                    クラブ展示などのスケジュールは<RouterLink class="underline" to="/pamphlet">こちら</RouterLink>からご覧いただけます
                </span>
            </div>

            <SelectButton :allowEmpty="false" v-model="selectButtonValue" :options="selectButtonOptions"
                aria-labelledby="basic" class="!flex justify-center" />
            <Card v-if="selectButtonValue === 'Day 1'" class="!shadow-none">
                <template #title>
                    <span class="text-lg font-semibold text-primary !flex justify-center mb-2">非公開日</span>
                </template>
                <template #content>
                    <Timeline :value="day1">
                        <template #opposite="slotProps">
                            <span class="text-surface-500 text-sm dark:text-surface-400">
                                {{ slotProps.item.date }}
                            </span>
                        </template>
                        <template #content="slotProps">
                            <Chip v-if="slotProps.item.name" :label="slotProps.item.name">
                            </Chip>
                        </template>
                    </Timeline>
                </template>
            </Card>
            <Card v-if="selectButtonValue === 'Day 2'" class="!shadow-none">
                <template #title>
                    <span class="text-lg font-semibold text-primary !flex justify-center mb-2">公開日</span>
                </template>
                <template #content>
                    <Timeline :value="day2">
                        <template #opposite="slotProps">
                            <span class="text-surface-500 text-sm dark:text-surface-400">
                                {{ slotProps.item.date }}
                            </span>
                        </template>
                        <template #content="slotProps">
                            <Chip v-if="slotProps.item.name" :label="slotProps.item.name">
                            </Chip>
                        </template>
                    </Timeline>
                </template>
            </Card>
        </div>
    </div>
</template>