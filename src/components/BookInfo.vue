<template>
    <div class="content__info">
        <img :src="require(`@/assets/images/${book.title}.svg`)" :alt="`Image of the book: ${book.title}`"
            class="book-image" />
        <div class="book__information">
            <h2 class="book-title">{{ book.title }}</h2>
            <p class="book-author">By {{ book.author }}</p>
            <p class="book-price">$ {{ book.price }}</p>
            <p class="book-stock">In Stock:{{ book.availableStock }}</p>
            <p class="book-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec rhoncus dignissim nunc sed molestie. Morbi ac
                porta nulla, vitae egestas est. Cras gravida urna non
                augue tristique interdum. Nunc hendrerit nibh dui, quis
                pulvinar justo dictum tempor.
            </p>
            <button class="book-buy">Buy Now</button>
        </div>
    </div>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/book';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'BookInfo',
    props: {
        book: {
            type: {} as PropType<IBook>,
            required: true
        }
    }
})
</script>

<style scoped>
.content__info {
    display: flex;
    margin-top: 1em;
}

.book-image {
    width: 35%;
    border-radius: 1em;
    box-shadow: 8px 8px black;
    height: 100%;
    margin-right: 1em;
}

.book-information {
    display: flex;
    flex-direction: column;
}

.book-title,
.book-author,
.book-description,
.book-price,
.book-stock {
    margin-bottom: 1em;
}

.book-title {
    font-size: 20px;
    font-weight: 500;
}

.book-author {
    color: var(--black);
}

.book-description {
    font-size: 12px;
}

.book-buy {
    padding: 1em;
    background-color: var(--yellow);
    border-radius: 1em;
    border: 1px solid black;
    box-shadow: 2px 2px black;
}
</style>