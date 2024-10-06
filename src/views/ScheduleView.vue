<script setup lang="ts">
const schedules: Array<{
    day: string;
    type: string;
    schedule: Array<{ name: string; date: string }>;
    value: string;
}> = [
    {
        day: "1",
        type: "非公開日",
        schedule: [
            { name: "G7合唱", date: "09:20" },
            { name: "Chamber Ensemble", date: "09:55" },
            { name: "魔改造ひなーの", date: "10:25" },
            { name: "HARUYURI", date: "10:35" },
            { name: "ダンス部", date: "10:45" },
            { name: "歌のための準備/調整", date: "11:15" },
            { name: "ファンデフェン", date: "11:25" },
            { name: "SKM", date: "11:40" },
            { name: "株式会社YA-YA-s", date: "11:55" },
            { name: "宇多田いつかヒカル 高校二年生", date: "12:15" },
            { name: "jazz", date: "12:30" },
            { name: "調整", date: "13:20" },
            { name: "ミラージュ", date: "13:35" },
            { name: "少年Aと奇妙な仲間たち", date: "13:55" },
            { name: "琥珀", date: "14:15" },
            { name: "Lit.", date: "14:35" },
        ],
        value: "0",
    },
    {
        day: "2",
        type: "公開日",
        schedule: [
            { name: "Chamber Ensemble", date: "09:20" },
            { name: "Luna", date: "09:45" },
            { name: "H²M²Y", date: "10:00" },
            { name: "Lucky girls", date: "10:15" },
            { name: "Fille", date: "10:30" },
            { name: "ダンス部", date: "10:45" },
            { name: "jazz", date: "11:15" },
            { name: "準備", date: "12:05" },
            { name: "destin", date: "12:15" },
            { name: "Leisurely", date: "12:30" },
            { name: "whyme", date: "12:45" },
            { name: "準備", date: "13:00" },
            { name: "PKR QUEEN", date: "13:35" },
            { name: "サラミ", date: "13:55" },
            { name: "39.5℃", date: "14:15" },
            { name: "liluck", date: "14:35" },
            { name: "調整", date: "15:00" },
        ],
        value: "1",
    },
];
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6"> スケジュール </span>
            <div
                class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color"
            >
                <span> ステージ企画のスケジュールをご確認いただけます。 </span>
                <span>
                    クラブ展示などのスケジュールは<RouterLink
                        class="underline"
                        to="/pamphlet"
                        >こちら</RouterLink
                    >からご覧いただけます。
                </span>
            </div>

            <Tabs value="0">
                <TabList class="mb-4">
                    <Tab
                        v-for="schedule in schedules"
                        :key="schedule.day"
                        :value="schedule.value"
                    >
                        {{ `Day ${schedule.day} (${schedule.type})` }}
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel
                        v-for="schedule in schedules"
                        :key="schedule.day"
                        :value="schedule.value"
                    >
                        <Timeline :value="schedule.schedule">
                            <template #opposite="slotProps">
                                <span
                                    class="text-surface-500 text-sm dark:text-surface-400"
                                >
                                    {{ slotProps.item.date }}
                                </span>
                            </template>
                            <template #content="slotProps">
                                <Chip
                                    v-if="slotProps.item.name"
                                    class="!rounded-lg"
                                    :label="slotProps.item.name"
                                >
                                </Chip>
                            </template>
                        </Timeline>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>
