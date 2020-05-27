import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AboutPage from '../views/AboutPage.vue';
import CoronaPage from '../views/CoronaPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/',
    name: 'CoronaPage',
    component: CoronaPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
