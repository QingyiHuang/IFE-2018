const path = require('path');

module.exports = {
  entry: './src/index.js',
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    filename: 'bundle.js',
    // 「入口分块(entry chunk)」的文件名模板  出口分块
    path: path.resolve(__dirname, 'dist')
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

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
       test: /\.san$/,
       use: [
         'san-loader'
       ]
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
     }
   ]
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