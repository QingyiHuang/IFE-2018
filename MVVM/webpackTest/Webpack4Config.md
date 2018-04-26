#### development和production环境

- `--mode production` 生产环境
  - 提供 `uglifyjs-webpack-plugin` 代码压缩
  - 不需要定义 `new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })` 默认 `production`
  - 默认开启 NoEmitOnErrorsPlugin -> `optimization.noEmitOnErrors`, 编译出错时跳过输出，以确保输出资源不包含错误
  - 默认开启 ModuleConcatenationPlugin -> `optimization.concatenateModules`, webpack3 添加的作用域提升(Scope Hoisting)
- `--mode development` 开发环境
  - 使用 eval 构建 module, 提升增量构建速度
  - 不需要定义 `new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") })` 默认 `development`
  - 默认开启 NamedModulesPlugin -> `optimization.namedModules` 使用模块热替换(HMR)时会显示模块的相对路径

### webpack4配置

- 利用webpack-cli 快速生成webpack.config.js
- 如图：![](https://github.com/QingyiHuang/IFE/blob/master/MVVM/webpackTest/c1.png)
- 新的webpack设置好后，键入`webpack --mode development`默认将集合的js名字添加上md5。


#### webpack npm script设置dev、test、build命令

- 在package.json中`script`中加入
- `"dev":"webpack --mode development",`
  ` "build":"webpack --mode production"`or`"build": "webpack"`
- `"test":""`
- 运行的时候 npm run dev    npm run build   npm run test 就行了