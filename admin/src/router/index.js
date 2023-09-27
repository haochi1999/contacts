import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login.vue')
		},
	]
})

router.beforeEach((to, from, next) => {
	console.log(to)
	const username = sessionStorage.getItem('username')
	if (username || to.name === 'login') {
		next()
	} else {
		router.push({name: 'login'})
	}
})

export default router
