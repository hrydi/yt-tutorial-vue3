import { createRouter, createWebHistory, useRouter, onBeforeRouteUpdate } from 'vue-router';

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
    
//   ]
// })


router.beforeEach(function(to, from) {
  console.log("Router: ", router);
})

export default {
  setup() {
    const router = useRouter()
    
    router.push({
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/product',
          name: 'product',
          component: () => import('@/views/Product.vue'),
        },
        {
          path: '/:catchAll(.*)',
          name: 'page-not-found',
          component: () => import('@/views/PageNotFound.vue'),
        },
      ]
    })
    onBeforeRouteUpdate((to, from) => {

    })
  }
}
