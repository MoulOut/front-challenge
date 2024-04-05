<template>
    <header class="header">
        <div class="header__content">
            <div class="header__content__logo-title">
                <RouterLink to="/">
                    <img src="@/assets/images/Logo.svg" alt="logo" class="header__logo" />
                </RouterLink>
                <p class="header__title">
                    <b class="header__title-bold">Moul</b>Books
                </p>
                <nav class="header__links">
                    <RouterLink class="links" to="/">Home</RouterLink>
                    <RouterLink class="links" to="/bookstore">BookStore</RouterLink>
                    <RouterLink class="links" to="/about">About Us</RouterLink>
                </nav>
            </div>
            <div class="header__buttons">
                <a href="#" class="header__signin">Sign In now</a>
                <a href="#" class="header__login">Log in</a>
                <img src="@/assets/images/menu-hamburguer.png" alt="menu" class="hamburguer" @click="activateMenu()" />
            </div>
            <nav class="menu" :class="{ disabled: !menuActive }" @click="activateMenu">
                <RouterLink class="menu-links" to="/">Home</RouterLink>
                <RouterLink class="menu-links" to="/bookstore">Bookstore</RouterLink>
                <RouterLink class="menu-links" to="/about">About Us</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageHeader',
    data() {
        return {
            menuActive: false,
        };
    },
    methods: {
        activateMenu() {
            return (this.menuActive = !this.menuActive);
        },
    },
});
</script>

<style scoped>
.header {
    background-color: var(--light-blue);
    position: relative;
    z-index: 10;
}

.header__logo {
    width: 60px;
}

.header__content__logo-title,
.header__buttons {
    display: flex;
    align-items: center;
}

.header__title,
.header__links {
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

.header__signin,
.header__login {
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    margin: 0 1em;
    border: 1px solid var(--black);
    color: var(--white);
}

.header__signin {
    background-color: var(--black);
}

.header__signin:hover {
    background-color: var(--yellow);
    color: black;
}

.header__login {
    color: var(--black);
    display: none;
}

.header__login:hover {
    background-color: var(--light-blue);
}

.hamburguer {
    width: 24px;
}

.links {
    text-decoration: none;
    color: var(--black);
    margin: 0 1em;
}

.links.router-link-active {
    color: black;
    font-weight: 500;
    border-bottom: 2px solid var(--blue);
}

.menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 60vw;
    top: 0;
    right: 0;
    background-color: var(--black);
    height: 100vh;
}

.menu-links {
    margin-top: 0.5em;
    padding: 0.5em 1em;
    text-decoration: none;
    color: var(--white);
    opacity: 1;
}

.menu-links.router-link-active {
    color: black;
    font-weight: 500;
    border-bottom: 3px solid var(--blue);
    background-color: var(--background);
}

.disabled {
    display: none;
}

@media screen and (min-width: 768px) {
    .header {
        background-color: var(--background);
    }

    .header__login {
        display: block;
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

    .menu {
        display: none;
    }
}
</style>
