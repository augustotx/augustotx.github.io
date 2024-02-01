<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

const calculateAgeInDays = (day, month, year) => {
  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  const timeDiff = currentDate.getTime() - birthDate.getTime();
  const ageInDays = Math.floor(timeDiff / millisecondsPerDay);

  return ageInDays;
}

const day = ref(8);
const month = ref(10);
const year = ref(2003);

const ageInDays = calculateAgeInDays(day.value, month.value, year.value);
const ageInYears = Math.floor(ageInDays / 365);
</script>

<template>
  <section class="my-auto" id="home">
    <h1 class="text-center mb-5 mt-3">Hello!</h1>
    <div class="container">
      <div id="main-text" class="row">
        <div id="main-icon" class="col-12 col-md-4 text-center">[/]</div>
        <div class="col-12 col-md-8 text-justify">
          <p>
            I'm Augusto Pereira Teixeira, a FOSS developer and a Linux enthusiast. I'm {{ ageInDays }} days ({{ ageInYears }} years) old.
            I'm also a student at FEI
            University in Brazil, currently studying Computer Science. Feel free to explore my website and check out my
            github profile.
          </p>
          <p>
            For work related information, you can check my CV <RouterLink to="/cv">here</RouterLink>. If you want to get
            in touch, you can find my contact info <RouterLink to="/contact">here</RouterLink>.
          </p>
          <p class="mauve">Thanks for visiting!</p>
        </div>
      </div>
      <div id="main-text" class="row">
        <div class="col-12 col-md-4 text-center symbols-font">
          <h1>
            <div class="row">
              <div class="col"><a class="arch-logo" href="https://archlinux.org/" target="_blank"></a></div>
              <div class="col"><a class="alpine-logo" href="https://www.alpinelinux.org/" target="_blank"></a></div>
              <div class="col"><a class="guix-logo" href="https://guix.gnu.org/" target="_blank"></a></div>
              <div class="col"><a class="gnu-logo" href="https://www.gnu.org/" target="_blank"></a></div>
            </div>
          </h1>
        </div>
        <div class="col-12 col-md-8">
          <p>
            My current open source projects are listed in the <RouterLink to="/projects">projects</RouterLink> page. If
            you want to see what I use to program, you can go to the <RouterLink to="/setup">setup</RouterLink> page.
          </p>
        </div>
      </div>

    </div>
  </section>

  <Footer />
</template>
