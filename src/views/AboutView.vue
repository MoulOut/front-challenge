<template>
    <section class="about">
        <img src="@/assets/images/Library-cuate.svg" alt="" class="about-image">
        <div class="about__content">
            <h2 class="about-title">Who we Are?</h2>
            <p class="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur nunc sit amet mauris
                ultrices, eu condimentum ante accumsan. Nam rutrum mauris odio, eget eleifend eros eleifend et. Integer
                quis orci consectetur, tempus erat id, accumsan urna. Nunc varius fermentum venenatis. Aliquam dolor
                sem, tempus sit amet libero id, molestie placerat ex. Mauris vestibulum felis nulla, at ultricies lorem
                sollicitudin ut.
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutView',
})
</script>

<style scoped>
.about {
    background-color: var(--background);
    padding: 1em;
    display: flex;
}

.about-image {
    width: 40%;
    margin-right: 1em;
}

.about-title {
    font-weight: 500;
    border-bottom: 1px solid var(--blue);
    margin-bottom: 1em;
    width: fit-content;
}

.about-text {
    font-size: 14px;
    text-align: start;
}

.about__content {
    display: flex;
    flex-direction: column;
    justify-content: start;
}

@media screen and (min-width: 768px) {
    .about {
        padding: 3em;
    }
}
</style>