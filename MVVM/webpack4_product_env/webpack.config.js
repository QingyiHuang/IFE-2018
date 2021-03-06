const path = require('path');

module.exports = {
  entry: './src/index.js',
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {

    path: path.resolve(__dirname, 'dist'),
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: 'bundle.js',
    // 「入口分块(entry chunk)」的文件名模板  出口分块
    publicPath: 'dist/'
    //解决bundle的sourcefile引入路径bug
  },
  module: {
    // 关于模块配置
   rules: [
     // 模块规则（配置 loader、解析器等选项）
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     },
     {
      test: /\.js$/,
      use: 'babel-loader',
      include: /src/, // 只转化src目录下的js
      exclude: /node_modules/ // 排除掉node_modules，优化打包速度
     },
     {
       test: /\.san$/,
       use: [
         'san-loader'
       ]
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use:{
         loader:'file-loader',
         query:{
           name:'images/[hash].[ext]'
         }
       }
     }
   ]
 },  
 devServer: {
  contentBase: './dist',
  host: 'localhost', // 默认是localhost
  port: 3000, // 端口
  open: false, // 自动打开浏览器
  hot: true // 开启热更新
},
  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）
      alias: {
          san: process.env.NODE_ENV === 'production'
              ? 'san/dist/san.js'
              : 'san/dist/san.dev.js'
      }
  }
};