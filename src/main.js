import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'

import VuejsDialog from 'vuejs-dialog'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(VuejsDialog);
Vue.use(Vuelidate);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
