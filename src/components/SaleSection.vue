<template>
    <section class="sale">
        <div class="sale__titles">
            <h2>{{ title }}</h2>
            >
        </div>
        <Swiper :slides-per-view="5" :space-between="0" direction="horizontal">
            <SwiperSlide v-for="book in books" :key="book.id">
                <img
                    :src="require(`@/assets/images/${book.title}.svg`)"
                    :alt="`image of the book ${book.title}`"
                    class="book-image"
                />
                {{ book.title }}
                {{ book.price }}
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/book';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, PropType } from 'vue';

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
}

.book-slide{
    display: flex;
    flex-wrap: nowrap;
}

.book-image {
    width: 20vw;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    border: 2px solid black;
}
</style>
