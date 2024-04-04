<template>
    <h1>{{ book.title }}</h1>
    asd
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent, ref } from 'vue';
import { IBook } from '@/interfaces/book';

export default defineComponent({
    name: 'BookView',
    props: {
        id: { type: String, required: true },
    },
    setup(props) {
        const store = useStore();
        const book = ref({} as IBook);
        if (props.id) {
            const bookTofind = store.state.books.find(
                (book) => book.id === Number(props.id)
            );

            if (bookTofind) book.value = bookTofind;
        }

        return {
            book,
        };
    },
});
</script>
