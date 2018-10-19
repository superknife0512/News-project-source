import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hotNews',
      name: 'hotNews',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/hotNews')
    },
    {
      path: '/financialNews',
      name: 'financialNews',      
      component: () => import(/* webpackChunkName: "about" */ './views/financialNews')
    },
    {
      path: '/otherNews',
      name: 'otherNews',      
      component: () => import(/* webpackChunkName: "about" */ './views/otherNews')
    },
    
    {
      path: '/search-page',
      name: 'search page',      
      component: () => import(/* webpackChunkName: "about" */ './views/searchPage')
    },
    {
      path: '/:id',
      props:true,
      name: 'news detail',      
      component: () => import(/* webpackChunkName: "about" */ './views/newsDetail')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
})
