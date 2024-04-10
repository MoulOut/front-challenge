<template>
    <div class="content__info">
        <img :src="require(`@/assets/images/${book.title}.svg`)" :alt="`Image of the book: ${book.title}`"
            class="book-image" />
        <div class="book__information">
            <h2 class="book-title">{{ book.title }}</h2>
            <p class="book-author">By {{ book.author }}</p>
            <p class="book-price">${{ book.price }}</p>
            <p class="book-stock">In Stock: {{ book.availableStock }}</p>
            <p class="book-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec rhoncus dignissim nunc sed molestie. Morbi ac
                porta nulla, vitae egestas est. Cras gravida urna non
                augue tristique interdum. Nunc hendrerit nibh dui, quis
                pulvinar justo dictum tempor.
            </p>
            <button class="book-buy" @click="buyBook" :disabled="isOutOfStock">{{ isOutOfStock ? 'Out of Stock' :
                'Buy Now' }}</button>
            <BookSubInfo v-if="!mobile" />
        </div>
    </div>
    <BookSubInfo v-if="mobile" />
</template>

<script lang="ts">
import { IBook } from '@/interfaces/IBook';
import { useStore } from '@/store';
import { BUY_BOOK } from '@/store/type-actions';
import { computed, defineComponent, PropType } from 'vue';
import useNotify from '@/hooks/notifier'
import BookSubInfo from '@/components/BookSubInfo.vue'

export default defineComponent({
    name: 'BookInfo',
    props: {
        book: {
            type: {} as PropType<IBook>, required: true
        }
    },
    components: { BookSubInfo },
    setup(props) {
        const store = useStore()
        const { notify } = useNotify()
        const mobile = window.innerWidth < 768;
        function buyBook() {
            store.dispatch(BUY_BOOK, props.book.id)
                .then(() => notify('Congratulations!', 'Your purchase has been completed'))
                .catch(() => notify('Sorry!', 'Your purchase failed, try again in a few seconds.'))
        }

        const isOutOfStock = computed(() => props.book.availableStock === 0);

        return {
            buyBook,
            mobile,
            isOutOfStock
        }
    }
});
</script>

<style scoped>
.content__info {
    display: flex;
    margin-top: 1em;
}

.book-image {
    width: 35%;
    border-radius: 1em;
    box-shadow: 8px 8px black;
    height: 100%;
    margin-right: 1em;
}

.book__information {
    overflow: auto;
}

.book-title,
.book-author,
.book-description,
.book-price,
.book-stock,
.book-buy {
    margin-bottom: 0.5em;
}

.book-title {
    font-size: 20px;
    font-weight: 500;
}

.book-author {
    color: var(--black);
}

.book-description {
    font-size: 12px;
}

.book-buy {
    padding: 0.5em 1em;
    background-color: var(--yellow);
    border-radius: 0.5em;
    border: 1px solid black;
    box-shadow: 2px 2px black;
    font-weight: 600;
}

.book-buy:hover {
    background-color: var(--light-blue);
    cursor: pointer;
}

.book-buy:disabled {
    background-color: var(--black);
    color: var(--white);
    opacity: 0.8;
    cursor: default;
}

@media screen and (min-width: 768px) {
    .book__information {
        width: 45%;
    }

    .book-image {
        width: 25%;
    }
}
</style>