<template>
    <PageContent class="content">
        <template v-slot:content__inner>
            <BookstoreHead />
            <input type="search" class="book-search" placeholder="Find your book here" v-model="filter"
                id="book-search" />
            <SaleSection :books="books" title="Best selling fiction books" />
            <SaleSection :books="books.toReversed()" title="Best selling Non-fiction books" />
        </template>
    </PageContent>
    <SubSection />
</template>

<script lang="ts">
import BookstoreHead from '@/components/BookstoreHead.vue';
import PageContent from '@/components/PageContent.vue';
import SaleSection from '@/components/SaleSection.vue';
import SubSection from '@/components/SubSection.vue';
import { useStore } from '@/store';
import { GET_BOOKS } from '@/store/type-actions';
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    name: 'DesktopBookstore',
    components: { PageContent, BookstoreHead, SaleSection, SubSection },
    setup() {
        const store = useStore();
        store.dispatch(GET_BOOKS).then();
        const filter = ref('');

        const books = computed(() =>
            store.state.books.filter(
                (book) => !filter.value || book.title.includes(filter.value)
            )
        );

        return {
            books,
            filter,
        };
    },
});
</script>

<style scoped>
.content {
    padding: 2em;
    background-color: var(--background);
}

.book-search {
    margin-top: 1em;
    display: block;
    padding: 1em;
    background-color: transparent;
    border: 1px solid var(--black);
    border-radius: 1em;
    width: 100%;
}
</style>