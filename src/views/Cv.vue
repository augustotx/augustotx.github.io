<script setup>
import Footer from '@/components/Footer.vue'
</script>

<template>
    <section class="my-auto" id="cv">
        <div class="container">
            <div class="row">
                <h1>Curriculum Vitae</h1>
                <p class="text-justify">If you need any exact info, <RouterLink to="/contact">contact me</RouterLink>. Info here is vague for privacy reasons.</p>
                <div class="col-md">
                    <h2>Education</h2>
                    <div>
                        <ul>
                            <li>2019-2021: Took high school with IT technical course</li>
                            <li>2023-2027 (ongoing): Computer Science course in university.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <h2>Experience</h2>
                    <div>
                        <ul>
                            <li>2023: Made a website for a US company.
                            </li>
                            <li>Dec 2023-Feb 2024: Worked as general IT assistant for same US company while on trip to the US</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <h2>Skills</h2>
                    <div>
                        <ul>
                            <li>Web Development (full stack) - <t class="green">Advanced</t>
                            </li>
                            <li>C, C++ - <t class="green">Intermediate</t>
                            </li>
                            <li>Python - <t class="green">Intermediate</t>
                            </li>
                            <li>Java - <t class="yellow">Rusty</t>
                            </li>
                            <li>Ruby (Rails) - <t class="yellow">Learning</t>
                            </li>
                            <li>SQL - <t class="green">Intermediate</t>
                            </li>
                            <li>Git - <t class="green">Advanced</t>
                            </li>
                            <li>Linux (Server and Desktop) - <t class="green">Advanced</t>
                            </li>
                            <li>Windows (Desktop) - <t class="green">Advanced</t>
                            </li>
                        </ul>
                        <p class="text-justify">I can learn programming languages/other skills if needed.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <h2>Languages</h2>
                    <div>
                        <ul>
                            <li>Portuguese - <t class="green">Native</t>
                            </li>
                            <li>English - <t class="green">Advanced</t>
                            </li>
                            <li>Spanish - <t class="green">Intermediate</t>
                            </li>
                        </ul>
                        <p class="text-justify">I want to learn more when I have the time/need to do so.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>