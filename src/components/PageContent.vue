<template>
    <main class="content">
        <div class="content__header"></div>
        <CategorieSection />
        <BookSection />
        <InfoSection />
        <RedirectSection />
        <SubSection />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategorieSection from './CategorieSection.vue';
import BookSection from './BookSection.vue';
import InfoSection from './InfoSection.vue';
import RedirectSection from './RedirectSection.vue';
import SubSection from './SubSection.vue';

export default defineComponent({
    name: 'PageContent',
    components: {
        CategorieSection,
        BookSection,
        InfoSection,
        RedirectSection,
        SubSection,
    },
});
</script>

<style scoped>
.content__header {
    height: 3em;
    background-color: var(--black);
}
</style>
