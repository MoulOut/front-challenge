<template>
    <MobileBookView v-if="mobile" />
    <DesktopBookView v-else />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import MobileBookView from '@/layouts/mobile/MobileBookView.vue';
import DesktopBookView from '@/layouts/desktop/DesktopBookView.vue';

export default defineComponent({
    name: 'BookView',
    components: { MobileBookView, DesktopBookView },
    setup() {
        const deviceWidth = window.innerWidth;
        const mobile = computed(() => deviceWidth < 768);

        return {
            mobile
        };
    },
});
</script>
