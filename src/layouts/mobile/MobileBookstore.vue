<template>
    <PageContent class="content">
        <template v-slot:content__inner>
            <BookstoreHead :on-filter="filterBooks" />
            <SaleSection :books="books" title="Best selling fiction books" />
            <SaleSection
                :books="books.toReversed()"
                title="Best selling Non-fiction books"
            />
        </template>
    </PageContent>
</template>

<script lang="ts">
import BookstoreHead from '@/components/BookstoreHead.vue';
import SaleSection from '@/components/SaleSection.vue';
import PageContent from '@/components/PageContent.vue';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'MobileBookstore',
    components: { PageContent, BookstoreHead, SaleSection },
    setup() {
        const store = useStore();
        const books = filterBooks('');
        function filterBooks(filter: string) {
            return computed(() =>
                store.state.books.filter(
                    (book) => !filter || book.title.includes(filter)
                )
            );
        }

        return {
            books,
            filterBooks,
        };
    },
});
</script>

<style scoped>
.content {
    padding: 2em;
    background-color: var(--background);
}
</style>
