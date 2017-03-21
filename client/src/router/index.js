import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import QuestionDetail from '@/components/QuestionDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/:slug',
      name: 'QuestionDetail',
      component: QuestionDetail
    }
  ]
})
