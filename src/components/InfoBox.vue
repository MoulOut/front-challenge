<template>
    <li class="info-box">
        <img src="" alt="" class="box-image" />
        <p class="box-description">{{ description }}</p>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InfoBox',
    props: {
        description: {
            type: String,
        },
        color: {
            type: String,
        },
    },
});
</script>

<style scoped>
.info-box {
    text-align: center;
}

p{
    font-weight: 500;
}

.box-image {
    border: 4px ridge v-bind(color);
    border-radius: 0.5em;
    padding: 2em;
    margin-bottom: 1em;
}
</style>
