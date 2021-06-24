// koa
const Koa = require('koa')
const app = new Koa()
//cor解决跨域
const cors = require('koa2-cors')
app.use(cors())
import "./dbHelper/user"
// midleware
const serve = require('koa-static')
app.use(serve('./assets'))
// router
const router = require('./controller/router')

app.use(router.routes()).use(router.allowedMethods())
app.use(async ctx => {
    
    ctx.body = "hello world";
  });
var server = app.listen(3000, function (){
    const host = server.address().address;
    const port = server.address().port;
    console.log('app start listening at http://%s:%s', host, port);
});