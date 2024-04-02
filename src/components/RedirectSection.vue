<template>
    <section class="content__section">
        <div class="content__section__card">
            <img
                src="@/assets/images/Reading book-pana.svg"
                alt="People reading"
                class="section__card-image"
            />
            <div class="section__card-texts">
                <img
                    src="@/assets/images/Star 6.svg"
                    alt=""
                    class="section__card-star"
                />
                <h2 class="section__card-title">
                    Tell me, which <strong>book</strong> has your heart right
                    now?
                </h2>
                <RouterLink to="/bookstore" class="section__card-article">
                    Pick your book
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RedirectSection',
});
</script>

<style scoped>
.content__section {
    position: relative;
    padding: 2em 1em;
}

.content__section__card {
    display: flex;
    justify-content: end;
    position: relative;
    background-color: var(--background);
    padding: 1em;
    border: 1px solid black;
    border-top-left-radius: 3em;
    border-bottom-right-radius: 3em;
    box-shadow: 3px 4px;
    z-index: 2;
}

.section__card-title {
    font-weight: 500;
    font-size: 20px;
}

strong {
    color: var(--blue);
    font-size: 24px;
}

.section__card-image {
    width: 40vw;
    position: relative;
    bottom: -2em;
    left: -2em;
}

.section__card-star {
    width: 30px;
    position: absolute;
    top: 1em;
    right: 1em;
    transform: rotate(45deg);
}

.section__card-article {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    background-color: var(--yellow);
    color: black;
    padding: 0.5em 1em;
    border: 1px solid black;
    border-radius: 0.5em;
    box-shadow: 2px 2px;
    width: fit-content;
}

.section__card-texts {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

@media screen and (min-width: 768px) {
    .content__section__card {
        margin: 3em;
        height: 250px;
    }

    .section__card-title {
        font-size: 36px;
    }

    strong {
        font-size: 40px;
    }

    .section__card-article {
        font-size: 20px;
    }

    .section__card-image {
        width: 400px;
        height: 400px;
        position: relative;
        left: -70px;
        bottom: 90px;
    }
}
</style>
