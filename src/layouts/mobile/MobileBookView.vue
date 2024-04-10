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
import BookstoreHead from '@/components/BookstoreHead.vue';
import BookInfo from '@/components/BookInfo.vue';

import { IBook } from '@/interfaces/IBook';

export default defineComponent({
    name: 'MobileBookView',
    components: {
        BookstoreHead, BookInfo
    },
    props: {
        book: { type: {} as PropType<IBook>, required: true }
    },
});
</script>

<style scoped>
.book {
    display: flex;
    flex-direction: column;
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
    width: fit-content;
}
</style>
