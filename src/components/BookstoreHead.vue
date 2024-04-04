<template>
    <section class="bookstore">
        <div class="bookstore__inner">
            <div class="inner__titles">
                <h2 class="inner__title">MoulBooks collections</h2>
                <p class="inner__subtitle">
                    <RouterLink class="subtitle__links" to="/">Home</RouterLink>
                    >
                    <RouterLink class="subtitle__links" to="/bookstore"
                        >Bookstore</RouterLink
                    >
                </p>
            </div>
            <select class="selector">
                <option value="">Default Sorting</option>
                <option value="">Lowest price</option>
                <option value="">Higher price</option>
            </select>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
    name: 'BookstoreHead',
    emits: ['filter'],
    setup(event, { emit }) {
        const filter = ref('');

        watchEffect(() => emit('filter', filter.value));
        return { filter };
    },
});
</script>

<style>
.bookstore__inner {
    display: flex;
    justify-content: space-between;
}

.inner__title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0.5em;
}

.subtitle__links {
    text-decoration: none;
    color: var(--black);
}

.selector {
    font: var(--primary-font);
    font-size: 16px;
    width: 40%;
    height: 2em;
    background-color: var(--background);
    border: none;
    border-bottom: 1px solid black;
}
</style>
