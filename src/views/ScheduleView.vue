<script setup lang="ts">
const schedules: Array<{
    day: string;
    type: string;
    schedule: Array<{ title?: string; subtitle?: string; date: string, description?: string }>;
    value: string;
}> = [
        {
            day: "1",
            type: "非公開日",
            schedule: [
                { title: "G7合唱", date: "09:20" },
                { title: "Chamber Ensemble", description: "私たちは、aicj chamber ensembleです。精一杯演奏するので、ぜひお聞きください。", date: "09:55" },
                { title: "魔改造ひなーの", description: "今年もやります魔改造！高校1年生、昨年と同様、ソロでダンスを披露します。ペンライト持ちやコールを行う人にはファンサがされやすい…かも！？ぜひ見に来てください！", date: "10:25" },
                { title: "HARUYURI", description: "ダンス未経験、ただただ音楽好きな一人が友達のために中学校生活のラストステージを飾ります。", date: "10:35" },
                { title: "ダンス部", description: "ダンス部です！様々なジャンルのダンスを披露させていただきます！ぜひお楽しみください！", date: "10:45" },
                { subtitle: "歌のための準備/調整", date: "11:15" },
                { title: "ファンデフェン", description: "青山と江盛が歌を歌うコーナー誰よりも真面目なネタ枠です。", date: "11:25" },
                { title: "SKM", description: "SKMは、今年で3回目の学園祭ステージに挑む、2人組ユニット。それぞれのソロ曲と織り交ぜたデュエット曲で、感動と盛り上がりをお届けします。2人のハーモニーと魅力溢れる歌声が、会場を彩ります。お見逃しなく！", date: "11:40" },
                { title: "株式会社YA-YA-s", description: "皆さんこんにちは♪株式会社YA-YA-sです！結成2ヶ月！個性豊かなメンバーと一緒にアコースティックの暖かい音をお楽しみください！ ", date: "11:55" },
                { title: "宇多田いつかヒカル 高校二年生", description: "こんにちは！宇多田いつかヒカルwith女サカの女王です。私たちは、女子サッカー部に所属しています。仲間たちと毎日の厳しい練習で鍛え上げられた肺活量で歌います。（寮でうるさいって言われるぐらい歌っていることは内緒でｗ）サッカーと勉強と歌の三刀流で頑張ります！サッカー部サイコーです。うちわやペンライト、歓声など大歓迎です。皆さん来てくださいね！", date: "12:15" },
                { title: "jazz", description: "Jazzが大好きな部員たちが一丸となって、皆さんに演奏をお届けします。数々の名曲を演奏し、パワーアップしたJazz部のステージを最後までお楽しみください！", date: "12:30" },
                { subtitle: "調整", date: "13:20" },
                { title: "ミラージュ", description: "高１の光藤、藤本、高原、陳、宇高の５ピースバンドです。ブルーベリーナイツ、おやすみ泣き声さよなら歌姫、会心の一撃を弾きます。最後まで頑張って演奏するのでぜひ聞いて下さい。", date: "13:35" },
                { title: "少年Aと奇妙な仲間たち", description: "<span>波多野 颯良(Vo/Dr)<br />小島 穂理奈(Vo/Dr)<br />谷 友貴(Gt)<br />福原 千愛(Ba)<br />山城 ほたる(key)</span><span>セットリスト 花に亡霊・さよならエレジー</span>", date: "13:55" },
                { title: "琥珀", description: "<span>琥珀です。3曲演奏します。一緒に盛り上がりましょう！</span><span>メンバー　田邊、山本、高畑、森戸、新井</span>", date: "14:15" },
                { title: "Lit.", description: "高校一年生ガールズバンドです。ギターボーカル・ベース・キーボード・ドラムの４人で演奏します。気分がブチ上がる好きな曲を詰め込みました。ぜひ楽しんでください！！", date: "14:35" },
            ],
            value: "0",
        },
        {
            day: "2",
            type: "公開日",
            schedule: [
                { title: "Chamber Ensemble", description: "私たちは、aicj chamber ensembleです。精一杯演奏するので、ぜひお聞きください。", date: "09:20" },
                { title: "Luna", description: "こんにちは！LUNA(ルナ)です！私達はG11の蛭子、田中、中田、前の4人メンバーでダンスを披露します！最後の曲「As if it’s your last」では私達が手拍子した時に一緒に手拍子をしてくれると嬉しいです！たくさん頑張ったので是非見に来てください！", date: "09:45" },
                { title: "H²M²Y", description: "はじめまして！H²M²Yです。私たちは中学3年生×3人と高校2年生×2人の5人組です。今回は、K-pop 2曲とJ-pop 1曲を踊ります。ぜひ見に来てください！！", date: "10:00" },
                { title: "Lucky girls", description: "ダンスを3曲踊ります。ぜひ見に来てね〜！", date: "10:15" },
                { title: "Fille", description: "こんにちは！Fille（フィーユ）です！G11立畠,胤森,山下の3人でKPOPカバーダンスを4曲披露します！私達にとって最後の学園祭なので是非見に来てください！", date: "10:30" },
                { title: "ダンス部", description: "ダンス部です！様々なジャンルのダンスを披露させていただきます！ぜひお楽しみください！", date: "10:45" },
                { title: "jazz", description: "Jazzが大好きな部員たちが一丸となって、皆さんに演奏をお届けします。数々の名曲を演奏し、パワーアップしたJazz部のステージを最後までお楽しみください！", date: "11:15" },
                { subtitle: "準備", date: "12:05" },
                { title: "destin", description: "IB11のボーカルの野田とピアノの椎木です！Loversとケセラセラをやります！ぜひ見に来てね‼", date: "12:15" },
                { title: "Leisurely", description: "こんにちはー🙌Leisureyです！デュエットで明るく元気よく歌います✊❤️‍🔥一緒に学園祭楽しみましょう！", date: "12:30" },
                { title: "whyme", description: "最初で最後のステージ企画、精一杯頑張ります。楽しんでいただけたら嬉しいです！よろしくお願いします！", date: "12:45" },
                { subtitle: "準備", date: "13:00" },
                { title: "PKR QUEEN", description: "<span>♘PKR QUEEN♛</span><span>Gt:宋秀成<br />Gt:澤野十誠<br />Key/Vc:垰勇輝<br />Ba:藤田敢太朗<br />Dr/Smp:森島樹<br />Vc/Queen:上綱みや美</span><span>若者よPKRを見にきてくれFly With Me!!!</span>", date: "13:35" },
                { title: "サラミ", description: "ささ、うらら、みみで結成したサラミです！ずっと仲良しな3人が最後の文化祭で悔いの残らないように楽しく演奏します。拙い演奏ですが一生懸命頑張ります！", date: "13:55" },
                { title: "39.5℃", description: "青春の病に冒され、保健室で目が覚めると39.5℃だった。不規則なドラムの音の中に響くギターに酔い、白鍵と黒鍵の間に沈むベースに揺れる。あいつの歌声はきっとまた僕を熱くしてくれるから。平熱でお越しください。", date: "14:15" },
                { title: "liluck", description: "高校2年生スリーピースバンドLiluck（ライラック）です。去年に引き続き2年連続で出させていただきます。よろしくお願いします。", date: "14:35" },
                { subtitle: "調整", date: "15:00" },
            ],
            value: "1",
        },
    ];
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6"> スケジュール </span>
            <div class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color">
                <span> ステージ企画のスケジュールをご確認いただけます。 </span>
                <span>
                    クラブ展示などのスケジュールは<RouterLink class="underline" to="/pamphlet">こちら</RouterLink>からご覧いただけます。
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
                                <Chip class="!rounded-lg my-2 border border-surface-200 dark:border-surface-700">
                                    <div class="flex flex-col">
                                        <p v-if="slotProps.item.title" class="text-lg">
                                            {{ slotProps.item.title }}
                                        </p>

                                        <p v-html="slotProps.item.description" v-if="slotProps.item.description"
                                            class="text-sm text-muted-color flex flex-col gap-3" />

                                        <p v-if="slotProps.item.subtitle" class="text- text-muted-color">
                                            {{ slotProps.item.subtitle }}
                                        </p>
                                    </div>
                                </Chip>
                                <!-- <Card class="mt-2 border border-surface-200 dark:border-surface-700">
                                    <template v-if="slotProps.item.title" #title>
                                        {{ slotProps.item.title }}
                                    </template>
<!-- <template v-if="slotProps.item.subtitle" #subtitle>
                                        {{ slotProps.item.subtitle }}
                                    </template> -->
                                <!-- <template v-if="slotProps.item.description" #content>
                                    <!-- <img v-if="slotProps.item.image"
                                            :src="`/images/product/${slotProps.item.image}`" :alt="slotProps.item.name"
                                            width="200" class="shadow-sm" /> -->
                                <!-- <p class="m-0">
                                        {{ slotProps.item.description }}
                                    </p> -->
                                <!-- </template> -->
                                <!-- </Card> -->
                                <!-- -->
                            </template>
                        </Timeline>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>
