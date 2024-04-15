<template>
    <PageHeader />
    <RouterView class="view"></RouterView>
    <PageFooter />
    <Notifications />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import Notifications from './components/Notifications.vue';

export default defineComponent({
    name: 'App',
    components: {
        PageHeader, PageFooter, Notifications
    },
});
</script>

<style>
:root {
    --white: #fff8f2;
    --red: #f09497;
    --pink: #fdccb4;
    --light-blue: #9ad3cf;
    --blue: #12758d;
    --purple: #c6a8f6;
    --green: #abe5bc;
    --black: #373737;
    --background: #fcf6e8;
    --background-gradient: linear-gradient(to bottom, #fdccb4, #9ad3cf);
    --yellow: #fec447;

    --primary-font: 'Poppins';

    background-color: var(--light-blue);
}

#app {
    font-family: var(--primary-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.view {
    margin-top: 70px
}

@media screen and (min-width: 768px) {
    .view {
        margin-top: 0px;
    }
}
</style>
