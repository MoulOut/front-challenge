<template>
    <li class="book">
        <div class="book-colorblock"></div>
        <slot name="img" />
        <div class="book-content">
            <h4 class="book-title">{{ book.title }}</h4>
            <p class="book-author">By {{ book.author }}</p>
            <p class="book-price">$ {{ book.price }}</p>
            <RouterLink :to="`/bookstore/${book.id}`" class="book-link">Buy Now</RouterLink>
        </div>
    </li>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/book';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'BookCard',
    props: {
        book: {
            type: {} as PropType<IBook>, required: true
        }
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
    height: 38vmax;
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
    padding: 1em;
    display: flex;
    flex-direction: column;
    height: 45%;
    justify-content: space-evenly;
}

.book-title {
    font-weight: 600;
    padding: 0.5em 0;
}

.book-link {
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

.book-link:hover {
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
