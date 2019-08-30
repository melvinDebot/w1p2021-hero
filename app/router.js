import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Singer from './components/singer.vue';
import Concert from './components/concert.vue';
import Info from './components/info.vue';



Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
    },
    {
      path: '/concert',
      name: 'concert',
      component: Concert,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
