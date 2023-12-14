import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import {createHead} from "@unhead/vue";
import './assets/main.css'

const app = createApp(App)

app.use(router)
	.use(vuetify)
	.use(createHead)


app.mount('#app')
