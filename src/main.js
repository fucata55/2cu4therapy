import Vue from 'vue'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import './main.scss'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
