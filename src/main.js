import 'ant-design-vue/dist/antd.css';
import './styles/style.scss';

import Vue from 'vue'
import App from './App.vue'
import {Modal,Icon,Button,Avatar} from 'ant-design-vue';
import router from './router'

import TheAnimation from './components/common/TheAnimation.vue';
import XIcon from './components/common/XIcon';

Vue.config.productionTip = false
Vue.use(Modal);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Avatar);
Vue.component("TheAnimation", TheAnimation);
Vue.component("XIcon", XIcon);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.addEventListener("DOMContentLoaded", () => {
  var canvas = document.getElementById("space");
  var c = canvas.getContext("2d");

  var numStars = 1900;
  var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
  var focalLength = canvas.width *2;
  var warp = 0;
  var centerX, centerY;

  var stars = [], star;
  var i;

  var animate = true;

  initializeStars();

  function executeFrame(){
    
    if(animate)
    requestAnimationFrame(executeFrame);
    moveStars();
    drawStars();
  }

  function initializeStars(){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    
    stars = [];
    for(i = 0; i < numStars; i++){
      star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: '0.'+Math.floor(Math.random() * 99) + 1
      };
      stars.push(star);
    }
  }

  function moveStars(){
    for(i = 0; i < numStars; i++){
      star = stars[i];
      star.z--;
      
      if(star.z <= 0){
        star.z = canvas.width;
      }
    }
  }

  function drawStars(){
    var pixelX, pixelY, pixelRadius;
    
    // Resize to the screen
    if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
    }
    if(warp==0)
    {c.fillStyle = "rgba(0,10,20,1)";
    c.fillRect(0,0, canvas.width, canvas.height);}
    c.fillStyle = "rgba(209, 255, 255, "+radius+")";
    for(i = 0; i < numStars; i++){
      star = stars[i];
      
      pixelX = (star.x - centerX) * (focalLength / star.z);
      pixelX += centerX;
      pixelY = (star.y - centerY) * (focalLength / star.z);
      pixelY += centerY;
      pixelRadius = 1 * (focalLength / star.z);
      
      c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
      //c.fill();
    }
  }

  executeFrame();
});
