import { createApp } from 'vue'
import App from './App.vue'

import { MotionPlugin } from '@vueuse/motion'

import "./assets/style.css"

import router from './router'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)

app.mount('#app')