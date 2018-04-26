默认安装node cnpm win10系统

#### 为什么使用webpack4

- 前端资源加载/打包工具，将根据模块依赖关系进行静态分析，并根据规则生成对应的静态资源(减少资源加载数量，解析成静态资源，合多为一，提升web响应速度)

### 安装webpack4

- `cnpm install webpack -g`全局安装webpack
- ``cnpm install webpack-cli -g``因为webpack4很多功能分离了要下这个！
- webpack -v 我这里提示找不到json文件，但是不影响使用

### 在项目文件下新建helloWord.js

随便写入函数后在文件外git bash

`webpack --mode development`尝试能不能将helloWord.js打包成newHello.js

 肯定不能的

- 因为webpack4是以项目根目录下‘./src/index.js’作为入口，我们应该在根目录下创建src/index.js，我们将hello.js改为index.js并且放置在src下

### 所以

我们用webpack4的打包方法:`webpack --mode development`or`webpack --mode production`进行默认打包

将./src/index.js  打包输出到./dist/main.js

