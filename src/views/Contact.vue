<script setup>
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue';
</script>

<template>
    <section id="contact" class="m-auto">
        <div class="container text-center">
            <h1>Contact Me</h1>
            <div class="row">
                <div class="col text-justify">
                    Feel free to contact me through any of the following methods. You can also <a target="_blank"
                        href="mailto:augusto.teixeira03@proton.me">email</a> me, but I prefer <a
                        href="https://matrix.to/#/@augustotx:matrix.org" target="_blank">Matrix</a> as it's my main instant
                    messaging method.
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a target="_blank" href="https://matrix.to/#/@augustotx:matrix.org">
                        <img id="matrix-icon" src="/matrix-dark.svg">
                    </a>
                </div>
                <div class="col">
                    <a target="_blank" href="https://mastodon.social/@augustotx" class="contact-icon blue symbols-font">
                        󰫑
                    </a>
                </div>
                <div class="col">
                    <a target="_blank" href="https://github.com/augustotx" class="contact-icon white symbols-font">
                        
                    </a>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>
a:hover {
    text-decoration: none;
}
</style>
<script>
export default {
    methods: {
        setIcons() {
            const link = document.getElementById('matrix-icon');
            if (window.matchMedia && (window.matchMedia('(prefers-color-scheme: dark)').matches || window.matchMedia('(prefers-color-scheme: no-preference)').matches)) {
                link.src = '/matrix-dark.svg';
            } else {
                link.src = '/matrix.svg';
            }
        }
    },
    mounted() {
        this.setIcons();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.setIcons);
    }
};
</script>