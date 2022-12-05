import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/julianka',
			name: 'julianka',
			component: () => import('../views/JuliView.vue')
		},
		{
			path: '/w/:id(\\d+)*',
			name: 'Weisheiten',
			meta: { transition: 'slide-left' },
			component: () => import('../views/WView.vue')
		}
	]
})

export default router
