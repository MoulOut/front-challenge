<template>
    <section class="content__section">
        <div class="section__header">
            <h2 class="section__title">How we Work</h2>
        </div>
        <ul class="section__info">
            <InfoBox v-for="props in infoBoxProps" :key="props.description" :description="props.description"
                :info-box-props="props">
            </InfoBox>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfoBox from '@/components/InfoBox.vue';

export default defineComponent({
    name: 'InfoSection',
    components: { InfoBox },
    setup() {
        const infoBoxProps = [
            { description: "Pick your book", imgName: "Pick", style: "border: 4px ridge var(--yellow)" },
            { description: "Add to cart", imgName: "Add", style: "border: 4px ridge var(--pink)" },
            { description: "Bill payment", imgName: "Bill", style: "border: 4px ridge var(--purple)" },
            { description: "Delivery", imgName: "Delivery", style: "border: 4px ridge var(--green)" },
        ]

        return {
            infoBoxProps
        }
    }
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
    justify-content: space-evenly;
    margin: 2em 1em;
}

@media screen and (min-width: 768px) {
    .content__section {
        padding: 3em 4em;
    }

    .section__title {
        font-size: 24px;
    }
}
</style>
