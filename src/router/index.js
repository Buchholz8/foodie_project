import Vue from 'vue'
import VueRouter from 'vue-router'
import TestingPage from '@/views/TestingPage.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  views: TestingPage
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
