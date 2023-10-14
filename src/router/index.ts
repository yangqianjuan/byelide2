import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: import('../views/DataSource.vue'),
          children: [
            {
              path: ':id',
              component: import('../views/DataSourceContent/DataSourceContent.vue')
            },
            {
              path: '',
              redirect: 'dataSource/1'
            }
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          component: import('../views/layout.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/app/layout'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
