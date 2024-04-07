<template>
    <section class="book">
        <BookstoreHead />
        <RouterLink class="link-back" to="/bookstore">Back</RouterLink>
        <div class="book__content">
            <BookInfo :book="book"/>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BookstoreHead from '@/components/BookstoreHead.vue';
import BookInfo from '@/components/BookInfo.vue';
import { useStore } from '@/store';
import { GET_BOOK } from '@/store/type-actions';

export default defineComponent({
    name: 'MobileBookView',
    components: {
        BookstoreHead, BookInfo
    },
    setup() {
        const store = useStore();
        const bookId = Number(window.location.hash.split('/')[2]);
        store.dispatch(GET_BOOK, bookId).then(() => console.log(store.state.book));
        
        const book = computed(()=> store.state.book);

        return {
            book
        }
    }
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
}
</style>
