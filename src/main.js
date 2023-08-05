import './assets/css/theme-pai.css'
import './assets/css/style.css'
import './assets/css/pacarina.css'
import './assets/css/dogcc.css'
import './assets/js/fa_f45fca298e.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
