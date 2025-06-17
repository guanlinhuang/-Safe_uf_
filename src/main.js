import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/all.scss'

// 載入 bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css' // npm install bootstrap@5.3.3 --legacy-peer-dep

createApp(App).use(router).mount('#app')
