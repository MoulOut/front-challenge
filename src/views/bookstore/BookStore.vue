<template>
    <MobileBookstore v-if="isMobile()" />
    <DesktopBookstore v-else />
</template>

<script lang="ts">
import DesktopBookstore from '@/layouts/desktop/DesktopBookstore.vue';
import MobileBookstore from '@/layouts/mobile/MobileBookstore.vue';
import { defineComponent } from 'vue';
import useMobile from '@/hooks/mobile';

export default defineComponent({
    name: 'BookStore',
    components: { MobileBookstore, DesktopBookstore },
    setup() {
        const { isMobile } = useMobile()

        return {
            isMobile,
        };
    },
});
</script>
