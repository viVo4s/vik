import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import Home from './pages/Home.vue'
import Signup from "./pages/Signup.vue"
import Login from './pages/Login.vue'
import User from './pages/User.vue'
import book from './pages/book.vue'
const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path: '/signup', name:'Signup', component: Signup },
  {path: '/login', name:'Login',component: Login},
  {path: '/User', name:'User',component: User},
  {path: '/book', name:'book',component: book}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
