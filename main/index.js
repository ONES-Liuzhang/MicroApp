import { registerMicroApps, start } from "qiankun";
import Vue from 'vue/dist/vue.esm'



// 注册微应用
registerMicroApps([
  {
    name: "netease",
    entry: "//localhost:3333",
    container: "#subapp-viewport",
    activeRule: '/netease'
  },
  {
    name: "vue-wabpack5",
    entry: "//localhost:3334",
    container: "#subapp-viewport",
    activeRule: '/vue-webpack5'
  },
])

start();
