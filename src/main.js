import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ctaBtn from './components/CTA_button';
// import pagination from './components/pagination';
import renderPage from './components/renderPage';
import loader from './components/loader';
import bootstrapVue from 'bootstrap-vue';
// import eagle.js default styles
// import animate.css for slide transition 
import 'animate.css'

Vue.filter('dateFilter',(value)=>{
  return value.substr(0,10);
})

Vue.component('ctaBtn', ctaBtn);

Vue.component('renderPage', renderPage);
Vue.component('loader', loader);

Vue.use(bootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

