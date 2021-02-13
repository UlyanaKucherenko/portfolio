import 'ant-design-vue/dist/antd.css';
import './styles/style.scss';

import Vue from 'vue'
import App from './App.vue'
import {Modal,Icon,Button} from 'ant-design-vue';
import router from './router'

import TheAnimation from './components/common/TheAnimation.vue';
import XIcon from './components/common/XIcon';

Vue.config.productionTip = false
Vue.use(Modal);
Vue.use(Icon);
Vue.use(Button);
Vue.component("TheAnimation", TheAnimation);
Vue.component("XIcon", XIcon);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
