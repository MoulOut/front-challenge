<template>
    <main class="content">
        <slot name="content__inner"></slot>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageContent',
});
</script>
