<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';

const items: MenuItem[] = [
    {
        label: '高校食飯',
        to: '/foods',
        class: 'ml-2'
    },
    {
        label: '物品販売',
        to: '/goods',
        class: 'ml-2'
    },
    {
        label: '参加グループ',
        to: '/groups',
        class: 'ml-2'
    },
    {
        label: 'スケジュール',
        to: '/schedule',
        class: 'ml-2'
    },
    {
        label: 'パンフレット',
        to: '/pamphlet',
        class: 'ml-2'
    },
    // {
    //     label: '投票',
    //     to: '/vote',
    //     class: 'ml-2'
    // }
];
</script>

<template>
    <MegaMenu :model="items" breakpoint="1024px"
        style="border: none; border-bottom: 1px solid var(--p-megamenu-border-color); border-radius: 0;">
        <template #start>
            <h1 class="text-2xl font-medium">
                <RouterLink to="/">AICJ 学園祭</RouterLink>
            </h1>
        </template>
        <template #item="{ item }">
            <RouterLink :to="item.to">
                <Button class="w-full lg:w-auto !justify-start inline-block" text plain>
                    {{ item.label }}
                </Button>
            </RouterLink>
        </template>
        <template #end>
            <F3SiD />
        </template>
    </MegaMenu>
</template>

<style lang="css">
.p-megamenu-item {
    margin: 0;
}
</style>