import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import './assets/style.scss'
import '@popperjs/core'
import { createWebHistory, createRouter } from "vue-router"

import Home from '@/views/Home.vue'
import Task from '@/views/Task.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/task', component: Task },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')

