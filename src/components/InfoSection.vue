<template>
    <section class="content__section">
        <div class="section__header">
            <h2 class="section__title">How we Work</h2>
        </div>
        <ul class="section__info">
            <InfoBox color="var(--light-blue)" description="Pick your book">
                <template v-slot:img>
                    <img
                        src="@/assets/images/Pick.svg"
                        alt=""
                        class="box-image"
                        style="border: 4px ridge var(--yellow)"
                    />
                </template>
            </InfoBox>
            <InfoBox color="var(--yellow)" description="Add to cart">
                <template v-slot:img>
                    <img
                        src="@/assets/images/Add.svg"
                        alt=""
                        class="box-image"
                        style="border: 4px ridge var(--pink)"
                    />
                </template>
            </InfoBox>
            <InfoBox color="var(--pink)" description="Bill payment">
                <template v-slot:img>
                    <img
                        src="@/assets/images/Bill.svg"
                        alt=""
                        class="box-image"
                        style="border: 4px ridge var(--purple)"
                    />
                </template>
            </InfoBox>
            <InfoBox color="var(--purple)" description="Delivery">
                <template v-slot:img>
                    <img
                        src="@/assets/images/Delivery.svg"
                        alt=""
                        class="box-image"
                        style="border: 4px ridge var(--green)"
                    />
                </template>
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

.box-image {
    border-radius: 0.5em;
    padding: 0.5em;
    margin-bottom: 1em;
    width: 60px;
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
