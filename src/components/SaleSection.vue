<template>
    <section class="sale">
        <div class="sale__titles">
            <h2>{{ title }}</h2>
        </div>
        <Swiper :slides-per-view="1" :space-between="10" :width="180" :zoom="true">
            <SwiperSlide class="slide" v-for="book in books" :key="book.id">
                <RouterLink :to="`/bookstore/${book.id}`">
                    <img :src="require(`@/assets/images/${book.title}.svg`)" :alt="`image of the book ${book.title}`"
                        class="book-image" />
                </RouterLink>
                <p class="book-title">{{ book.title }}</p>
                <p class="book-">${{ book.price }}</p>
                <RouterLink class="book-button" :to="`/bookstore/${book.id}`">Show Details</RouterLink>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/book';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, PropType } from 'vue';

import 'swiper/css';

export default defineComponent({
    name: 'SaleSection',
    components: { Swiper, SwiperSlide },
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
}

.book-image {
    width: 100%;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    border: 1px solid black;
    height: 100%;
}

p {
    margin-top: 0.5em
}

.book-title {
    align-self: center;
    font-weight: 500;
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
