import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  created(){
    console.log('Global Mixin - Created Hook');
  }
})
Vue.filter('to-lowercase', (value) =>{
  return value.toLowerCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
