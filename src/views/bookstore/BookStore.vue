<template>
    <MobileBookstore v-if="mobile" />
    <DesktopBookstore v-else />
</template>

<script lang="ts">
import DesktopBookstore from '@/layouts/desktop/DesktopBookstore.vue';
import MobileBookstore from '@/layouts/mobile/MobileBookstore.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BookStore',
    components: { MobileBookstore, DesktopBookstore },
    setup() {
        const deviceWidth = window.innerWidth;
        const mobile = deviceWidth < 768;

        return {
            mobile,
        };
    },
});
</script>
