import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
// element组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})
