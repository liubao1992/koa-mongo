import {
    queryUsers,
    addUsers,
    delUsers
} from "../dbHelper/user"
//获取用户列表
const getUserList = async (ctx, next) => {
    let data = await queryUsers()
    //console.log(data)
    ctx.body = {
        msg: data
    }
    ctx.status = 200;
}
//添加用户
const addUser = async (ctx, next) => {
    let obj = {
        name: 'cedric2227',
        age: 27
    }
    let getUserList = await queryUsers()
    let data = false;
    getUserList.forEach(element => {
        if (element.name === obj.name) {
            data = true
        }
    });
    if (!data) {
        data = await addUsers(obj)
    } else {
        data = "名字重复"
    }
    ctx.body = {
        msg: data
    }
    ctx.status = 200;
}
//添加用户
const delUser = async (ctx, next) => {
    let obj = {
        name: 'cedric2227',
        age: 27
    }
    let getUserList = await queryUsers()
    let data = false;
    getUserList.forEach(element => {
        if (element.name === obj.name) {
            data = true
        }
    });
    if (data) {
        data = await delUsers(obj)
    } else {
        data = "名字未查找到"
    }
    ctx.body = {
        msg: data
    }
    ctx.status = 200;
}
//添加用户
const updateUser = async (ctx, next) => {
    let obj = {
        name: 'cedric222',
        age: 29
    }
    let getUserList = await queryUsers()
    let data = false;
    getUserList.forEach(element => {
        if (element.name === obj.name) {
            data = true
        }
    });
    if (data) {
        data = await updateUsers(obj)
    } else {
        data = "名字未查找到"
    }
    ctx.body = {
        msg: data
    }
    ctx.status = 200;
}
module.exports = {
    'user/getUserList': getUserList,
    'user/addUser': addUser,
    'user/delUser': delUser,
    'user/updateUser': updateUser,
}