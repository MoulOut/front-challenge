<template>
    <div class="footer__header"></div>
    <footer class="footer">
        <section class="footer__section">
            <div class="footer__texts">
                <p class="footer-text">
                    Sign Up to our Online BookStore & receive 15% off to your
                    first order
                </p>
                <img src="" alt="" />
                <a href="#" class="footer-article"
                    ><img
                        src="@/assets/images/Star 8.svg"
                        alt="estrela"
                        class="article-star-top"
                    />
                    <img
                        src="@/assets/images/Star 8.svg"
                        alt="estrela"
                        class="article-star-bottom"
                    />
                    Sign in now to get the blast Offer</a
                >
            </div>
            <ul class="footer-links">
                <li class="links-title">Quick Link</li>
                <li class="links-text">About Us</li>
                <li class="links-text">Products</li>
                <li class="links-text">Contact Us</li>
            </ul>
            <ul class="footer-links">
                <li class="links-title">Customer</li>
                <li class="links-text">My Cart</li>
                <li class="links-text">Orders</li>
                <li class="links-text">Tracking List</li>
                <li class="links-text">FAQ</li>
            </ul>
            <ul class="footer-links">
                <li class="links-title">Get in touch</li>
                <li class="links-text">bookstore@email.com</li>
                <li class="links-text">orders@bookstore.com</li>
                <li class="links-text">*12 345678912</li>
            </ul>
        </section>
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

.footer__texts {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 80%;
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

.links-title {
    margin: 0.5em 0;
}

.social {
    display: flex;
    justify-content: space-around;
    margin: 1em 0 0;
}

.links-text {
    display: none;
}

@media screen and (min-width: 768px) {
    .footer {
        text-align: left;
    }

    .footer__section {
        display: flex;
        justify-content: space-around;
    }

    .footer__texts {
        display: flex;
        align-items: start;
        flex-direction: column;
        width: 40%;
        justify-content: space-between;
    }

    .footer-text {
        font-size: 20px;
    }

    .footer-article {
        font-size: 12px;
        margin-bottom: 3em;
        width: 70%;
    }

    .footer-links {
        align-items: start;
    }

    .links-title {
        font-size: 20px;
        margin: 0 0 1em;
    }

    .links-text {
        margin: 1em 0;
        display: block;
        font-size: 12px;
    }

    .social {
        width: 50%;
    }

    .social-links {
        font-size: 12px;
    }
}
</style>
