// 原生的 node 不支持import引入模块，所以项目中强行使用import方式引入，会抛出类似报错信息: SyntaxError: Unexpected token import

// 解决方案涉及按如下几个方面：

// 安装 babel 依赖
// 根目录下创建 start.js
// 更改 package.json
require('babel-register')
(
  {
    plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
  }
)

module.exports = require('./app.js')