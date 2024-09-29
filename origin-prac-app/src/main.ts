import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseComponent from './components/BaseComponent.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('BaseComponent', BaseComponent)

app.mount('#app')
