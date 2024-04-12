<template>
    <section class="sale">
        <div class="sale__titles">
            <h2>{{ title }}</h2>
        </div>
        <Swiper :slides-per-view="1" :space-between="10" :width="180">
            <EmptyState v-if="books.length === 0" />
            <SwiperSlide class="slide" v-for="book in books" :key="book.id">
                <RouterLink :to="`/bookstore/${book.id}`">
                    <img :src="require(`@/assets/images/${book.title}.svg`)" :alt="`image of the book ${book.title}`"
                        class="book-image" />
                </RouterLink>
                <div class="book-info">
                    <p class="book-title">{{ book.title }}</p>
                    <div class="book-rp">
                        <p class="book-rate"><img src="@/assets/images/Star 9.svg" alt="" class="rate-star"> 4.3</p>
                        <p class="book-price">${{ book.price }}</p>
                    </div>
                    <RouterLink class="book-button" :to="`/bookstore/${book.id}`">Show Details</RouterLink>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/IBook';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, PropType } from 'vue';
import EmptyState from './EmptyState.vue';

import 'swiper/css';

export default defineComponent({
    name: 'SaleSection',
    components: { Swiper, SwiperSlide, EmptyState },
    props: {
        title: {
            type: String,
            required: true,
        },
        books: {
            type: Array as PropType<IBook[]>,
            required: true,
        },
    },
});
</script>

<style scoped>
.sale {
    margin-top: 1em;
}

.sale__titles {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
}

.slide {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--white);
    height: auto;
    justify-content: space-between;
}

.book-image {
    width: 100%;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    border: 1px solid black;
    height: 100%;
}

.book-info {
    display: flex;
    flex-direction: column;
}

p {
    margin-top: 0.5em;
}

.book-title {
    align-self: center;
    font-weight: 500;
}

.book-rp {
    display: flex;
    justify-content: space-between;
}

.rate-star {
    transform: rotate(45deg);
    width: 15px;
}

.book-price {
    align-self: end;
}

.book-button {
    text-decoration: none;
    color: black;
    padding: 0.5em 1em;
    background-color: var(--yellow);
    border: 1px solid black;
    border-radius: 0.5em;
    box-shadow: 2px 2px black;
    font-weight: 500;
    margin-top: 0.5em;
    text-align: center;
    width: 60%;
    align-self: center;
}

.book-button:hover {
    background-color: var(--light-blue);
    transition: 0.5s;
}
</style>
