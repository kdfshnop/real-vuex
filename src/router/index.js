import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import second from "@/components/second";
import module from "@/components/module";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },{
      path:'/second',
      name:'second',
      component:second
    },{
      path:'/module',
      name:'module',
      component:module
    }
  ]
})
