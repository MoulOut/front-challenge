<template>
    <section class="content__section">
        <div class="content__section__card">
            <img
                src="@/assets/images/Star 7.svg"
                alt="Star"
                class="section__card-star"
            />
            <div class="section__card-header">
                <h2 class="section__card-title">
                    Categories suggested for you
                </h2>
                <RouterLink to="/bookstore" class="section__card-article">
                    More >
                </RouterLink>
            </div>
            <ul class="section__card-categories">
                <CategorieCard title="Best Sellers" />
                <CategorieCard title="New Releases" />
                <CategorieCard title="Comming Soon" />
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
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
    z-index: 0;
}

.content__section__card {
    position: relative;
    background: var(--background-gradient);
    padding: 1em;
    border: 1px solid black;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    box-shadow: 2px 3px;
    z-index: 10;
}

.section__card-header {
    display: flex;
    justify-content: space-between;
}

.section__card-star {
    position: absolute;
    transform: rotate(25deg);
    right: -20px;
    top: -30px;
    width: 60px;
    z-index: -100;
}

.section__card-title {
    font-weight: 500;
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

@media screen and (min-width: 768px) {
    .content__section__card {
        margin: 3em;
    }

    .section__card-title {
        font-size: 24px;
    }

    .section__card-article {
        font-size: 20px;
    }
}
</style>
