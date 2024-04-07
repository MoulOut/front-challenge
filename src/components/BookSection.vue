<template>
    <section class="content__section">
        <div class="section__header">
            <h2 class="section__title">Our Favorite Books</h2>
            <RouterLink to="/bookstore" class="section__article">
                More >
            </RouterLink>
        </div>
        <ul class="books">
            <BookCard v-for="book in books.slice(0, booksToShow)" :key="book.id" :book="book"><template v-slot:img>
                    <img :src="require(`@/assets/images/${book.title}.svg`)" alt="" class="book-image" />
                </template>
            </BookCard>
        </ul>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import BookCard from '@/components/BookCard.vue';
import { useStore } from '@/store';
import { GET_BOOKS } from '@/store/type-actions';
import { IBook } from '@/interfaces/IBook';

export default defineComponent({
    name: 'BookSection',
    components: { BookCard },
    setup() {
        const store = useStore();
        const books = ref([] as IBook[]);
        store.dispatch(GET_BOOKS).then(() => books.value = store.state.books);
        const booksToShow = computed(() => window.innerWidth < 768 ? 3 : 4)

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

.book-image {
    position: absolute;
    width: 72%;
    height: 100%;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    top: -45%;
    left: 15%;
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
