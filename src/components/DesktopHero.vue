<template>
    <section class="hero">
        <div class="hero__texts">
            <h1 class="hero__title">
                The World belongs to those who <b>read !</b>
            </h1>
            <p class="hero__subtitle">
                Read more books... Meet enthusiastic people...
                <b>Grow your wings!</b>
            </p>
            <div class="hero__form">
                <input
                    type="text"
                    class="hero__filter"
                    id="hero__filter"
                    placeholder="Find your favorite book"
                />
                <label for="hero__filter"></label>
                <button class="hero__button">Search</button>
            </div>
        </div>
        <img
            src="@/assets/images/image 28.svg"
            alt="hero-image"
            class="hero-image"
        />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DesktopHero',
});
</script>

<style scoped>
.hero {
    display: flex;
    background-color: var(--background);
    text-align: start;
    padding: 3em 4em;
    position: relative;
    height: 65vh;
}

.hero__texts {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
}

.hero__title {
    font-size: 40px;
    position: relative;
    font-weight: 500;
    line-height: 1.5em;
}

.hero__subtitle {
    margin: 2em 0;
    font-size: 20px;
    font-weight: 500;
}

b {
    color: var(--blue);
}

.hero__form {
    display: flex;
    width: 100%;
}

.hero__filter {
    background: transparent;
    padding: 1em;
    border-radius: 0.5em;
    border: 1px solid var(--black);
    width: 70%;
    margin-right: 2em;
}

.hero__filter::placeholder {
    color: var(--black);
}

.hero__button {
    padding: 0.5em 2em;
    font-weight: 600;
    border: 1px solid;
    border-radius: 0.5em;
    background-color: var(--yellow);
    box-shadow: 2px 2px;
    font-size: 16px;
}

.hero__button:hover {
    background-color: var(--light-blue);
}

.hero-image {
    width: 50%;
    margin-left: 1em;
}
</style>
