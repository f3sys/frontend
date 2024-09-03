<script setup lang="ts">
import { ref } from "vue";

const schedules = ref([{
    day: '1',
    type: '非公開日',
    schedule: [
        { name: 'Grade 7', date: '9:30' },
        { name: 'Chamber Ensemble', date: '10:00' },
        { name: 'りまれも。', date: '10:40' },
        { name: 'ダンス部', date: '11:00' },
        { name: 'GANJO-Kenjo-sanjo', date: '12:20' },
    ],
    value: '0'
}, {
    day: '2',
    type: '公開日',
    schedule: [
        { name: 'ダンス部', date: '10:00' },
        { name: 'GANJO-Kenjo-sanjo', date: '10:20' },
        { name: 'Chamber Ensemble', date: '10:30' },
        { name: 'Grade 7', date: '11:30' },
        { name: 'Chamber Ensemble', date: '12:00' },
    ],
    value: '1'
}
])

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

            <Tabs value="0">
                <TabList class="mb-4">
                    <Tab v-for="schedule in schedules" :key="schedule.day" :value="schedule.value">
                        {{ `Day ${schedule.day} (${schedule.type})` }}
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel v-for="schedule in schedules" :key="schedule.day" :value="schedule.value">
                        <Timeline :value="schedule.schedule">
                            <template #opposite="slotProps">
                                <span class="text-surface-500 text-sm dark:text-surface-400">
                                    {{ slotProps.item.date }}
                                </span>
                            </template>
                            <template #content="slotProps">
                                <Chip v-if="slotProps.item.name" class="!rounded-lg" :label="slotProps.item.name">
                                </Chip>
                            </template>
                        </Timeline>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>