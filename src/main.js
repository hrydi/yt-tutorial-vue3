import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import swal from "./plugins/swal";
import http from "./plugins/http";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(swal)
app.use(http, {
  headers: {
    'Content-Type': 'application/json',
    'X-API-ID': '1234-asj324-sdfj-23jndsfgdkgj'
  }
})

app.mount('#app')
