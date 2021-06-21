const hello = async (ctx, next) => {
    ctx.body = {
        name:"lb",
        age:25
    }
    ctx.status = 200;
}

module.exports = {
    'test/hello': hello,
}