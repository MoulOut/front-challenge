<template>
    <MobileHome v-if="mobile" />
    <DesktopHome v-else />
</template>

<script lang="ts">
import MobileHome from '@/layouts/mobile/MobileHome.vue';
import DesktopHome from '@/layouts/desktop/DesktopHome.vue';
import { computed } from 'vue';

export default {
    name: 'HomeView',
    components: {
        MobileHome,
        DesktopHome,
    },
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
