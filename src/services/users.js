/**
 * Created by liudan on 2017/5/11.
 */
//request 是我们封装的一个网络请求库
import request from '../utils/request';
import qs from 'qs';
async function query(params){
    return request(`/api/users?${qs.stringify(params)}`); //什么用法
}
