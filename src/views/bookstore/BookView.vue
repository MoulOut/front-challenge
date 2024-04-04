<template>
    <MobileBookView :book="book" v-if="mobile" />
    <DesktopBookView :book="book" v-else />
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent, ref } from 'vue';
import { IBook } from '@/interfaces/book';
import MobileBookView from '@/layouts/mobile/MobileBookView.vue';

export default defineComponent({
    name: 'BookView',
    props: {
        id: { type: String, required: true },
    },
    components: { MobileBookView },
    setup(props) {
        const store = useStore();
        const book = ref({} as IBook);
        const deviceWidth = computed(()=> window.innerWidth)
        const mobile = computed(() => deviceWidth.value < 768);
        if (props.id) {
            const bookTofind = store.state.books.find(
                (book) => book.id === Number(props.id)
            );

            if (bookTofind) book.value = bookTofind;
        }


        return {
            book,
            mobile
        };
    },
});
</script>
