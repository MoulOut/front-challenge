<template>
    <MobileHome v-if="isMobile()" />
    <DesktopHome v-else />
</template>

<script lang="ts">
import useMobile from '@/hooks/mobile'
import MobileHome from '@/layouts/mobile/MobileHome.vue';
import DesktopHome from '@/layouts/desktop/DesktopHome.vue';

export default {
    name: 'HomeView',
    components: {
        MobileHome,
        DesktopHome,
    },
    setup() {
        const { isMobile } = useMobile()

        return {
            isMobile,
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
