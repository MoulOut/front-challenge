<template>
    <section class="content__section">
        <div class="section__header">
            <h2 class="section__title">How We Work</h2>
        </div>
        <ul class="section__info">
            <InfoBox color="var(--light-blue)" description="Pick your book" />
            <InfoBox color="var(--yellow)" description="Add to cart" />
            <InfoBox color="var(--pink)" description="Bill payment" />
            <InfoBox color="var(--purple)" description="Delivery" />
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfoBox from '@/components/InfoBox.vue';

export default defineComponent({
    name: 'InfoSection',
    components: { InfoBox },
});
</script>

<style scoped>
.content__section {
    padding: 2em 1em;
    background-color: var(--background);
}

.section__header {
    display: flex;
    justify-content: space-between;
    margin: 0 1em;
}

.section__title {
    font-weight: 500;
}

.section__info {
    display: flex;
    justify-content: space-between;
    margin: 2em 1em;
}
</style>
