<template>
    <MobileBookView :book="book" v-if="mobile" />
    <DesktopBookView :book="book" v-else />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import MobileBookView from '@/layouts/mobile/MobileBookView.vue';
import DesktopBookView from '@/layouts/desktop/DesktopBookView.vue';
import { IBook } from '@/interfaces/book';
import { useStore } from '@/store';
import { GET_BOOKS } from '@/store/type-actions';

export default defineComponent({
    name: 'BookView',
    components: { MobileBookView, DesktopBookView },
    props: {
        id: { type: String, required: true }
    },
    setup(props) {
        const store = useStore();
        if (store.state.books.length === 0) store.dispatch(GET_BOOKS);
        const books = computed(() => store.state.books);
        const book = ref({} as IBook);
        function findBooks() {
            if (props.id) {
                const bookToFind = books.value.find((book) => book.id === Number(props.id))

                if (bookToFind) book.value = bookToFind
            }
        }
        watch(books, () => {
            findBooks()
        })
        findBooks()
        const deviceWidth = window.innerWidth;
        const mobile = deviceWidth < 768;

        return {
            book,
            mobile
        };
    },
});
</script>
