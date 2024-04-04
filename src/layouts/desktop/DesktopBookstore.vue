<template>
    <PageContent></PageContent>
    <SubSection />
</template>

<script lang="ts">
import PageContent from '@/components/PageContent.vue';
import SubSection from '@/components/SubSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DesktopBookstore',
    components: { PageContent, SubSection },
});
</script>
