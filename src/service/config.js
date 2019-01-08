
import {SERVICE_BASE_URL} from '@config'
// 登陆请求接口
export const login = {
    url: `${SERVICE_BASE_URL}/loginValidate`,
    method: 'post',
    dataType: 'json',
    headers: {
        'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
    },
    timeout: 10000,
    process: null
}