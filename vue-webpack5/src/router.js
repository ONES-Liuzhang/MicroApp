import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/foo'
  },
  {
    path: '/foo',
    name: 'foo',
    component: () => import(/* webpackChunkName: 'foo' */ './views/foo.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import(/* webpackChunkName: 'bar' */ './views/bar.vue')
  }
]

export function createRouter (base = "/", mode = "history") {
  return new VueRouter({
		base,
		mode,
    routes
  })
}