import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const Crew = () => import('@/views/Crew');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/kadra',
    name: 'Crew',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Crew,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {x: 0, y: 0};
  },
});

export default router;
