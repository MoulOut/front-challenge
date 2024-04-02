<template>
    <li class="book">
        <div class="book-colorblock"></div>
        <slot name="img" />
        <div class="book-content">
            <h4 class="book-title">{{ title }}</h4>
            <p class="book-author">By {{ author }}</p>
            <p class="book-price">$ {{ price }}</p>
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
        image: {
            type: String,
        },
    },
});
</script>

<style scoped>
.book {
    position: relative;
    width: 30%;
    font-size: 12px;
    text-align: start;
    border: 1px solid black;
    border-radius: 1.5em;
    background-color: var(--white);
    margin-top: 15%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.book-colorblock {
    margin-top: 1.5em;
    height: 1em;
    background-color: var(--yellow);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
}

.book-content {
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    height: 45%;
    justify-content: space-evenly;
}

.book-title {
    font-weight: 600;
    padding: 0.5em 0;
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
    text-align: center;
    width: 60%;
    align-self: center;
}

.book-price {
    text-align: end;
}

.book-article:hover {
    background-color: var(--light-blue);
}

@media screen and (min-width: 768px) {
    .book {
        justify-content: space-between;
    }

    .book-title {
        font-size: 18px;
    }

    .book-author,
    .book-price {
        font-size: 16px;
    }

    .book-content {
        padding: 1em 3em;
    }
}
</style>
