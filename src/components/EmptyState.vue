<template>
    <div class="empty-state">
        <div class="loader"></div>
        <p class="empty-text">{{ text }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EmptyState',
    props: {
        text: {
            type: String, required: true
        }
    }
})
</script>

<style scoped>
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
}

.loader {
    margin: auto;
    border: 20px solid #EAF0F6;
    border-radius: 50%;
    border-top: 20px solid var(--blue);
    width: 150px;
    height: 150px;
    animation: spinner 3s linear infinite;
}

.empty-text {
    margin-top: 0.5em;
    color: var(--blue);
    font-weight: 500;
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