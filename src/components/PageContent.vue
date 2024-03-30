<template>
    <main class="content">
        <div class="content__header"></div>
        <CategorieSection />
        <BookSection/>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategorieSection from './CategorieSection.vue';
import BookSection from '@/components/BookSection.vue'

export default defineComponent({
    name: 'PageContent',
    components: { CategorieSection,BookSection },
});
</script>

<style scoped>
.content__header {
    height: 3em;
    background-color: var(--black);
}
</style>
