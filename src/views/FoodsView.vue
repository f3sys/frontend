<script setup lang="ts">
import FoodText from "@/components/PriceText.vue";

const data: Array<{
    class: string;
    name: string;
    items: Array<{
        title: string;
        longerTitle?: string;
        extra?: boolean;
        price: number;
    }>;
}> = [
    {
        class: "IB11",
        name: "KMC",
        items: [
            {
                title: "フライドチキン",
                longerTitle: "ヤンニョム　3個",
                price: 200,
            },
            {
                title: "フライドチキン",
                longerTitle: "BBQ　3個",
                extra: true,
                price: 200,
            },
            {
                title: "フライドチキン",
                longerTitle: "チーズ　3個",
                extra: true,
                price: 200,
            },
        ],
    },
    {
        class: "11A",
        name: "MercuDonald's",
        items: [
            {
                title: "シャカシャカポテト",
                longerTitle: "塩",
                price: 100,
            },
            {
                title: "シャカシャカポテト",
                longerTitle: "チリ・チーズ・醤油バター",
                extra: true,
                price: 150,
            },
        ],
    },
    {
        class: "11B",
        name: "たこうちまさやき",
        items: [
            {
                title: "たこ焼き",
                longerTitle: "　3個",
                price: 150,
            },
            {
                title: "たこ焼き",
                longerTitle: "　9個",
                extra: true,
                price: 400,
            },
        ],
    },
    {
        class: "11C",
        name: "色とり鶏",
        items: [
            {
                title: "焼き鳥",
                longerTitle: "もも、たれ・塩",
                price: 50,
            },
            {
                title: "焼き鳥",
                longerTitle: "ねぎま、たれ・塩",
                extra: true,
                price: 50,
            },
            {
                title: "焼き鳥",
                longerTitle: "とりかわ、たれ",
                extra: true,
                price: 50,
            },
            {
                title: "焼き鳥",
                longerTitle: "せせり、しお",
                extra: true,
                price: 50,
            },
        ],
    },
    {
        class: "11D",
        name: "〜彩〜",
        items: [
            {
                title: "焼き小籠包",
                longerTitle: "ノーマル小籠包　2個",
                price: 300,
            },
            {
                title: "焼き小籠包",
                longerTitle: "野菜小籠包　2個",
                extra: true,
                price: 300,
            },
            {
                title: "小籠包セット",
                longerTitle: "　4個",
                extra: true,
                price: 500,
            },
        ],
    },
    {
        class: "Pre-IB10",
        name: "あいびいも",
        items: [
            {
                title: "スイートポテト",
                longerTitle: "　3個",
                price: 200,
            },
        ],
    },
    {
        class: "10A",
        name: "だがし屋あらちゃん",
        items: [
            {
                title: "駄菓子",
                price: 0,
            },
        ],
    },
    {
        class: "10B",
        name: "POP  ICE",
        items: [
            {
                title: "ディッピンドッツ",
                longerTitle: "レインボー",
                price: 300,
            },
            {
                title: "ディッピンドッツ",
                longerTitle: "クッキー＆クリーム",
                extra: true,
                price: 300,
            },
            {
                title: "ディッピンドッツ",
                longerTitle: "ストロベリーチーズケーキ",
                extra: true,
                price: 300,
            },
        ],
    },
    {
        class: "10C",
        name: "むらかぬれ",
        items: [
            {
                title: "カヌレ",
                longerTitle: "プレーン",
                price: 100,
            },
            {
                title: "カヌレ",
                longerTitle: "チョコ",
                extra: true,
                price: 100,
            },
        ],
    },
    {
        class: "10D",
        name: "まさたかすてら",
        items: [
            {
                title: "ベビーカステラ",
                longerTitle: "プレーン　5個",
                price: 200,
            },
            {
                title: "ベビーカステラ",
                longerTitle: "チョコレート　5個",
                extra: true,
                price: 200,
            },
            {
                title: "ベビーカステラ",
                longerTitle: "カスタード　5個",
                extra: true,
                price: 200,
            },
        ],
    },
    {
        class: "Pre-CAS",
        name: "せいぼじゃぱん",
        items: [
            {
                title: "ドリップバッグコーヒー",
                price: 150,
            },
            {
                title: "コーヒー粉",
                price: 1500,
            },
            {
                title: "ティーバッグ",
                price: 150,
            },
        ],
    },
    {
        class: "生徒会",
        name: "トゥンカロン",
        items: [
            {
                title: "クッキーアンドクリーム",
                price: 300,
            },
            {
                title: "抹茶",
                price: 300,
            },
            {
                title: "ソルティーキャラメル",
                price: 300,
            },
            {
                title: "いちごミルク",
                price: 300,
            },
            {
                title: "リアルチョコ",
                price: 300,
            },
        ],
    },
    {
        class: "ROTA",
        name: "鹿肉おやき",
        items: [
            {
                title: "おいだれ味",
                price: 400,
            },
            {
                title: "チーズ味",
                price: 400,
            },
        ],
    },
];
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6"> 高校食飯 </span>
            <div
                class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color"
            >
                <span> 高校食班のメニューです。 </span>
                <span>
                    その他物品販売は<RouterLink class="underline" to="/goods"
                        >こちら</RouterLink
                    >からご覧いただけます。
                </span>
            </div>
            <div
                v-for="(item, index) in data"
                :key="item.class"
                :class="{ 'mb-10': index !== data.length - 1 }"
            >
                <div
                    class="text-2xl sm:text-3xl md:text-4xl font-semibold self-start text-white dark:text-black mb-6 bg-primary block py-2 px-6 max-w-fit"
                >
                    {{ item.class }}
                    {{ item.name }}
                </div>
                <div class="flex flex-col gap-4">
                    <FoodText
                        v-for="food in item.items"
                        :key="food.title"
                        :title="food.title"
                        :longerTitle="food.longerTitle"
                        :price="food.price"
                        :class="{ 'hidden md:inline-flex': food.extra }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
