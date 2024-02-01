<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
    <section class="my-auto" id="opinions">
        <div class="container">
            <h1 class="text-center mb-5">Blog</h1>
            <div class="post-div" v-for="opinion in opinions" :key="opinion.title">
                <h3><span v-html="opinion.title"></span></h3>
                <p><span v-html="opinion.date"></span></p>
                <div class="col-md text-justify">
                    <p v-html="opinion.text"></p>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
export default {
    data() {
        return {
            opinions: []
        };
    },
    mounted() {
        this.loadOpinions();
    },
    methods: {
        loadOpinions() {
            fetch('/opinions.txt')
                .then(response => response.text())
                .then(text => {
                    const opinions = [];
                    const sections = text.split(';;');
                    sections.forEach(section => {
                        const lines = section.trim().split('\n');
                        const title = lines.shift();
                        const date = lines.shift();
                        const text = lines.join('<br><br>');
                        opinions.push({ title, date, text });
                    });
                    this.opinions = opinions.map(opinion => ({
                        ...opinion,
                        title: this.parseMarkdownLinks(opinion.title),
                        date: this.parseDate(opinion.date),
                        text: this.parseMarkdownLinks(opinion.text)
                    }));
                })
                .catch(error => {
                    console.error('Error loading blog posts:', error);
                });
        },
        parseMarkdownLinks(text) {
            if (text === undefined) {
                return '';
            } else {
                const regex = /\[(.*?)\]\((.*?)\)/g;
                return text.replace(regex, '<a target="_blank" href="$2">$1</a>');
            }
        },
        parseDate(dateString) {
            const [date, time] = dateString.split(' - ');
            var timedef = true;
            if (time === undefined) {
                timedef = false;
            }
            if (date === this.getCurrentDate()) {
                if (timedef) {
                    return `Today at ${time}`;
                }
                return `Today`;
            }
            if (date === this.getCurrentDate(-1)) {
                if (timedef) {
                    return `Yesterday at ${time}`;
                }
                return `Yesterday`;
            }
            if (timedef) {
                return `${date} at ${time}`;
            } else {
                return `${date}`;
            }
        },
        getCurrentDate(offset = 0) {
            const today = new Date();
            today.setDate(today.getDate() + offset);
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            return `${day}/${month}/${year}`;
        }
    }
};
</script>
