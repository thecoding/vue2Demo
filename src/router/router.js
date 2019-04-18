import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter(
  {
    routes: [{
      path: '/pages',
      component: resolve => require(['../pages/pageHome.vue'], resolve),
      children: [
        {
          path: 'child',
          component: resolve => require(['../pages/page1.vue'], resolve)
        }
      ]
    },
    {
      path: '/pages/list/linkPage',
      component: resolve => require(['../pages/list/linkPage.vue'],resolve)
    },
    {
      path: '/pages/list/v-if',
      component: resolve => require(['../pages/list/vif.vue'],resolve)
    },
    {
      path: '/pages/list/onCreate',
      component: resolve => require(['../pages/list/onCreate.vue'],resolve)
    },
    {
      path: '/pages/list/vfor',
      component: resolve => require(['../pages/list/vfor.vue'],resolve)
    },
    {
      path: '/pages/event',
      component: resolve => require(['../pages/event.vue'],resolve)
    },
    {
      path: '/',
      component: resolve => require(['../components/HelloFromVux.vue'], resolve)
    }]
  }
)
export default router;