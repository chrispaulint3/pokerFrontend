import { createWebHistory, createRouter } from "vue-router"
import Home from '@/views/Home.vue'
import Task from '@/views/Task.vue'
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Logout from "@/views/Logout.vue"
import Help from "@/views/TaskHelp.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/task', component: Task },
  { path: '/loginP', component: Login },
  { path: '/register', component: Register },
  { path: '/logout', component: Logout },
  { path: '/help', component: Help }
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router