import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ClientHome from '@/views/ClientHome.vue'
import RestaurantHome from '@/views/RestaurantHome'
import ClientOrderPage from '@/views/ClientOrderPage'
Vue.use(VueRouter)

const routes = [
{
  path: '/',
  component: LoginView
},
{
  path: '/ClientH',
  component: ClientHome
},
{
  path: '/RestH',
  component: RestaurantHome
},
{
  path: '/ClientO' , 
  component: ClientOrderPage
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
