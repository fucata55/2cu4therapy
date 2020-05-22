import Vue from 'vue'
import App from './App.vue'
import { MdTabs, MdButton, MdContent, MdToolbar, MdIcon, MdDrawer, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdTabs)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)

new Vue({
    render: (h) => h(App),
}).$mount('#app')
