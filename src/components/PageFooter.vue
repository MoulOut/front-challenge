<template>
    <div class="footer__header"></div>
    <footer class="footer">
        <p class="footer-text">
            Sign Up to our Online BookStore & receive 15% off to your first
            order
        </p>
        <img src="" alt="" />
        <a href="#" class="footer-article"
            ><img
                src="@/assets/images/Star 8.svg"
                alt="estrtela"
                class="article-star-top"
            />
            ><img
                src="@/assets/images/Star 8.svg"
                alt="estrtela"
                class="article-star-bottom"
            />Sign in now to get the blast Offer</a
        >
        <ul class="footer-links">
            Quick Links
        </ul>
        <ul class="footer-links">
            Customer Service
        </ul>
        <ul class="footer-links">
            Get in touch
        </ul>
        <ul class="social">
            <li class="social-links">Terms</li>
            <li class="social-links">Privacy</li>
            <li class="social-links">Google</li>
            <li class="social-links">Facebook</li>
            <li class="social-links">Linkedin</li>
        </ul>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageFooter',
});
</script>

<style scoped>
.footer__header {
    height: 3em;
    background-color: var(--black);
}

.footer {
    padding: 2em 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.footer-article {
    position: relative;
    padding: 0.5em 1em;
    border: 1px solid black;
    border-radius: 2em;
    background-color: var(--white);
    text-decoration: none;
    color: black;
    margin: 1em 0;
}

.article-star-top {
    position: absolute;
    width: 24px;
    left: -6px;
    top: -12px;
}

.article-star-bottom {
    position: absolute;
    width: 24px;
    right: -6px;
    bottom: -12px;
}

.footer-links {
    margin: 0.5em 0;
}

.social {
    display: flex;
    justify-content: space-around;
    margin: 1em 0 0;
}
</style>
