<template>
    <PageContent class="content">
        <template v-slot:content__inner>
            <BookstoreHead />
            <SaleSection :books="books" title="Best selling fiction books" />
            <SaleSection
                :books="books.toReversed()"
                title="Best selling Non-fiction books"
            />
        </template>
    </PageContent>
    <SubSection />
</template>

<script lang="ts">
import BookstoreHead from '@/components/BookstoreHead.vue';
import SaleSection from '@/components/SaleSection.vue';
import PageContent from '@/components/PageContent.vue';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import SubSection from '@/components/SubSection.vue';

export default defineComponent({
    name: 'MobileBookstore',
    components: { PageContent, BookstoreHead, SaleSection, SubSection },
    setup() {
        const store = useStore();

        return {
            books: computed(() => store.state.books),
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
