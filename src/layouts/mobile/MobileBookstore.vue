<template>
    <PageContent>
        <template v-slot:content__inner>
            <section class="bookstore">
                <h2 class="bookstore__title">MoulBooks collections</h2>
                <span class="bookstore__subtitle">
                    <RouterLink class="subtitle__links" to="/">Home</RouterLink>
                    >
                    <RouterLink class="subtitle__links" to="/bookstore"
                        >Bookstore</RouterLink
                    >
                </span>
            </section>
        </template>
    </PageContent>
</template>

<script lang="ts">
import PageContent from '@/components/PageContent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MobileBookstore',
    components: { PageContent },
});
</script>

<style>
.bookstore {
    background-color: var(--background);
    height: 50vh;
    padding: 2em;
}

.bookstore__title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 0.5em;
}

.subtitle__links {
    text-decoration: none;
    color: var(--black);
}
</style>
