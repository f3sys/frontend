<script setup lang="ts">
import { useClientStore } from "@/stores/client";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { storeToRefs } from "pinia";
import { ref } from 'vue';

const visible = ref(false);
const clientStore = useClientStore();
const { F3SiD } = storeToRefs(clientStore)
const qrcode = useQRCode(F3SiD, {
    errorCorrectionLevel: "Q",
    type: "image/webp",
});

if (clientStore.F3SiD === "") {
    clientStore.setF3SiD();
}
</script>
<template>
    <Button icon="pi pi-qrcode" label="F3SiD" @click="visible = true" />

    <Dialog v-model:visible="visible" modal header="F3SiD" :style="{ width: '25rem' }">
        <div class="flex items-center gap-4">
            <Image :src="qrcode" alt="F3SiD Image" class="w-full h-auto"
                image-style="width:100%; height: auto;image-rendering: pixelated;" />
        </div>
        <template #footer>
            <span class="mx-auto font-mono">{{ F3SiD }}</span>
        </template>
    </Dialog>
</template>