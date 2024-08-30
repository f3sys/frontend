<script setup lang="ts">
defineProps<{
    title: string
    subtitles: string[]
    subsubtitles?: string[]
    subsubsubtitles?: string[]
    noMarginBottom?: boolean
}>()
</script>

<template>
    <div :class="{ 'mb-4': !noMarginBottom }">
        <p class="text-sm mb-2 text-primary">
            {{ title }}
        </p>
        <div v-for="(subtitle, index) in subtitles" :key="subtitle" class="text-xl font-semibold mb-2"
            :class="{ 'mb-2': subsubtitles && subsubtitles?.length > 1 }">
            <span class="mr-2" v-if="subtitle == 'Twitter' || subtitle == 'Tiktok'">
                <a :href="subtitle == 'Twitter' ? 'https://x.com/aicj_ed_jp' : 'https://www.tiktok.com/@wellcomeaicj'"
                    class="hover:underline">
                    {{ subtitle }}
                </a>
            </span>
            <span class="mr-2" v-else>
                {{ subtitle }}
            </span>
            <span class="font-light inline-block text-muted-color">
                {{ subsubtitles ? subsubtitles[index] : '' }}
            </span>
        </div>
        <p v-for="subsubsubtitle in subsubsubtitles" :key="subsubsubtitle" class="text-sm font-light text-muted-color">
            {{ subsubsubtitle }}
        </p>
    </div>
</template>