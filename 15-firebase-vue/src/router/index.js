import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => 
      import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue'),
      meta: { protect: true }
  },
  {
    path: '/reg-project',
    name: 'Created',
    // route level code-splitting
    // this generates a separate chunk (reg-project.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "reg-project" */ '../views/Created.vue'),
      meta: { protect: true }
  },
  {
    path: '/edit-project/:id',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (edit-project.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "edit-project" */ '../views/Edit.vue'),
      meta: { protect: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.protect) {
    if (localStorage.getItem("user")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router
