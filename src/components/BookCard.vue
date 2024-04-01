<template>
    <li class="book">
        <div class="book-colorblock"></div>
        <div class="book-content">
            <img src="" alt="" class="book-image" />
            <h4 class="book-title">{{ title }}</h4>
            <p class="book-author">{{ author }}</p>
            <p class="book-price">{{ price }}</p>
            <a href="#" class="book-article">Buy Now</a>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BookCard',
    props: {
        title: {
            type: String,
        },
        author: {
            type: String,
        },
        price: {
            type: Number,
        },
    },
});
</script>

<style scoped>
.book {
    width: 20vw;
    font-size: 12px;
    text-align: center;
    border: 1px solid black;
    border-radius: 0.7em;
    background-color: var(--white);
}

.book-colorblock {
    margin-top: 1em;
    height: 1em;
    background-color: var(--yellow);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 20vw;
}

.book-content {
    padding: 1em;
    display: flex;
    flex-direction: column;
}

.book-title {
    font-weight: 600;
    padding: 1em 0;
}

.book-article {
    font-weight: 500;
    text-decoration: none;
    background-color: var(--yellow);
    color: black;
    padding: 0.5em 1em;
    border: 1px solid black;
    border-radius: 0.5em;
    box-shadow: 2px 2px;
}

.book-article:hover {
    background-color: var(--light-blue);
}
</style>
