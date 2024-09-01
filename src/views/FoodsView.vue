<script setup lang="ts">
import FoodText from '@/components/PriceText.vue';

const data: Array<{ class: string, name: string, items: Array<{ title: string, price: number }> }> = [
    {
        class: '11A',
        name: '内藤ベジタブル',
        items: [
            {
                title: '内藤ケバブ',
                price: 450,
            },
            {
                title: '内藤ケバーブ',
                price: 500,
            }
        ]
    },
    {
        class: '11B',
        name: '内藤ベジタブル',
        items: [
            {
                title: '内藤ケバブ',
                price: 450,
            },
            {
                title: '内藤ケバーブ',
                price: 500,
            }
        ]
    },
    {
        class: '11C',
        name: '内藤ベジタブル',
        items: [
            {
                title: '内藤ケバブ',
                price: 450,
            },
            {
                title: '内藤ケバーブ',
                price: 500,
            }
        ]
    },
    {
        class: '11D',
        name: '内藤ベジタブル',
        items: [
            {
                title: '内藤ケバブ',
                price: 450,
            },
            {
                title: '内藤ケバーブ',
                price: 500,
            }
        ]
    }
];
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6">
                高校食飯
            </span>
            <div class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color">
                <span>
                    高校食班のメニューです
                </span>
                <span>
                    その他物品販売は<RouterLink class="underline" to="/goods">こちら</RouterLink>からご覧いただけます
                </span>
            </div>
            <!-- <div>
                class="text-2xl sm:text-3xl md:text-4xl font-semibold self-start mb-4 bg-primary block py-2 px-6 max-w-fit">
                11B
                内藤ベジタブル</div>
            <div class="flex flex-col gap-4">
                <FoodText title="内藤ケバブ" price="450" />
                <FoodText title="内藤ケバーブ" price="500" />
            </div> -->
            <div v-for="(item, index) in data" :key="item.class" :class="{ 'mb-10': index !== data.length - 1 }">
                <div
                    class="text-2xl sm:text-3xl md:text-4xl font-semibold self-start text-white dark:text-black mb-6 bg-primary block py-2 px-6 max-w-fit">
                    {{ item.class }}
                    {{ item.name }}</div>
                <div class="flex flex-col gap-4">
                    <FoodText v-for="food in item.items" :key="food.title" :title="food.title" :price="food.price" />
                </div>

            </div>
        </div>
    </div>
</template>
