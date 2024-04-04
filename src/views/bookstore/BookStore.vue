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
        const mobile = computed(() => {
            if (window.innerWidth < 768) {
                return true;
            } else {
                return false;
            }
        });

        return {
            mobile,
        };
    },
});
</script>
