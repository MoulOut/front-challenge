<template>
    <section class="book">
        <BookstoreHead />
        <div class="book__content">
            <RouterLink class="link-back" to="/bookstore">Back</RouterLink>
            <div class="content__info">
                <img
                    :src="require(`@/assets/images/${book.title}.svg`)"
                    :alt="`Image of the book: ${book.title}`"
                    class="book-image"
                />
                <div class="book__information">
                    <h2 class="book-title">{{ book.title }}</h2>
                    <p class="book-author">By {{ book.author }}</p>
                    <p class="book-price">$ {{ book.price }}</p>
                    <p class="book-quantity">
                        Available in Stock:{{ book.availableStock }}
                    </p>
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
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBook } from '../../interfaces/book';
import BookstoreHead from '@/components/BookstoreHead.vue';

export default defineComponent({
    name: 'MobileBookView',
    props: {
        book: { type: {} as PropType<IBook>, required: true },
    },
    components: {
        BookstoreHead,
    },
});
</script>

<style scoped>
.book {
    background-color: var(--background);
    padding: 2em;
}

.book__content {
    margin-top: 1em;
}

.link-back {
    font-weight: 500;
    text-decoration: none;
    color: var(--black);
}

.content__info {
    display: flex;
}

.book-image {
    width: 35%;
    border-radius: 2em;
    box-shadow: 3px 3px black;
    height: 100%;
    margin-right: 10px;
}

.book-information{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
