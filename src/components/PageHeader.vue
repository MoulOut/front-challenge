<template>
    <header class="header">
        <div class="header__content">
            <div class="header__content__logo-title">
                <img
                    src="@/assets/images/vecteezy_book-read-library-study-line-icon-vector-illustration_4853320.svg"
                    alt="logo"
                    class="header__logo"
                />
                <p class="header__title">
                    <b class="header__title-bold">Moul</b>Books
                </p>
            </div>
            <div class="header__buttons">
                <a href="#" class="header__button">Sign In now</a>
                <img
                    src="@/assets/images/menu-hamburguer.png"
                    alt="menu"
                    class="hamburguer"
                />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageHeader',
});
</script>

<style scoped>
.header {
    background-color: var(--light-blue);
}

.header__logo {
    width: 24px;
}

.header__content__logo-title {
    display: flex;
    align-items: center;
}

.header__title-bold {
    margin-left: 0.5em;
    font-weight: 700;
}

.header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
}

.header__buttons {
    display: flex;
    align-items: center;
}

.header__button {
    text-decoration: none;
    color: var(--white);
    padding: 0.5em;
    background-color: var(--black);
    border-radius: 0.5em;
    margin-right: 1em;
}

.hamburguer {
    width: 24px;
}
</style>
