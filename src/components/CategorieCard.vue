<template>
    <li class="categorie">
        <div class="categorie-colorblock"></div>
        <div class="categorie-content">
            <img src="" alt="" class="categorie-image" />
            <p class="categorie-title">{{ title }}</p>
            <a href="#" class="categorie-article">More ></a>
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
    },
});
</script>

<style scoped>
.categorie {
    width: 25vw;
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
    width: 25vw;
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
