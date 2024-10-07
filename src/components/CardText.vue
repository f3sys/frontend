<script setup lang="ts">
const props = withDefaults(defineProps<{
    title: string;
    subtitles: string[];
    subsubtitles?: string[];
    subsubsubtitles?: string[];
    noMarginBottom?: boolean;
}>(), {
    subsubtitles: () => [] as string[],
    subsubsubtitles: () => [] as string[],
    noMarginBottom: false
});
</script>

<template>
    <div :class="{ 'mb-4': !props.noMarginBottom }">
        <p class="text-sm mb-2 text-primary">
            {{ props.title }}
        </p>
        <div class="flex flex-col gap-1">
            <div v-for="(subtitle, index) in props.subtitles" :key="subtitle" class="text-xl font-semibold">
                <div class="flex flex-col sm:flex-row">
                    <span>
                        <a v-if="['Twitter', 'Tiktok'].includes(subtitle)"
                            :href="subtitle === 'Twitter' ? 'https://x.com/aicj_ed_jp' : 'https://www.tiktok.com/@wellcomeaicj'"
                            class="hover:underline">
                            {{ subtitle }}
                        </a>
                        <span v-else>
                            {{ subtitle }}
                        </span>
                    </span>
                    <span v-if="props.subsubtitles.length" class="sm:ml-2 font-light text-muted-color text-nowrap">
                        {{ props.subsubtitles[index] || '' }}
                    </span>
                </div>
            </div>
            <div v-if="props.subsubsubtitles.length" class="flex flex-col gap-1">
                <p v-for="subsubsubtitle in props.subsubsubtitles" :key="subsubsubtitle"
                    class="text-sm font-light text-muted-color">
                    {{ subsubsubtitle }}
                </p>
            </div>
        </div>
    </div>
</template>
