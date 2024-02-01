import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const DEFAULT_TITLE = 'Augusto Teixeira';
router.afterEach((to, from) => {
    if (to.meta.title != undefined){
        document.title = DEFAULT_TITLE + " | " + to.meta.title;
    } else {
        document.title = DEFAULT_TITLE;
    }
});