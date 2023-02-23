import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const routes : RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/voo',
    component: () => import('../views/JuliView.vue')
  },
  {
    path: '/w',
    children: [
      {
        path: '',
        alias: 'funny',
        component: () => import('../views/WView.vue'),
        props: {
          type: "FUNNY"
        },
      },
      {
        path: 'actual',
        name: 'w',
        component: () => import('../views/WView.vue'),
        props: {
          type: "REAL"
        }
      }
    ]
  },
  {
    path: '/v/:id(\\d+)*',
    component: () => import('../views/VirtualView.vue')
  },
  {
    path:'/tanja',
    component: () => import('../views/TanjaView.vue')
  },
  {
    path:'/me',
    component: () => import('../views/MeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
