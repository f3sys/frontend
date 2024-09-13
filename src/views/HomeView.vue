<template>
  <main>
    <div
      class="bg-[url(https://pbs.twimg.com/media/F8ywqpKa8AE6NoI?format=jpg&name=4096x4096)] bg-cover bg-no-repeat bg-center h-screen max-h-[calc(100vh-75px)] relative">
      <h1 class="text-5xl font-semibold text-white absolute left-10 bottom-24" style="text-shadow: 0px 0px 10px black;">
        AICJ 学園祭 <br /> 2024
      </h1>
      <Button class="!absolute left-10 bottom-10" label="開催事項" as="a" href="#jikou"></Button>

      <div class="!absolute right-0 bottom-0">
        <span class="h-16 w-16 bg-primary text-white dark:text-black inline-flex items-center justify-center ">
          <i class="pi pi-arrow-down !text-2xl"></i>
        </span>
      </div>
    </div>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-10 w-full max-w-screen-xl mx-auto px-4">
      <Card class="self-start justify-self-center p-4 border border-surface-200 dark:border-surface-700">
        <template #title>Concept</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam
            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate
            neque quas!
          </p>
        </template>
      </Card>

      <Card class="self-start justify-self-center p-4 border border-surface-200 dark:border-surface-700">
        <template #title>F3SiDとは</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam
            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate
            neque quas!
          </p>
        </template>
      </Card>
      <div id="jikou" />
    </div>

    <div class="w-full max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-4 my-8">
      <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
        <span class="text-4xl self-start">開催事項</span>
        <div class="flex">
          <Divider layout="vertical" />

          <div class="grid grid-cols-1 max-w-60 w-full">
            <CardText title="DAY 1 非公開日" :subtitles="['2024/10/18']" :subsubtitles="['(金・平)']" />

            <CardText title="DAY 2 公開日" :subtitles="['2024/10/19']" :subsubtitles="['(土・休)']" />

            <CardText title="TIME" :subtitles="['9:30 - 15:30']" no-margin-bottom />
          </div>

          <Divider layout="vertical" />

          <div class="grid grid-cols-1 max-w-60 w-full">
            <CardText title="THEME" :subtitles="['???']" />

            <CardText title="SNS" :subtitles="['Twitter', 'Tiktok']" :subsubsubtitles="['最新情報をチェック!']" />
          </div>
        </div>
      </div>
      <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
        <span class="text-4xl self-start">アクセス</span>
        <div class="flex">
          <Divider layout="vertical" />

          <div class="grid grid-cols-1 max-w-60 w-full">
            <CardText title="PLACE" :subtitles="['AICJ中学・高等学校']" :subsubsubtitles="[
              '〒731-0138',
              '広島市安佐南区祇園3丁目1-15',
              '公共交通機関をご利用ください'
            ]" />

            <CardText title="ENTRY" :subtitles="['F3SiD']"
              :subsubsubtitles="['会場ではスマホでF3SiDをスキャンしてもらうため、予めご了承ください。']" />
          </div>

          <Divider layout="vertical" />

          <div class="grid grid-cols-1 max-w-60 w-full">
            <CardText title="ACCESS" :subtitles="['JR下祇園駅', 'HRT西原駅', '今津バス停']"
              :subsubtitles="['徒歩3分', '徒歩10分', '徒歩5分']" />
          </div>
        </div>
      </div>
    </div>

  </main>
</template>