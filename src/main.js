import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index'
import md5 from 'js-md5';
import request from "@/utils/request";
import cookie from "@/utils/cookie";
import notify from "@/utils/notify";
import dateFormat from "@/utils/date";
import url from "@/utils/url";

let app = createApp(App);
app.config.globalProperties.$target = "http://d5qxrr.natappfree.cc"; // 本地后端地址
app.config.globalProperties.$md5 = md5;
app.config.globalProperties.$cookie = cookie;
app.config.globalProperties.notifySucceed = notify.succeed;
app.config.globalProperties.notifyError = notify.error;
app.config.globalProperties.$axios = request(app);
app.config.globalProperties.$dateFormat = dateFormat;
app.config.globalProperties.$url = url;

app.use(router)
    .use(ElementPlus)
    .mount('#app');
