import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Like from '@/components/like/Like';
import Detail from '@/components/detail/Detail';
import ImgLazyLoad from '@/components/widget/ImgLazyLoad';

Vue.use(Router);
const routers = new Router({
  mode: 'history',
  routes: [
    // 案例一
    {
      path: '/',
      name: 'indx',
      component: Index
    },
    {
      path: '/like',
      name: 'like',
      component: Like,
      alias: '/reward',
      beforeEnter (to, from, next) {
        next();
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      alias: '/detailPage'
    },
    {
      path: '/ill',
      name: 'imglazyload',
      component: ImgLazyLoad
    }
  ]
});

export default routers;
