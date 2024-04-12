<template>
    <section class="content__section">
        <div class="section__header">
            <h2 class="section__title">Our Favorite Books</h2>
            <RouterLink to="/bookstore" class="section__article">
                More >
            </RouterLink>
        </div>
        <ul class="books">
            <EmptyState v-if="books.length === 0"/>
            <BookCard v-for="book in books.slice(0, booksToShow)" :key="book.id" :book="book" />
        </ul>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import BookCard from '@/components/BookCard.vue';
import { useStore } from '@/store';
import { GET_BOOKS } from '@/store/type-actions';
import { IBook } from '@/interfaces/IBook';
import useMobile from '@/hooks/mobile'
import EmptyState from './EmptyState.vue';

export default defineComponent({
    name: 'BookSection',
    components: { BookCard, EmptyState },
    setup() {
        const store = useStore();
        const books = ref([] as IBook[]);
        store.dispatch(GET_BOOKS).then(() => books.value = store.state.books);
        const { isMobile } = useMobile()
        const booksToShow = computed(() => isMobile() ? 3 : 4)

        return {
            books,
            booksToShow,
        };
    },
});
</script>

<style scoped>
.content__section {
    padding: 2em 1em;
}

.books {
    margin-top: 1.5em;
    display: flex;
    justify-content: space-around;
}

.section__header {
    display: flex;
    justify-content: space-between;
    margin: 0 1em;
}

.section__title {
    font-weight: 500;
}

.section__article {
    text-decoration: none;
    color: var(--black);
    font-weight: 600;
}

@media screen and (min-width: 768px) {
    .content__section {
        padding: 3em 4em;
    }

    .section__title {
        font-size: 24px;
    }

    .section__article {
        font-size: 20px;
    }
}
</style>
