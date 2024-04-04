<template>
    <MobileBookstore v-if="mobile" />
    <DesktopBookstore v-else />
</template>

<script lang="ts">
import DesktopBookstore from '@/layouts/desktop/DesktopBookstore.vue';
import MobileBookstore from '@/layouts/mobile/MobileBookstore.vue';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'BookStore',
    components: { MobileBookstore, DesktopBookstore },
    setup() {
        const deviceWidth = computed(()=> window.innerWidth)
        const mobile = computed(() => deviceWidth.value < 768);

        return {
            mobile,
        };
    },
});
</script>
