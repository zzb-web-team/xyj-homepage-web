import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '@/pages/login/index'
// import param from '@/pages/login/param'
// import parameter from '@/pages/login/parameter'
// import income from '@/pages/login/income'
// import problem from '@/pages/login/problem'
// import loginactive from '@/pages/login/loginactive'
// import myincome from '@/pages/login/myincome'
// import management from '@/pages/login/management'
// import queryinfo from '@/pages/login/queryinfo'
// import userinfo from '@/pages/login/userinfo'
// import protocol from '@/pages/login/protocol'
// import privacy from '@/pages/login/privacy'
// import buying from '@/pages/login/buying'
// import promotion from '@/pages/login/promotion'




//  import login from '@/pages/login/login'


Vue.use(VueRouter)
  const routes= [
    {
      path: '/',
      name: 'index',
     //component: index
      component: resolve => require(['../pages/login/index'],resolve)
    },
 
    {
      path:'/param',
      name:'param',
      //component: param


      component: resolve => require(['../pages/login/param'],resolve)

  },

    {
      path:'/parameter',
      name:'parameter',
      //component: parameter


     component: resolve => require(['../pages/login/parameter'],resolve)

  },
  //   {
  //     path:'/income',
  //     name:'income',
  //     //component: income


  //    component: resolve => require(['../pages/login/income'],resolve)

  // }, 
  {
    path:'/myincome',
    name:'myincome',
    //component: myincome

   
    component: resolve => require(['../pages/login/myincome'],resolve)

  },
  {
    path:"/queryinfo",
    name:'queryinfo',
    //component: queryinfo


   component: resolve => require(['../pages/login/queryinfo'],resolve)

  },
  {
    path:'/userinfo',
    name:'userinfo',
    //component: userinfo

 
   component: resolve => require(['../pages/login/userinfo'],resolve)

  },
  {
    path:'/management',
    name:'management',
    //component: management

 
   component: resolve => require(['../pages/login/management'],resolve)

  },
    {
      path:'/problem',
      name:'problem',
      //component: problem


     component: resolve => require(['../pages/login/problem'],resolve)

    },
    {
      path:"/loginactive",
      name:"loginactive",
    // component: loginactive

  
     component: resolve => require(['../pages/login/loginactive'],resolve)

    },
    {
      path:"/protocol",
      name:'protocol',
      //component: protocol


      component: resolve => require(['../pages/login/protocol'],resolve)

    },
    {
      path:"/privacy",
      name:'privacy',
      //component: privacy


    component: resolve => require(['../pages/login/privacy'],resolve)


    },
    {
      path:"/buying",
      name:'buying',
     // component: buying

      component: resolve => require(['../pages/login/buying'],resolve)

    },
    {
      path:"/promotion",
      name:"promotion",
     // component: promotion


      component: resolve => require(['../pages/login/promotion'],resolve)

    }
 
  

    
  ]
  
const router = new VueRouter({
  routes: routes
})




 
export default router;
