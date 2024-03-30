<template>
    <main class="content">
        <div class="content__header"></div>
        <CategorieSection />
        <BookSection />
        <InfoSection />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategorieSection from './CategorieSection.vue';
import BookSection from '@/components/BookSection.vue';
import InfoSection from './InfoSection.vue';

export default defineComponent({
    name: 'PageContent',
    components: { CategorieSection, BookSection, InfoSection },
});
</script>

<style scoped>
.content__header {
    height: 3em;
    background-color: var(--black);
}
</style>
