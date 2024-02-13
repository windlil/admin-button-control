import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import { AuthDirective } from './directive/auth'

const app = createApp(App)
app.use(pinia)
app.directive('auth', AuthDirective)

app.mount('#app')