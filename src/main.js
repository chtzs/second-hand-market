import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import md5 from 'js-md5';

let app = createApp(App);
app.config.globalProperties.$md5 = md5;
app.use(router)
    .use(ElementPlus)
    .mount('#app');
