// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
// import store from "./store/second";
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 把store对象提供给“store”选项，可以吧store的实例注入所有的子组件;
  store,
  router,
  components: { App },
  template: '<App/>'
})
