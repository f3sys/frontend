<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from "vue";

// const mainRef = useTemplateRef("main");
const mainRef = ref<HTMLDivElement | null>(null);

const goto = (main: HTMLDivElement | null) => {
    main?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
    <main>
        <div
            class="bg-[url(../assets/banner.webp)] bg-cover bg-no-repeat bg-center h-full min-h-[calc(100svh-75px)] relative">
            <h1 class="text-5xl font-semibold text-white absolute left-10 bottom-10"
                style="text-shadow: 0px 0px 10px black">
                AICJ 学園祭 <br />
                2024
            </h1>
            <!-- <Button class="!absolute left-10 bottom-10" label="開催事項" as="a" href="#jikou" /> -->

            <div class="!absolute right-0 bottom-0 cursor-pointer" @click="goto(mainRef)">
                <span class="h-16 w-16 bg-primary text-white dark:text-black inline-flex items-center justify-center">
                    <i class="pi pi-arrow-down !text-2xl"></i>
                </span>
            </div>
        </div>

        <div ref="main" class="relative bottom-[59px]" />

        <div class="flex gap-10 flex-col md:flex-row mt-10 w-full max-w-screen-xl mx-auto px-4">
            <Card class="basis-2/3 p-4 border border-surface-200 dark:border-surface-700">
                <template #title>
                    <span class="text-primary text-2xl">
                        #恥ずかしいか青春は
                    </span>
                </template>
                <template #content>
                    <div class="flex flex-col gap-2">
                        <p class="leading-relaxed m-0">
                            世の中に存在する漫画・アニメ作品の実に80%ほどが中高校生を題材にしている。しかし、僕たちが学園で過ごす6年間は本来人生全体の8%にも満たない。多くの人が人生のハイライトとして渇望する青春の6年間で、何が出来るのだろうか。
                        </p>
                        <p class="leading-relaxed m-0">
                            今年のスローガンである「恥ずかしいか青春は」はそんな思いの答え探しと言ってもいいだろう。恥ずかしいからこそ青春でもあるのだが、限られたこの学園生活において、自分を隠して生きていくにはあまりにも勿体無い。まだ自分を見つけていない人は、学園祭を通して自分自身と向き合うこともできるだろう。共に青春を求めよう。
                        </p>
                    </div>
                </template>
            </Card>

            <Card class="basis-1/3 p-4 border border-surface-200 dark:border-surface-700">
                <template #title>
                    <span class="text-2xl text-primary"> F3S </span>
                </template>
                <template #content>
                    <div class="flex flex-col gap-2">
                        <p class="leading-relaxed m-0">
                            今年導入されたF3S（フェス）は、個々人に割り当てられるQRコード（F3SiD）をつかって、学園祭の入退場や購入記録を自動管理するシステムです。
                        </p>
                        <p class="leading-relaxed m-0">
                            F3Sで収集したデータを活用することで、在庫差異や余剰在庫の防止、来場者の予測、そしてランク付けが可能になりました。
                        </p>
                    </div>
                </template>
            </Card>
        </div>
        <div class="w-full max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-4 my-10">
            <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
                <span class="text-4xl self-start">開催事項</span>
                <div class="flex">
                    <Divider layout="vertical" />

                    <div class="flex flex-col max-w-60 w-full">
                        <CardText title="DAY 1 非公開日" :subtitles="['2024/10/18']" :subsubtitles="['(金・平)']" />

                        <CardText title="DAY 2 公開日" :subtitles="['2024/10/19']" :subsubtitles="['(土・休)']" />

                        <CardText title="TIME" :subtitles="['9:30 - 15:30']" />
                    </div>

                    <Divider layout="vertical" />

                    <div class="flex flex-col max-w-60 w-full">
                        <CardText title="SLOGAN" :subtitles="['#恥ずかしいか青春は']" />

                        <CardText title="SNS" :subtitles="['Twitter', 'Tiktok']" :subsubsubtitles="['最新情報をチェック!']" />
                    </div>
                </div>
            </div>
            <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
                <span class="text-4xl self-start">アクセス</span>
                <div class="flex">
                    <Divider layout="vertical" />

                    <div class="flex flex-col max-w-60 w-full">
                        <CardText title="PLACE" :subtitles="['AICJ中学・高等学校']" :subsubsubtitles="[
                            '〒731-0138',
                            '広島市安佐南区祇園3丁目1-15',
                            '公共交通機関をご利用ください',
                        ]" />

                        <CardText title="ENTRY" :subtitles="['F3SiD']" :subsubsubtitles="[
                            '会場ではスマホでF3SiDをスキャンしてもらうため、予めご了承ください。',
                        ]" />
                    </div>

                    <Divider layout="vertical" />

                    <div class="flex flex-col max-w-60 w-full">
                        <CardText title="ACCESS" :subtitles="[
                            'JR下祇園駅',
                            'HRT西原駅',
                            '今津バス停',
                        ]" :subsubtitles="['徒歩3分', '徒歩10分', '徒歩5分']" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
