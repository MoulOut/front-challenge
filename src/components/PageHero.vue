<template>
    <section class="hero">
        <img src="@/assets/images/Star 7.svg" alt="" class="hero-star-top" />
        <h1 class="hero__title">
            Get started with 5000+ classic literature books for free.
            <img
                src="@/assets/images/Star 6.svg"
                alt="estrela"
                class="hero__title-star"
            />
        </h1>
        <img src="@/assets/images/Star 6.svg" alt="" class="hero-star-bottom" />
    </section>
    <section class="hero-form">
        <input
            type="text"
            class="hero__filter"
            id="hero__filter"
            placeholder="Find your favorite book"
        />
        <label for="hero__filter"></label>
        <button class="hero__button">Search</button>
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
    padding: 3em 2em;
    position: relative;
}

.hero__title {
    font-size: 2em;
    position: relative;
    font-weight: 500;
}

.hero__title-star {
    position: absolute;
    width: 0.7em;
    top: -0.5em;
    transform: rotate(45deg);
    right: 0;
}

.hero-star-bottom {
    position: absolute;
    left: 1em;
    transform: rotate(15deg);
    width: 2em;
    bottom: -1em;
}

.hero-star-top {
    position: absolute;
    left: -2em;
    transform: rotate(40deg);
    width: 6em;
    top: -2.9em;
}

.hero-form {
    padding: 2em 1em;
    display: flex;
    justify-content: space-between;
}

.hero__filter {
    background: transparent;
    padding: 1em;
    border-radius: 1em;
    border: 1px solid var(--black);
    width: 55%;
}

.hero__filter::placeholder {
    color: var(--black);
}

.hero__button {
    padding: 1em 2em;
    font-weight: 600;
    border: 1px solid;
    border-radius: 1em;
    background-color: var(--yellow);
    box-shadow: 2px 2px;
    font-size: 16px;
}

.hero__button:hover {
    background-color: var(--yellow);
}
</style>
