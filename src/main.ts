import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueJsTour from '@globalhive/vuejs-tour'
import '@globalhive/vuejs-tour/src/style/style.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueJsTour)
app.use(createPinia())
app.use(router)

app.mount('#app')
