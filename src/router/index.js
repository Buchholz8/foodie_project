import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ClientHome from '@/views/ClientHome.vue'
import RestaurantHome from '@/views/RestaurantHome'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  component: LoginView
},
{
  path: '/',
  component: ClientHome
},
{
  path: '/',
  component: RestaurantHome
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
