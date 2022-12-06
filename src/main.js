import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/assets/style/main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue'
import * as Antdi from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log('Not Auth')
    }
  },
)

app.use(Antd)
app.use(i18n)
app.use(Antdi)
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount('#app')
