import Request from "axios";
import {ElMessage} from "element-plus";

const request = Request.create({
    baseURL: "",
    timeout: 5000,
});

request.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response){
            if (error.response.status) {
                ElMessage({
                    message: error.message,
                    type: "error",
                    customClass: "geek-message-box"
                });
                return false;
            }
        }
        return false;
    }
);

export function api(path: string, method: string, params: object, data: object) {

    let Token:any = localStorage.getItem("uid_token") ? localStorage.getItem("uid_token") : ""

    return request({
        baseURL: "https://api.geekros.com",
        headers: {
            "Content-Type": "application/json",
            "C-Token": "",
            "U-Token": Token
        },
        url: path,
        method: method,
        params: params ? params : {},
        data: data ? data : {}
    });
}

export function service(uri: string, path: string, method: string, params: object, data: object) {

    let Token:any = localStorage.getItem("uid_token") ? localStorage.getItem("uid_token") : ""

    return request({
        baseURL: uri,
        headers: {
            "Content-Type": "application/json",
            "C-Token": "",
            "U-Token": Token
        },
        url: path,
        method: method,
        params: params ? params : {},
        data: data ? data : {}
    });
}
