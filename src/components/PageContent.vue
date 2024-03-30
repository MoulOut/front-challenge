<template>
    <main class="content">
        <div class="content__header"></div>
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
                    <li class="categorie">
                        <div class="categorie-colorblock"></div>
                        <div class="categorie-content">
                            <p class="categorie-title">Best Sellers</p>
                            <a href="#" class="categorie-article">More ></a>
                        </div>
                    </li>
                    <li class="categorie">
                        <div class="categorie-colorblock"></div>
                        <div class="categorie-content">
                            <p class="categorie-title">New releases</p>
                            <a href="#" class="categorie-article">More ></a>
                        </div>
                    </li>
                    <li class="categorie">
                        <div class="categorie-colorblock"></div>
                        <div class="categorie-content">
                            <p class="categorie-title">Comming soon</p>
                            <a href="#" class="categorie-article">More ></a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageContent',
});
</script>

<style scoped>
.content__header {
    height: 3em;
    background-color: var(--black);
}

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

.categorie {
    position: relative;
    font-size: 12px;
    text-align: center;
    border: 1px solid black;
    border-radius: 0.7em;
    background-color: var(--white);
}

.categorie-colorblock {
    display: absolute;
    margin-top: 1em;
    left: -1em;
    height: 1em;
    background-color: var(--yellow);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
}

.categorie-content {
    padding: 1em;
}

.categorie-title {
    font-weight: 700;
    padding: 1em 0;
}

.categorie-article {
    text-decoration: none;
    color: black;
}
</style>
