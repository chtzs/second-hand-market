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

let app = createApp(App);
app.config.globalProperties.$target = "http://localhost:8080/"; // 本地后端地址
app.config.globalProperties.$md5 = md5;
app.config.globalProperties.$cookie = cookie;
app.config.globalProperties.notifySucceed = notify.succeed;
app.config.globalProperties.notifyError = notify.error;
app.config.globalProperties.$axios = request(app);
app.config.globalProperties.$dateFormat = dateFormat;

// // 封装提示成功的弹出框
// app.config.globalProperties.notifySucceed = function (msg) {
//     this.$notify({
//         title: "成功",
//         message: msg,
//         type: "success",
//         offset: 100
//     });
// };
// // 封装提示失败的弹出框
// app.config.globalProperties.notifyError = function (msg) {
//     this.$notify.error({
//         title: "错误",
//         message: msg,
//         offset: 100
//     });
// };
app.use(router)
    .use(ElementPlus)
    .mount('#app');
