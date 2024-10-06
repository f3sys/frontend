<script setup lang="ts">
defineProps<{
    title: string
    longerTitle?: string
    hidden?: boolean
    price: number
}>()

const format = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' })
</script>

<template>
    <div class="flex flex-row items-center">
        <span class="whitespace-nowrap text-xl font-semibold mr-3">
            {{ title }}
            <span v-if="longerTitle" class="hidden md:inline-block">{{ longerTitle }}</span>
        </span>

        <Divider layout="horizontal" />

        <span class="whitespace-nowrap text-xl font-light ml-3">{{ format.format(price) }}</span>
    </div>
</template>