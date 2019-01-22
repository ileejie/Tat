// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
// element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// iView组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

// 使用elementUI组件
Vue.use(ElementUI);

// 使用iview组件
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
