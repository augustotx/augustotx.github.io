<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="navbar">
    <div id="navrow" class="row text-center">
      <div class="col-md">
        <RouterLink to="/" onclick="toggleNavbar();">Home</RouterLink>
      </div>
      <div class="col-md">
        <RouterLink to="/projects" onclick="toggleNavbar();">Projects</RouterLink>
      </div>
      <div class="col-md">
        <RouterLink to="/about" onclick="toggleNavbar();">About</RouterLink>
      </div>
      <div class="col-md">
        <RouterLink to="/cv" onclick="toggleNavbar();">CV</RouterLink>
      </div>
      <div class="col-md">
        <RouterLink to="/contact" onclick="toggleNavbar();">Contact</RouterLink>
      </div>
      <div class="dropdown col-md">
        <button class="btn-hidden dropdown-toggle link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Other
        </button>
        <ul class="dropdown-menu text-center animate slideIn" aria-labelledby="navbarDropdown" >
          <li><RouterLink class="dropdown-item" to="/setup" onclick="toggleNavbar();">My PC Setup</RouterLink></li>
          <li><RouterLink class="dropdown-item" to="/opinions" onclick="toggleNavbar();">Blog</RouterLink></li>
        </ul>
      </div>
      <div class="d-block d-md-none col-md">
        <a id="navbar-toggle" class="link" onclick="toggleNavbar();">Menu</a>
      </div>
    </div>
  </div>
  <div class="mb-5 pb-2"></div>
  <RouterView />
</template>

<style scoped>
.dropdown-toggle {
  background-color: rgba(0,0,0,0);
  border: none;
}
.dropdown-menu,
.dropdown-item {
  background-color: var(--surface0);
  color: var(--blue);
  border-radius: 24px;
}

@keyframes slideIn {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }

  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}

@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: transform;
    -webkit-opacity: 0;
  }

  100% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 1;
  }

  0% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 0;
  }
}

.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}

.animate {
  animation-duration: 0.3s;
  -webkit-animation-duration: 0.3s;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
}

.dropdown-menu {
  border: none;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

@media (max-width: 768px) {
  .dropdown-menu {
    left: 0;
    width: 100vw;
    box-shadow: none;
    line-height: 2em;
  }
}
</style>