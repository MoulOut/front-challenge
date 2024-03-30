<template>
    <PageHeader />
    <PageHero />
    <PageContent />
    <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/PageHeader.vue';
import PageHero from '@/components/PageHero.vue';
import PageContent from '@/components/PageContent.vue';
import PageFooter from '@/components/PageFooter.vue';

export default defineComponent({
    name: 'App',
    components: {
        PageHeader,
        PageHero,
        PageContent,
        PageFooter,
    },
});
</script>

<style>
:root {
    --white: #fff8f2;
    --red: #f09497;
    --pink: #fdccb4;
    --light-blue: #d0e3dd;
    --blue: #12758d;
    --purple: #c6a8f6;
    --green: #abe5bc;
    --black: #373737;
    --background: #fcf6e8;
    --background-gradient: linear-gradient(to bottom, #fdccb4, #d0e3dd);
    --yellow: #fec447;

    --primary-font: 'Poppins';

    background-color: var(--light-blue);
}

#app {
    font-family: var(--primary-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
