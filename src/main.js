import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.prototype.$apiURL = "https://strongr-api.herokuapp.com/"

// "http://localhost:3001/"
// "https://strongr-api.herokuapp.com/"
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
