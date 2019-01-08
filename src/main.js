import Vue from 'vue'
import App from './App.vue'
import './plugins/muse.js'
import router from './router'
import '@assets/styles/reset.css'
import '@assets/styles/main.styl'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
