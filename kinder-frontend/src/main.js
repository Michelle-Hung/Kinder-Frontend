import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
