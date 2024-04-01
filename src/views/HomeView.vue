<template>
    <div class="mobile">
        <MobileLayout />
    </div>
    <div class="desktop">
        <DesktopLayout />
    </div>
</template>

<script>
import MobileLayout from '@/layouts/mobile/MobileLayout.vue';
import DesktopLayout from '@/layouts/desktop/DesktopLayout.vue';

export default {
    name: 'HomeView',
    components: {
        MobileLayout,
        DesktopLayout,
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
