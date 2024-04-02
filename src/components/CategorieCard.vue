<template>
    <li class="categorie">
        <div class="categorie-colorblock"></div>
        <div class="categorie-content">
            <img :src="image" alt="" class="categorie-image" />
            <p class="categorie-title">{{ title }}</p>
            <RouterLink to="/bookstore" class="categorie-article"
                >More ></RouterLink
            >
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InnerCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
    },
});
</script>

<style scoped>
.categorie {
    width: 20vw;
    font-size: 12px;
    text-align: center;
    border: 1px solid black;
    border-radius: 0.7em;
    background-color: var(--white);
}

.categorie-colorblock {
    margin-top: 1em;
    height: 1em;
    background-color: var(--yellow);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 20vw;
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

@media screen and (min-width: 768px) {
    .categorie {
        font-size: 16px;
    }
}
</style>
