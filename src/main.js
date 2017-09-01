import '@/assets/js/size';
import Vue from 'vue';
import App from './App';
import router from './router';
import resource from 'vue-resource';
import lazyload from 'vue-lazyload';
import Axios from 'axios';
import store from '@/components/vuex/store';

Vue.config.productionTip = false;
Vue.use(resource);
Vue.prototype.$axios = Axios;
Vue.use(lazyload, {
  loading: 'Static/images/loading.gif',
  attempt: 1,
  listenEvents: ['scroll', 'transitionend']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  resource,
  template: '<App/>',
  components: { App }
});
