<template>
    <section class="content__section">
        <img
            src="@/assets/images/Star 7.svg"
            alt="Star"
            class="section__card-star"
        />
        <div class="content__section__card">
            <div class="section__card-header">
                <h2 class="section__card-title">
                    Categories suggested for you
                </h2>
                <a href="#" class="section__card-article"> More > </a>
            </div>
            <ul class="section__card-categories">
                <CategorieCard title="Best Sellers" />
                <CategorieCard title="New Releases" />
                <CategorieCard title="Comming Soon" />
            </ul>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import CategorieCard from './CategorieCard.vue';

export default defineComponent({
    name: 'CategorieSection',
    components: {
        CategorieCard,
    },
});
</script>

<style scoped>
.content__section {
    position: relative;
    background-color: var(--background);
    padding: 2em 1em;
}

.content__section__card {
    position: relative;
    background: var(--background-gradient);
    padding: 1em;
    border: 1px solid black;
    border-top-left-radius: 1em;
    border-bottom-right-radius: 1em;
    box-shadow: 2px 3px;
    z-index: 2;
}

.section__card-header {
    display: flex;
    justify-content: space-between;
}

.section__card-star {
    position: absolute;
    transform: rotate(25deg);
    right: 0;
    top: 0;
    width: 60px;
    z-index: 0;
}

.section__card-title {
    font-weight: 600;
}

.section__card-article {
    text-decoration: none;
    color: var(--black);
    font-weight: 600;
}

.section__card-categories {
    margin-top: 1.5em;
    display: flex;
    justify-content: space-around;
}
</style>
