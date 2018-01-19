import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import lunbo from '@/components/lunbo'
import zhuce from '@/components/zhuce'
import denglu from '@/components/denglu'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  	{
        path: '/',
        redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home,
      children:[
      	{
      		path:'lunbo',
      		component:lunbo
      	},
        {
          path:'zhuce',
          component:zhuce
        },
        {
          path:'denglu',
          component:denglu
        }
      ]
    }
  ]
})
