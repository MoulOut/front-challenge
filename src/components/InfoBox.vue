<template>
    <li class="info-box">
        <img :src="require(`@/assets/images/${infoBoxProps.imgName}.svg`)" alt="" class="box-image"
            :style="infoBoxProps.style" />
        <p class="box-description">{{ infoBoxProps.description }}</p>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InfoBox',
    props: {
        infoBoxProps: {
            type: Object, required: true
        }
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

.box-image {
    border-radius: 1em;
    padding: 0.5em;
    margin-bottom: 1em;
    width: 60px;
}
</style>
