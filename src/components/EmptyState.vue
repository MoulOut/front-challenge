<template>
    <div class="loader"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EmptyState'
})
</script>

<style scoped>
.loader {
    margin: auto;
    border: 20px solid #EAF0F6;
    border-radius: 50%;
    border-top: 20px solid var(--blue);
    width: 150px;
    height: 150px;
    animation: spinner 3s linear infinite;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>