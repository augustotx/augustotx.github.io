import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import ProjectsView from '../views/Projects.vue'
import OpinionsView from '../views/Opinions.vue'
import SetupView from '../views/Setup.vue'
import CV from '../views/Cv.vue'
import Contact from '../views/Contact.vue'
import NotFoundView from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'About' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { title: 'Not Found' }
    },
    {
      path: '/opinions',
      name: 'opinions',
      component: OpinionsView,
      meta: { title: 'Blog' }
    },
    {
      path: '/setup',
      name: 'setup',
      component: SetupView,
      meta: { title: 'Setup' }
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV,
      meta: { title: 'CV' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'Contact' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { title: 'Projects' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
