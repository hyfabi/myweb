import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

import './assets/main.css'

const app = createApp(App)

app.use(router)
	.use(vuetify)


app.mount('#app')
