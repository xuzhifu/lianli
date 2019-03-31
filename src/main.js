import Vue from 'vue'
import App from './App'
import router from './router/index'
import {Collapse, CollapseItem} from 'element-ui';

import 'element-ui/lib/theme-chalk/collapse.css';
import 'element-ui/lib/theme-chalk/collapse-item.css';
import 'element-ui/lib/theme-chalk/carousel.css';
import 'element-ui/lib/theme-chalk/carousel-item.css';

import './assets/style/iconfont/iconfont.css';
import './assets/style/scss/style.scss';

Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);

Vue.config.productionTip = false
new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
