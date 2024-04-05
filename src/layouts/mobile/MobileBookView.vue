<template>
    <section class="book">
        <BookstoreHead />
        <RouterLink class="link-back" to="/bookstore">Back</RouterLink>
        <div class="book__content">
            <BookInfo :book="book" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBook } from '../../interfaces/book';
import BookstoreHead from '@/components/BookstoreHead.vue';
import BookInfo from '@/components/BookInfo.vue';

export default defineComponent({
    name: 'MobileBookView',
    props: {
        book: { type: {} as PropType<IBook>, required: true },
    },
    components: {
        BookstoreHead, BookInfo
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
    margin-top: 1em;
    font-weight: 500;
    text-decoration: none;
    color: black;
}
</style>
