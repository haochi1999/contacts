import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: {name: 'dashboard'},
			component: () => import('../views/Home.vue'),
			children: [
				{
					path: '/dashboard',
					name: 'dashboard',
					component: () => import('../views/Dashboard.vue'),
				},
				{
					path: '/contacts',
					name: 'contacts',
					component: () => import('../views/Contacts.vue'),
				},
				{
					path: '/person',
					name: 'person',
					component: () => import('../views/Person.vue'),
				},
				{
					path: '/information',
					name: 'information',
					component: () => import('../views/Information.vue'),
				},
			],
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login.vue')
		},
	]
})

router.beforeEach((to, from, next) => {
	const username = sessionStorage.getItem('username')
	if (username || to.name === 'login') {
		next()
	} else {
		router.push({name: 'login'})
	}
})

export default router
