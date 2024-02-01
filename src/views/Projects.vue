<script setup>
import Footer from '@/components/Footer.vue'
</script>

<template>
    <section class="my-auto" id="projects">
    <h1 class="text-center">FOSS Projects</h1>
    <div class="row">
        <div class="col-md">
            <div>
                <table class="fit-content mx-auto">
                    <tr v-for="project in projects" :key="project.title">
                        <td><span v-html="project.title"></span></td><td><a :href="project.link" target="_blank">Link</a></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </section>
    <Footer />
</template>

<style scoped>
    td {
        padding: 5px;
    }
</style>
<script>
export default {
    data() {
        return {
            projects: []
        };
    },
    mounted() {
        this.loadprojects();
    },
    methods: {
        loadprojects() {
            fetch('/projects.txt')
                .then(response => response.text())
                .then(text => {
                    const projects = [];
                    const sections = text.split(';;');
                    sections.forEach(section => {
                        const lines = section.trim().split('\n');
                        const title = lines.shift();
                        const link = lines.shift();
                        projects.push({ title, link });
                    });
                    this.projects = projects.map(project => ({
                        ...project,
                        title: this.parseMarkdownLinks(project.title),
                        link: this.parseMarkdownLinks(project.link)
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
        }
    }
};
</script>