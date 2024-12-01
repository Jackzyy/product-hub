import { createApp } from 'vue'
import App from './App.vue'

import Iconify from '@/plugins/iconify'

import 'normalize.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(Iconify)

app.mount('#app')
