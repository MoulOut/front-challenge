<template>
    <li class="info-box">
        <slot name="img" />
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

.box-description {
    font-weight: 500;
}

</style>
