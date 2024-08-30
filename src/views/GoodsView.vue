<script setup lang="ts">
import FoodText from '@/components/FoodText.vue';

const data = [
    {
        name: '生徒会販売',
        items: [
            {
                title: '缶バッジ そらちゃん',
                price: '100',
            },
            {
                title: '缶バッジ まどいちゃん',
                price: '100',
            },
            {
                title: '缶バッジ すいちゃん',
                price: '100',
            }
        ]
    },
    {
        name: 'AICJ饅頭 前売り食券販売',
        items: [
            {
                title: 'AICJ饅頭 桐葉菓 10個入り',
                price: '1,500',
            },
            {
                title: 'AICJ饅頭 栗あん 10個入り',
                price: '1,500',
            },
            {
                title: 'AICJ饅頭 桐葉菓 5個入り',
                price: '750',
            },
            {
                title: 'AICJ饅頭 栗あん 5個入り',
                price: '750',
            },
        ]
    },
];

</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6">
                物品販売
            </span>
            <span class="text-sm mb-10 font-light text-muted-color">
                物品販売のメニューです <br />
                高校食販メニューは<a class="underline" href="/foods">こちら</a>からご覧いただけます
            </span>
            <!-- <div>
                class="text-2xl sm:text-3xl md:text-4xl font-semibold self-start mb-4 bg-primary block py-2 px-6 max-w-fit">
                11B
                内藤ベジタブル</div>
            <div class="flex flex-col gap-4">
                <FoodText title="内藤ケバブ" price="450" />
                <FoodText title="内藤ケバーブ" price="500" />
            </div> -->
            <div v-for="item in data" :key="item.name" class="mb-10">
                <div
                    class="text-2xl sm:text-3xl md:text-4xl font-semibold self-start text-white dark:text-black mb-6 bg-primary block py-2 px-6 max-w-fit">
                    {{ item.name }}</div>
                <div class="flex flex-col gap-4">
                    <FoodText v-for="food in item.items" :key="food.title" :title="food.title" :price="food.price" />
                </div>

            </div>
        </div>
    </div>
</template>
