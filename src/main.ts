import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import '@thecss/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { useElementIcons } from '@src/common/utils/icon.util'
import { router } from '@src/common/router/router'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
useElementIcons(app)
app.use(router)
app.mount('#app')
