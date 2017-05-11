import React,{Component,PropTypes} from 'react'

import {connect} from 'dva';

import UserList from '../components/UserList';
import UserSearch from '../components/UserSearch';
import UserModal from '../components/UserModel';

//import styles from './Users.less';

function Users({location,dispatch,users}){
    //return (
    //<div>User Router Component </div>
    //);

    const {
    loading,list,total,current,currentItem,modalVisible,modalType
    }=users;

    const userSearchProps={};
    const userListProps={
        dataSource:list,
        total,
        loading,
        current,
    };
    //const userListProps={
    //    total:3,
    //    current:1,
    //    loading:false,
    //    dataSource:[
    //    {
    //        name:'张三',
    //        age:23,
    //        address:'成都',
    //    },
    //    {
    //        name:'张三1',
    //        age:24,
    //        address:'成都1',
    //    },
    //    {
    //        name:'张三2',
    //        age:25,
    //        address:'成都2',
    //    },
    //    ]
    //};
    const userModalProps={};

    return (
    <div>
<UserSearch {...userSearchProps}/> {/*用户筛选搜索框*/}
<UserList {...userListProps}/> {/*用户信息展示列表*/}
<UserModal  {...userModalProps}/> {/*添加用户&修改用户弹出的浮层*/}
</div>
);
}

Users.propTypes={
users:PropTypes.object,
};

//指定订阅数据，这里关联了users  监听属性，建立组件和数据的映射关系
function mapStateToProps({users}){
    return {users};
}

//export default
//关联model
export default connect(mapStateToProps)(Users);  //语法，此时Users指定的是哪里