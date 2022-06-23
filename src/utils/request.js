import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import JsonBig from 'json-bigint';
import cookie from "@/utils/cookie";

let wrapper = function (vueApp) {
    const request = axios.create({
        //默认添加的URL，会加在request请求的URL之前，在新的网络环境中要修改，改成后端所在的位置
        baseURL: 'http://localhost:8080/api/',
        timeout: 5000,
        transformResponse: [
            function (response) {
                try {
                    return JsonBig.parse(response);
                } catch (err) {
                    console.log(err);
                    return response
                }
            }],

    });

    request.interceptors.response.use(res => {
        const data = res.data;
        console.log(data);
        if (data.code === 200) {
            return Promise.resolve(data);
        } else {
            vueApp.config.globalProperties.notifyError(data.msg);
            return Promise.reject(res);
        }
    }, err => {
        console.log(err);
        return Promise.reject(err);
    });

    request.interceptors.request.use(res => {
        if (cookie.has('token')) {
            res.headers["token"] = cookie.get('token');
        }
        res.headers['Content-Type'] = 'application/json;charset=utf-8';
        return Promise.resolve(res);
    })
    return request;
}

export default wrapper;