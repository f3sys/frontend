<script setup lang="ts">
import FoodText from "@/components/PriceText.vue";

const data: Array<{
    name: string;
    items: Array<{
        title: string;
        longerTitle?: string;
        extra?: boolean;
        price: number;
    }>;
}> = [
    {
        name: "PTA バザー",
        items: [
            {
                title: "焼きそば",
                price: 500,
            },
            {
                title: "きょうざ　5個",
                price: 300,
            },
            {
                title: "唐揚げ　3個",
                price: 350,
            },
            {
                title: "春巻き　2個",
                price: 450,
            },
            {
                title: "ドリンク　各種",
                price: 100,
            },
            {
                title: "パン　各種",
                price: 300,
            },
            {
                title: "おにぎり　各種",
                price: 150,
            },
        ],
    },
    {
        name: "AICJ 饅頭",
        items: [
            {
                title: "広島銘菓",
                longerTitle: "桐葉菓　5個入り",
                price: 800,
            },
            {
                title: "ひじのしぐれ",
                longerTitle: "(栗あん)　5個入り",
                price: 800,
            },
            {
                title: "広島銘菓 桐葉菓　10個入り",
                extra: true,
                price: 1600,
            },
            {
                title: "ひじのしぐれ (栗あん)　10個入り",
                extra: true,
                price: 1600,
            },
        ],
    },
];
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6"> 物品販売 </span>
            <div
                class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color"
            >
                <span> 物品販売のメニューです。 </span>
                <span>
                    高校食販メニューは<RouterLink class="underline" to="/foods"
                        >こちら</RouterLink
                    >からご覧いただけます。
                </span>
            </div>
            <div
                v-for="(item, index) in data"
                :key="item.name"
                :class="{ 'mb-10': index !== data.length - 1 }"
            >
                <div
                    class="text-2xl sm:text-3xl md:text-4xl font-semibold self-start text-white dark:text-black mb-6 bg-primary block py-2 px-6 max-w-fit"
                >
                    {{ item.name }}
                </div>
                <div class="flex flex-col gap-4">
                    <FoodText
                        v-for="food in item.items"
                        :key="food.title"
                        :longerTitle="food.longerTitle"
                        :class="{ 'hidden md:inline-flex': food.extra }"
                        :title="food.title"
                        :price="food.price"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
