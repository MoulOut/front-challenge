<template>
    <section class="content">
        <div class="section__header">
            <h2 class="section__title">Our Favorite Books</h2>
            <a href="#" class="section__article"> More > </a>
        </div>
        <ul class="books">
            <BookCard />
            <BookCard />
            <BookCard />
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookCard from '@/components/BookCard.vue';

export default defineComponent({
    name: 'BookSection',
    components: { BookCard },
});
</script>

<style scoped>
.content {
    padding: 2em 1em;
}

.books {
    margin-top: 1.5em;
    display: flex;
    justify-content: space-around;
}

.section__header {
    display: flex;
    justify-content: space-between;
    margin: 0 1em;
}

.section__title {
    font-weight: 600;
}

.section__article {
    text-decoration: none;
    color: var(--black);
    font-weight: 600;
}
</style>
