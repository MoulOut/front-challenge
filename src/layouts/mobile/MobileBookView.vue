<template>
    <section class="book">
        <BookstoreHead />
        <div class="book__content">
            <img
                :src="require(`@/assets/images/${book.title}.svg`)"
                :alt="`Image of the book: ${book.title}`"
                class="book-image"
            />
            <h3 class="book-title">{{ book.title }}</h3>
            <p class="book-price">{{ book.price }}</p>
            <p class="book-quantity">
                Available in Stock:{{ book.availableStock }}
            </p>
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
</style>
