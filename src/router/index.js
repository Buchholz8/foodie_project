import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ClientPFP from '@/views/ClientPFP.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  component: LoginView
},
{
  path: '/',
  component: ClientPFP
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
