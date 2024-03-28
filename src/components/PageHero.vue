<template>
    <section class="hero">
        <h1 class="hero__title">
            Get started with 5000+ classic literature books
        </h1>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageHero',
});
</script>

<style scoped>
.hero {
    background-color: var(--background);
    text-align: center;
    padding: 2em;
}

.hero__title {
    font-size: 2em;
}
</style>
