import Vue from 'vue'
import App from './App'
import router from './router/index'
import './assets/style/iconfont/iconfont.css'
import './assets/style/scss/style.scss'
import './assets/style/scss/css.scss'
Vue.config.productionTip = false
new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
