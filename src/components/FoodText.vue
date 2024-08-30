<script setup lang="ts">
defineProps<{
    title: string
    price: string
}>()
</script>

<template>
    <div class="flex flex-row items-center">
        <span class="whitespace-nowrap text-xl font-semibold mr-4">
            {{ title }}
        </span>

        <Divider layout="horizontal" />

        <span class="whitespace-nowrap text-xl font-light ml-4">{{ price }}</span>
    </div>
</template>