import {hasHistory} from 'dva/router';
import {query} from '../services/users';

export default{
    namespace: 'users',  //通过命名变量关联routers
    state: {
        list: [],
        total: null,
        loading: false,//控制加载状态
        current: null,//当前分页信息
        currentItem: {},//当前操作的用户对象
        modalVisible: false,//弹出框的显示状态
        modelType: 'create',//弹出框的类型（添加用户，编辑用户）
    },
    subscriptions: {
        setup({dispatch, history}){
            history.listen(
                location => {
                    if (location.pathname === '/users') {
                        dispatch({
                            type: 'querySuccess',
                            payload: {}
                        });
                    }
                }
            );
        },
    },

    effects: {
        *query({payload}, {select, call, put}){
            yield put({type: "showLoading"});
            const {data}=yield call(query);
            if (data) {
                yield put({
                    list: data.data,
                    total: data.page.total,
                    current: data.page.current
                });
            }
        },
        *create(){
        },
        *'delete'(){
        },
        *update(){
        },
    },
    reducers: {
        showLoading(){
        },//控制加载状态的reducer
        showModal(){
        },//控制modal显示状态的reducer
        hideModel(){
        },
        querySuccess(state, action){
            /*const mock={
             total:3,
             current:1,
             loading:false,
             list:[
             {
             id:1,
             age:24,
             name:'张三',
             address:'成都',
             },
             {
             id:2,
             age:23,
             name:'张三2',
             address:'成都2',
             },
             {
             id:3,
             age:25,
             name:'张三3',
             address:'成都3',
             },
             ],
             };*/
            return {
                // ...state,
                // ...action.payload,
                loading: false
            };
        },
        createSuccess(){
        },
        deleteSuccess(){
        },
        updateSuccess(){
        },
    }
}
/*
 name(){}      name:function(){}
 *name(){} *表示这个方法是个Generator函数
 */

