import { createApp } from 'vue'
import App from './App.vue'
import store from './script/vux'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'
import './assets/style.scss'

import '@popperjs/core'
import router from '@/script/router'

// import 'default-passive-events'

import VueApexCharts from "vue3-apexcharts"


const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(VueApexCharts)

app.mount('#app')

