import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Index,
    children: []
  },
  {
    path: '/myWork',
    name: '我的作品',
    component: (resolve) => require(['@/pages/work.vue'], resolve)
  }
]
const router = new VueRouter({
  routes
})

export default router
