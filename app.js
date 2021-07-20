// koa
const Koa = require('koa')
const app = new Koa()
const path = require('path')
const fs = require('fs')
const koaStatic = require('koa-static')
// router
const router = require('./controller/router')
//cor解决跨域
const cors = require('koa2-cors')
app.use(cors())
import "./dbHelper/user"
// midleware
app.use(koaStatic(__dirname +"/static"));
// 可以指定多个静态目录
app.use(router.routes()).use(router.allowedMethods())
app.use(async ctx => {
    
    // //serve("index.html");
    //  //let html = serve("./public/index.html")
    // ctx.response.body = html;
    await ctx.render("index");
    // ctx.type='html'
    //ctx.body=fs.createReadStream('./static/index.html') //读取静态文件。。此处为前端文件
  });
var server = app.listen(3000, function (){
    const host = server.address().address;
    const port = server.address().port;
    console.log('app start listening at http://%s:%s', host, port);
});