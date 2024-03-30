<template>
    <section class="content__section">
        <div class="content__section__card">
            <img
                src="@/assets/images/Star 6.svg"
                alt=""
                class="section__card-star"
            />
            <h3 class="section__card-title">Subscribe to our Newsletter</h3>
            <div class="section__card-texts">
                <h2 class="section__card-text">
                    Stay in the know! Subscribe for updates-<br />zero spam, all
                    gems delivered to your inbox.
                </h2>
                <div class="card-form">
                    <input
                        type="email"
                        class="form-input"
                        id="sub-email"
                        placeholder="Enter your e-mail here"
                    />
                    <label for="sub-email"></label>
                    <a href="#" class="form-article"> Subscribe Now</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SubSection',
});
</script>

<style scoped>
.content__section {
    position: relative;
    padding: 2em 1em;
    background-color: var(--pink);
}

.content__section__card {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--background);
    padding: 1em 1.5em;
    border: 1px solid black;
    border-radius: 1em;
    z-index: 2;
    text-align: center;
}

.section__card-title {
    font-weight: 500;
    font-size: 24px;
}

.section__card-text {
    margin: 1em 0;
}

.section__card-star {
    width: 30px;
    position: absolute;
    top: -1em;
    left: -0.2em;
    transform: rotate(30deg);
}

.form-article {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    background-color: var(--yellow);
    color: black;
    padding: 0.5em 1em;
    border: 1px solid black;
    border-radius: 0.5em;
    box-shadow: 2px 2px;
    width: fit-content;
}

.form-article:hover {
    background-color: var(--light-blue);
}

.section__card-texts {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.card-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-input {
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    margin-bottom: 1em;
    width: 70%;
}
</style>
