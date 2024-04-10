<template>
    <li class="book">
        <div class="book-colorblock"></div>
        <img :src="require(`@/assets/images/${book.title}.svg`)" alt="" class="book-image" />
        <div class="book-content">
            <h4 class="book-title">{{ book.title }}</h4>
            <p class="book-author">By {{ book.author }}</p>
            <div class="book-rp">
                <p class="book-rate"><img src="@/assets/images/Star 9.svg" alt="" class="rate-star"> 4.3</p>
                <p class="book-price">${{ book.price }}</p>
            </div>
            <RouterLink :to="`/bookstore/${book.id}`" class="book-link">{{ mobile ? 'Buy' : 'Buy Now' }}</RouterLink>
        </div>
    </li>
</template>

<script lang="ts">
import { IBook } from '@/interfaces/IBook';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'BookCard',
    props: {
        book: {
            type: {} as PropType<IBook>, required: true
        }
    },
    setup() {
        const mobile = window.innerWidth < 768;

        return {
            mobile
        }
    },
});
</script>

<style scoped>
.book {
    position: relative;
    width: 30%;
    font-size: 12px;
    text-align: start;
    border: 1px solid black;
    border-radius: 1.5em;
    background-color: var(--white);
    margin-top: 10%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.book-colorblock {
    margin-top: 1.5em;
    height: 1em;
    background-color: var(--yellow);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
}

.book-image {
    position: absolute;
    width: 72%;
    height: 100%;
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
    top: -45%;
    left: 15%;
    pointer-events: none;
}

.book-content {
    padding: 1em;
    display: flex;
    flex-direction: column;
    height: 45%;
    justify-content: space-evenly;
}

.book-title {
    font-weight: 600;
}

.book-link {
    font-weight: 500;
    text-decoration: none;
    background-color: var(--yellow);
    color: black;
    padding: 0.5em 1em;
    border: 1px solid black;
    border-radius: 0.5em;
    box-shadow: 2px 2px;
    text-align: center;
    width: 60%;
    align-self: center;
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

.book-link:hover {
    background-color: var(--light-blue);
}

@media screen and (min-width: 768px) {
    .book {
        height: 300px;
        width: 22%;
    }

    .book-title {
        font-size: 18px;
    }

    .rate-star {
        width: 20px;
    }

    .book-author,
    .book-price,
    .book-rate {
        font-size: 16px;
    }

    .book-content {
        padding: 1em 2em;
    }
}
</style>
