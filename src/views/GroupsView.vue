<script setup lang="ts">
const groups: Array<{ name: string; belong: string; description: string }> = [
    {
        name: "足つぼ Runaway",
        belong: "9A",
        description:
            "生前に悪事を働いた罪深き皆様へ皆様におきましては、地獄行きが決定致しました。これから皆様には地獄から抜け出す機会が与えられます。罪を清算できれば帰れるのです。それでは皆様、足元にお気をつけて…",
    },
    {
        name: "Venus宇宙軍基地",
        belong: "9B",
        description:
            "人類が宇宙に進出してから、地球上で言う「領土問題」が宇宙空間で起こっていた。この問題による地球外生命体の侵略から幾度となく地球を守ってきた軍隊が国際宇宙軍である。国際宇宙軍第55旅団、通称「VENUS宇宙軍」。彼らは地球から遠く離れた銀河、領域問題で最も緊迫している区域に布陣されている。我々とともに秩序を護る一員となることを我々は強く望む。国際宇宙軍第55旅団指揮官より",
    },
    {
        name: "美女と野獣 ~Beauty and the beast~",
        belong: "9C",
        description:
            "祇園に迷い込んだベルの父をベルが探しに行く物語。 そこで俺は愛しきベルに出会う。 果たして俺は、ビーストを倒し、愛しきベルを取り返すことができるのか！？ 最後まで楽しんでいってくれ！ガストンより",
    },
    {
        name: "Doki Doki★5 クエスチョン",
        belong: "9D",
        description:
            "私たちJupiter 9は、ネプリーグというクイズ番組の中から、イングリッシュブレインタワーとファイブボンバーと5文字クイズという3つのゲームを行います。それぞれ簡単な問題から難しい問題まで色々あります。ぜひ来てください！",
    },
    {
        name: "水星魔法通り八丁目",
        belong: "8A",
        description:
            "水星魔法通りで一大イベント開催中！！課された課題を高速でクリアしろ！！史上最速の魔法使いは誰だ！？",
    },
    {
        name: "帰れま銭湯",
        belong: "8B",
        description:
            "この度、帰れま銭湯を開業いたしました。ボールプールやミニゲームをご用意しております。ミニゲームの得点が高かった方には帰れま銭湯限定の豪華景品がございます。皆様のお越しをお待ちしております。",
    },
    {
        name: "火星戦線異状あり",
        belong: "8C",
        description:
            "時は××××年。火星人による地球侵略が進む中、緊急特派員として招集された諸君このままでは地球が火星人によって侵略されてしまうエイリアンを討伐し、火星人の侵略を阻止せよ！",
    },
    {
        name: "すごろくpeople",
        belong: "8D",
        description:
            "私達のクラスでは人間すごろくをやります。自らがコマとなってすごろくをプレイする体験型ゲームです。すごろくpeopleに遊びに来てください！1位になると豪華景品がもらえるかも！",
    },
    {
        name: "な〜んちゃって縁日",
        belong: "7A",
        description:
            "Mercury7の催し物は、な〜んちゃって縁日です。令和と昭和の合体です。的乗せ・もぐら乗せです。スロットで集めたコインを使って、縁日を存分に楽しんでください。",
    },
    {
        name: "酢虎苦阿兎十",
        belong: "7B",
        description:
            "Venus7では、「酢虎苦阿兎十（ストラックアウト）」を行うぜ！昭和のヤンキーなど昭和レトロをテーマとしている。内装も凝っていて景品もあり、誰でも楽しめるぞ。ぜひ、来て昭和ヤンキーになろう！",
    },
    {
        name: "Mars7B級 グルメオリンピック",
        belong: "7C",
        description:
            "2024年10月18日我々Mars7は全国のグルメを集め、初めてのグルメオリンピックを開催した。パターゴルフ×バターなど、我々が人生をかけて考えた競技たちだ。さあ、ほほを抱えて競技のフルコースを走り抜け！",
    },
    {
        name: "House of Horror",
        belong: "7D",
        description:
            "私達Jupiter7は、House of Horrorを開いています。大人も泣くような怖い怖い場所で宝探し...ではなくて、安全面無確認したうえでの宝探しです。よかったら来てみてください。",
    },
    {
        name: "美術部",
        belong: "美術部",
        description:
            "3F美術室で部誌の配布、シールなどの販売をしています。部員たちの力作を展示しておりますので、ぜひ見に来てください！",
    },
    {
        name: "書道部",
        belong: "書道部",
        description:
            "3階書道室にてたくさんの作品を展示しています。 今年も書道パフォーマンスを行うので、ぜひ見に来てください！",
    },
    {
        name: "技術部",
        belong: "技術部",
        description:
            "今年の技術部はてんこ盛り!?部員の力作！制作ゲーム等を6階に出展＆PTAバザーでオリジナル作品販売！",
    },
    {
        name: "Jazz部",
        belong: "Jazz部",
        description:
            "Jazzが大好きな部員たちが一丸となって、皆さんに演奏をお届けします。数々の名曲を演奏し、パワーアップしたJazz部のステージを最後までお楽しみください！",
    },
    {
        name: "ダンス部",
        belong: "ダンス部",
        description:
            "ダンス部です！様々なジャンルのダンスを披露させていただきます！ぜひお楽しみください！",
    },
    {
        name: "茶道部",
        belong: "茶道部",
        description: "お気軽に、お越しください！",
    },
    {
        name: "Chamber Ensemble",
        belong: "Chamber Ensemble",
        description:
            "私たちは、aicj chamber ensembleです。精一杯演奏するので、ぜひお聞きください。",
    },
];
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6"> 参加グループ </span>
            <div
                class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color"
            >
                <span>
                    中学生クラス展示・ステージ企画・生徒企画の紹介文一覧です。
                </span>
                <span>
                    高校食販メニューは<RouterLink class="underline" to="/foods"
                        >こちら</RouterLink
                    >からご覧いただけます。
                </span>
            </div>
            <Accordion :value="['0']" multiple>
                <AccordionPanel
                    v-for="group in groups"
                    :key="group.name"
                    :value="group.belong"
                >
                    <AccordionHeader>
                        <span
                            class="text-lg text-black dark:text-white font-semibold"
                        >
                            {{ group.name }}
                        </span>
                        <span
                            class="text-md ml-auto mr-4 md:text-base font-light text-muted-color"
                        >
                            {{ group.belong }}
                        </span>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="m-0 font-light text-muted-color-emphasis">
                            {{ group.description }}
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>
</template>
