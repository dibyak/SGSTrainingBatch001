import Vue from 'vue'
import App from './App6.vue'
import vuetify from './plugins/vuetify'

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
}).$mount('#app')
