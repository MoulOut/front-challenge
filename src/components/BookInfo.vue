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
            <button class="book-buy">Buy Now</button>
        </div>
    </div>
    <h2 class="book-report">Report an issue with this product</h2>
    <ul class="book-info">
        <li class="info-list">
            <p class="info-title">Reading Age</p>
            <div class="img-box">
                <img src="@/assets/images/Reader.svg" alt="" class="info-image">
                <p class="box-text">+18 yrs</p>
            </div>
        </li>
        <li class="info-list">
            <p class="info-title">Print Lenght</p>
            <div class="img-box">
                <img src="@/assets/images/pages.svg" alt="" class="info-image">
                <p class="box-text">320 pages</p>
            </div>
        </li>
        <li class="info-list">
            <p class="info-title">Language</p>
            <div class="img-box">
                <img src="@/assets/images/world.svg" alt="" class="info-image">
                <p class="box-text">English</p>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/book';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'BookInfo',
    props: {
        book: {
            type: {} as PropType<IBook>, required: true
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

.book-information {
    display: flex;
    flex-direction: column;
}

.book-title,
.book-author,
.book-description,
.book-price,
.book-stock,
.book-buy,
.book-report,
.info-list,
.info-title,
.img-box {
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

.book-report {
    margin-top: 1em;
    font-weight: 500;
}

.book-info {
    display: flex;
    align-items: center;
}

.info-list {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-title {
    font-size: 14px;
    font-weight: 500;
}

.img-box {
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 1em;
    text-align: center;
    font-size: 12px;
    width: 60%;
}

@media screen and (min-width: 768px) {
    .book__information {
        width: 30%;
    }
}
</style>