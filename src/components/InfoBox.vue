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
    display: row;
    flex-wrap: wrap;
    text-align: center;
}

.box-image {
    border: 3px double v-bind(color);
    border-radius: 0.5em;
    padding: 2em;
    margin-bottom: 1em;
}
</style>
