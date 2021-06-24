const Router = require('koa-router')
const router = new Router({
    prefix: '/api', // 统一前缀，接口全部为 /api/xxx 格式
})

//const testController = require('../controller/test-controller')
const testController = require('./user-controller')
Object.keys(testController).forEach(key=>{
    console.log(key)
    console.log(testController[key])
    router.all("/"+key, testController[key]);   // router.all是允许所有的访问方式，如果需要限定则改为指定方式即可
})

module.exports = router;