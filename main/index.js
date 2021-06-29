import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted } from "qiankun";
import render from './src/render'

// 初始化应用
render({loading: true})

// const loader = loading => render({ loading })

// 注册微应用
registerMicroApps([
  {
    name: "netease-music",
    entry: "//localhost:3333",
    container: "#subapp-viewport",
    // loader,
    activeRule: '/netease-music'
  },
  {
    name: "vue-wabpack5",
    entry: "//localhost:3334",
    container: "#subapp-viewport",
    // loader,
    activeRule: '/vue-webpack5'
  }
],
{
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
})

setDefaultMountApp('/vue-wabpack5');

start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

