import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const routes : RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/rizz',
    component: () => import('../views/RizzView.vue')

  },
  {
    path: '/test',
    children:[
      {
        path: 'background',
        alias: 'test-background1',
        component: () => import('../views/testViews/BackGroundTestView.vue'),

      }
    ]
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
        path: '/actual',
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
    path: '/p',
    children: [
      {
        path:'tanja',
        component: () => import('../views/persons/TanjaView.vue')
      },
      {
        path:'nina',
        component: () => import('../views/persons/NinaView.vue')
      },
    ]
  },
  {
    path:'/me',
    component: () => import('../views/persons/MeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
