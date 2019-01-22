import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Login from '@/components/Login';
import Register from '@/components/Regist';
import Index from '@/components/Index';
import Success from '@/components/Success';
import Child from '../components/child/Child';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/child/child',
      name: 'child',
      component: Child
    }
  ]
});
