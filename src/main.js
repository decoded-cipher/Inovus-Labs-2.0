import Vue from 'vue'
import App from "./App.vue"
import router from './router/routes'
import {
  fb
} from './firebase'

import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
})
// Vue.use(VueFirestore)

import 'bootstrap'
import 'popper.js'
import './assets/app.scss'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import Swal from 'sweetalert2'
window.Swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
  // timerProgressBar: true,
  // didOpen: (toast) => {
  //   toast.addEventListener('mouseenter', Swal.stopTimer)
  //   toast.addEventListener('mouseleave', Swal.resumeTimer)
  // }
})
window.Toast = Toast

Vue.component('NavBar', require('./components/NavBar.vue').default);

Vue.config.productionTip = false

var app = ''
fb.auth().onAuthStateChanged(function () {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
});