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
                    <h3 class="book-title">{{ book.title }}</h3>
                    <p class="book-price">{{ book.price }}</p>
                    <p class="book-quantity">
                        Available in Stock:{{ book.availableStock }}
                    </p>
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

.content-info {
    display: flex;
}

.book-image {
    width: 40%;
}
</style>
