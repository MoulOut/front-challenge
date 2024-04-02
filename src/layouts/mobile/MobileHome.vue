<template>
    <PageContent>
        <template v-slot:content__inner>
            <MobileHero />
            <div class="content__header"></div>
            <CategorieSection />
            <BookSection />
            <InfoSection />
            <RedirectSection />
            <SubSection />
        </template>
    </PageContent>
</template>

<script>
// @ is an alias to /src
import PageContent from '@/components/PageContent.vue';
import MobileHero from '@/components/MobileHero.vue';
import CategorieSection from '@/components/CategorieSection.vue';
import BookSection from '@/components/BookSection.vue';
import InfoSection from '@/components/InfoSection.vue';
import RedirectSection from '@/components/RedirectSection.vue';
import SubSection from '@/components/SubSection.vue';

export default {
    name: 'MobileLayout',
    components: {
        MobileHero,
        PageContent,
        CategorieSection,
        BookSection,
        InfoSection,
        RedirectSection,
        SubSection,
    },
};
</script>

<style scoped>
.content__header {
    height: 3em;
    background-color: var(--black);
}
</style>
