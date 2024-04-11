<template>
    <MobileBookstore v-if="mobile" />
    <DesktopBookstore v-else />
</template>

<script lang="ts">
import DesktopBookstore from '@/layouts/desktop/DesktopBookstore.vue';
import MobileBookstore from '@/layouts/mobile/MobileBookstore.vue';
import { useWindowSize } from '@vueuse/core';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'BookStore',
    components: { MobileBookstore, DesktopBookstore },
    setup() {
        const { width } = useWindowSize();
        const mobile = computed(() => width.value < 768);

        return {
            mobile,
        };
    },
});
</script>
