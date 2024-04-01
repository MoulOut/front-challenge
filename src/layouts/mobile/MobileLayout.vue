<template>
    <MobileHero />
    <PageContent />
</template>

<script>
// @ is an alias to /src
import PageContent from '@/components/PageContent.vue';
import MobileHero from '@/components/MobileHero.vue';

export default {
    name: 'MobileLayout',
    components: {
        MobileHero,
        PageContent,
    },
};
</script>
