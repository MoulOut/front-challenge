<template>
    <div class="notificacoes">
        <article class="message" v-for="notificacao in notificacoes" :key="notificacao.id">
            <div class="message-header">{{ notificacao.title }}</div>
            <div class="message-body">
                {{ notificacao.text }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Notifications',

    setup() {
        const store = useStore();
        return {
            notificacoes: computed(() => store.state.notifications),
        };
    },
});
</script>

<style scoped>
.notificacoes {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
    width: 300px;
    z-index: 10;
}

.message {
    background-color: var(--pink);
    border-radius: 0.5em;
    box-shadow: 2px 2px black;
    margin-top: 0.5em;
    color: var(--black);
}

.message-header {
    font-size: 20px;
    padding: 0.5em;
    font-weight: 500;
    border-bottom: 1px solid var(--black)
}

.message-body {
    padding: 1em;
}
</style>