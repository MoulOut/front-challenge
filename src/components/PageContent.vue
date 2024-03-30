<template>
    <main class="content">
        <div class="content__header"></div>
        <CategorieSection />
        <BookSection />
        <InfoSection />
        <RedirectSection />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategorieSection from './CategorieSection.vue';
import BookSection from '@/components/BookSection.vue';
import InfoSection from './InfoSection.vue';
import RedirectSection from './RedirectSection.vue';

export default defineComponent({
    name: 'PageContent',
    components: { CategorieSection, BookSection, InfoSection,RedirectSection },
});
</script>

<style scoped>
.content__header {
    height: 3em;
    background-color: var(--black);
}
</style>
