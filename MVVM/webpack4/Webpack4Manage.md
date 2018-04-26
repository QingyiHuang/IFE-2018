### webpack4管理静态资源

- webpack可以通过loader引入任何类型文件

#### 加载css

- 从js模块中import一个css文件，我们需要在module中安装

- style-loader    and   css-loader

- 键入`cnpm install --save-dev style-loader css-loader -g` 

- 然后在webpack.config.js里面添加

  ```
  +   module: {
  +     rules: [
  +       {
  +         test: /\.css$/,//正则匹配.css结尾的文件
  +         use: [
  +           'style-loader',
  +           'css-loader'
  +         ]
  +       }
  +     ]
  +   }
  ```


- 然后我们进入src目录新建一个style.css 随便写点样式，element可以在js中动态创建

	import './style.css';

	function component(){
		var element = document.createElement('div');
		element.innerHTML="webpack4";
		element.classList.add('hello');
		return element;
	}
`document.body.appendChild(component());`

- 在git bash中键入命令`npm run build`然后就成功打包了

### 加载图片

- file-loader可以轻松将图片，图标等内容混合到css中去

- ```
  npm install --save-dev file-loader
  ```


- 在webpack.config.js的rules中添加

```
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
```

- 代码如下
- 现在我们在src目录下放入一张png然后再indexjs中引入它

	import './style.css';
	import picS from './c2.png';
	
	function component(){
		var element = document.createElement('div');
		element.innerHTML="webpack4";
		element.classList.add('hello');
	
		var pic = new Image();
		pic.src = picS;
		element.appendChild(pic);
		return element;
	}
	document.body.appendChild(component());
- css如下

  `.hello{color: blue;background: url('./c2.png');}`

- 然后 npm run build ok

