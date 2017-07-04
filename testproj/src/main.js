// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

window.app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  methods: {
    testfunc: function () {
      this.$children[0].subfunc([{
        name: 'aaaa',
        dscr: 'bbbb'
      }])
    }
  }
})
