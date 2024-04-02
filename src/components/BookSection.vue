<template>
    <section class="content__section">
        <div class="section__header">
            <h2 class="section__title">Our Favorite Books</h2>
            <RouterLink to="/bookstore" class="section__article">
                More >
            </RouterLink>
        </div>
        <ul class="books">
            <BookCard
                v-for="book in books"
                :key="book.id"
                :author="book.author"
                :title="book.title"
                :price="book.price"
                ><template v-slot:img>
                    <img
                        :src="require(`@/assets/images/${book.title}.svg`)"
                        alt=""
                        class="book-image"
                    />
                </template>
            </BookCard>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookCard from '@/components/BookCard.vue';
import { useStore } from '@/store';

export default defineComponent({
    name: 'BookSection',
    components: { BookCard },
    setup() {
        const store = useStore();

        return {
            books: store.state.books || [],
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
    width: 75%;
    height: 100%;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    top: -50%;
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
