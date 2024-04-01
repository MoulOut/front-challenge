<template>
    <DesktopHero />
    <PageContent />
</template>

<script>
// @ is an alias to /src
import PageContent from '@/components/PageContent.vue';
import DesktopHero from '@/components/DesktopHero.vue';

export default {
    name: 'DesktopLayout',
    components: {
        DesktopHero,
        PageContent,
    },
};
</script>