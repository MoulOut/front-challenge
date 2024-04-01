<template>
    <MobileLayout v-if="pageWidth" />
    <DesktopLayout v-else />
</template>

<script lang="ts">
import MobileLayout from '@/layouts/mobile/MobileLayout.vue';
import DesktopLayout from '@/layouts/desktop/DesktopLayout.vue';
import { computed } from 'vue';

export default {
    name: 'HomeView',
    components: {
        MobileLayout,
        DesktopLayout,
    },
    setup() {
        const pageWidth = computed(() => {
            if (window.innerWidth < 768) {
                return true;
            } else {
                return false;
            }
        });

        return {
            pageWidth,
        };
    },
};
</script>

<style scoped>
.desktop {
    display: none;
}

@media screen and (min-width: 768px) {
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
}
</style>
