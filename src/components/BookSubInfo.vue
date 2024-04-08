<template>
    <h2 class="book-report">Report an issue with this product</h2>
    <ul class="book-info">
        <li class="info-list">
            <p class="info-title">Reading Age</p>
            <div class="img-box">
                <img src="@/assets/images/Reader.svg" alt="" class="info-image">
                <p class="box-text">+18 yrs</p>
            </div>
        </li>
        <li class="info-list">
            <p class="info-title">Print Lenght</p>
            <div class="img-box">
                <img src="@/assets/images/pages.svg" alt="" class="info-image">
                <p class="box-text">320 pages</p>
            </div>
        </li>
        <li class="info-list">
            <p class="info-title">Language</p>
            <div class="img-box">
                <img src="@/assets/images/world.svg" alt="" class="info-image">
                <p class="box-text">English</p>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name:'BookSubInfo'
})
</script>

<style scoped>
.book-report,
.info-list,
.info-title,
.img-box {
    margin-bottom: 0.5em;
}

.book-report {
    margin-top: 1em;
    font-weight: 500;
}

.book-info {
    display: flex;
    align-items: center;
}

.info-list {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-title {
    font-size: 14px;
    font-weight: 500;
}

.img-box {
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 1em;
    text-align: center;
    font-size: 12px;
    width: 60%;
}
</style>