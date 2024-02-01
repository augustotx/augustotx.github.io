<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
    <section class="my-auto" id="setup">
        <div class="container mb-5">
            <h1 class="text-center mb-5">My PC Setups</h1>
            <div class="post-div mb-5" v-for="setup in setups" :key="setup.device">
                <h3><span v-html="setup.device"></span></h3>
                <p class="text-justify" v-if="setup.os"><strong>OS:</strong> <span v-html="setup.os"></span></p>
                <p class="text-justify" v-if="setup.cpu"><strong>CPU:</strong> <span v-html="setup.cpu"></span></p>
                <p class="text-justify" v-if="setup.gpu"><strong>GPU:</strong> <span v-html="setup.gpu"></span></p>
                <p class="text-justify" v-if="setup.ram"><strong>RAM:</strong> <span v-html="setup.ram"></span></p>
                <p class="text-justify" v-if="setup.storage"><strong>Storage:</strong> <span v-html="setup.storage"></span>
                </p>
                <p class="text-justify" v-if="setup.storage2"><strong>Storage 2:</strong> <span
                        v-html="setup.storage2"></span></p>
                <p class="text-justify" v-if="setup.vr"><strong>VR Setup:</strong> <span v-html="setup.vr"></span></p>
                <p class="text-justify" v-if="setup.peripherals"><strong>Peripherals:</strong> <span
                        v-html="setup.peripherals"></span></p>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
export default {
    data() {
        return {
            setups: []
        };
    },
    mounted() {
        this.loadSetup();
    },

    methods: {
        loadSetup() {
            fetch('/setup.txt')
                .then(response => response.text())
                .then(text => {
                    const setups = [];
                    const sections = text.split(';;');
                    sections.forEach(section => {
                        const lines = section.trim().split('\n');
                        const device = lines.shift();
                        const os = lines.shift();
                        const cpu = lines.shift();
                        const gpu = lines.shift();
                        const ram = lines.shift();
                        const storage = lines.shift();
                        const storage2 = lines.shift();
                        const vr = lines.shift();
                        const peripherals = lines.join('<br><br>');
                        setups.push({ device, os, cpu, gpu, ram, storage, storage2, vr, peripherals });
                    });
                    this.setups = setups.map(setup => ({
                        ...setup,
                        os: this.parseMarkdownLinks(setup.os),
                        cpu: this.parseMarkdownLinks(setup.cpu),
                        gpu: this.parseMarkdownLinks(setup.gpu),
                        ram: this.parseMarkdownLinks(setup.ram),
                        storage: this.parseMarkdownLinks(setup.storage),
                        storage2: this.parseMarkdownLinks(setup.storage2),
                        vr: this.parseMarkdownLinks(setup.vr),
                        peripherals: this.parseMarkdownLinks(setup.peripherals),
                    }));
                })
                .catch(error => {
                    console.error('Error loading setups:', error);
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
