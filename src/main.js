import 'ant-design-vue/dist/antd.css';
import './styles/style.scss';

import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import TheAnimation from './components/common/TheAnimation.vue';
import XIcon from './components/common/XIcon';

Vue.config.productionTip = false
Vue.use(Antd);
Vue.component("TheAnimation", TheAnimation);
Vue.component("XIcon", XIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
