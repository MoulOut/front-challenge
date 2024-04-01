<template>
    <header class="header">
        <div class="header__content">
            <div class="header__content__logo-title">
                <img
                    src="@/assets/images/Logo.png"
                    alt="logo"
                    class="header__logo"
                />
                <p class="header__title">
                    <b class="header__title-bold">Moul</b>Books
                </p>
                <nav class="header__links">
                    <RouterLink class="links" to="/">Home</RouterLink>
                    <RouterLink class="links" to="/bookstore"
                        >BookStore</RouterLink
                    >
                    <RouterLink class="links" to="/about">About Us</RouterLink>
                </nav>
            </div>
            <div class="header__buttons">
                <a href="#" class="header__signin">Sign In now</a>
                <a href="#" class="header__login">Log in</a>
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
    position: relative;
    z-index: 10;
}

.header__logo {
    width: 50px;
}

.header__content__logo-title {
    display: flex;
    align-items: center;
}

.header__title {
    display: none;
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

.header__signin {
    text-decoration: none;
    color: var(--white);
    padding: 0.5em 1em;
    background-color: var(--black);
    border: 1px solid var(--black);
    border-radius: 0.5em;
    margin: 0 1em;
}

.header__signin:hover {
    background-color: var(--yellow);
    color: black;
}

.header__login {
    text-decoration: none;
    color: var(--black);
    border: 1px solid var(--black);
    padding: 0.5em 1em;
    border-radius: 0.5em;
    margin: 0 1em;
}

.header__login:hover {
    background-color: var(--light-blue);
    color: black;
}

.hamburguer {
    width: 24px;
}

.header__links {
    display: none;
}
.links {
    text-decoration: none;
    color: var(--black);
    margin: 0 1em;
}

.links:active {
    color: black;
    font-weight: 500;
    border-bottom: 2px solid var(--blue);
}

@media screen and (min-width: 768px) {
    .header {
        background-color: var(--background);
    }

    .header__title {
        display: block;
    }

    .header__content {
        padding: 1em 4em;
    }

    .header__links {
        display: flex;
    }

    .hamburguer {
        display: none;
    }
}
</style>
