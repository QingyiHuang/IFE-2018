####javaScript

- Object.assign(target,source)可以用来浅拷贝

source会替换到target相同key值的value

```
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({c: 4, d: 5}, object1);

console.log(object2.c, object2.d);
// expected output: 3 5

```

## node_modules不能太混乱，否则出bug

## 首先要知道export，import ，export default是什么

ES6模块主要有两个功能：export和import
export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
import用于在一个模块中加载另一个含有export接口的模块。
也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。这几个都是ES6的语法。

## export和import（一个导出一个导入）

一个a.js文件有如下代码：

```
export var name="李四";
```

在其它文件里引用如下：



```
import { name } from "/.a.js" //路径根据你的实际情况填写
export default {
  data () {
    return { }
  },
  created:function(){
    alert(name)//可以弹出来“李四”
  }
 }
```



上面的例子是导出单个变量的写法，如果是导出多个变量就应该按照下边的方法，用大括号包裹着需要导出的变量：

```
 var name1="李四";
 var name2="张三";
 export { name1 ,name2 }
```

在其他文件里引用如下：



```
import { name1 , name2 } from "/.a.js" //路径根据你的实际情况填写
export default {
  data () {
    return { }
  },
  created:function(){
    alert(name1)//可以弹出来“李四”
    alert(name2)//可以弹出来“张三”
  }
 }
```



如果导出的是个函数呢，那应该怎么用呢,其实一样，如下

```
function add(x,y){
   alert(x*y)
  //  想一想如果这里是个返回值比如： return x-y，下边的函数怎么引用
}
export { add }
```

在其他文件里引用如下：



```
import { add } from "/.a.js" //路径根据你的实际情况填写
export default {
  data () {
    return { }
  },
  created:function(){
   add(4,6) //弹出来24
  }
 }
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif](javascript:void(0);)

## export与export default

看完上面这几个例子，想必你一定了解了如何使用export，import,如果还是不懂可以自己动手试一试。上面讲的是export和import，但是export跟export default 有什么区别呢？如下：

1、export与export default均可用于导出常量、函数、文件、模块等
2、你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
3、在一个文件或模块中，export、import可以有多个，export default仅有一个
4、通过export方式导出，在导入时要加{ }，export default则不需要

这样来说其实很多时候export与export default可以实现同样的目的，只是用法有些区别。注意第四条，通过export方式导出，在导入时要加{ }，export default则不需要。使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。

```
var name="李四";
export { name }
//import { name } from "/.a.js" 
可以写成：
var name="李四";
export default name
//import name from "/.a.js" 这里name不需要大括号
```

再看第3条，在一个文件或模块中，export、import可以有多个，export default仅有一个，也就是说如下代码：

```
var name1="李四";
var name2="张三";
export { name1 ,name2 }
```

 

也可以写成如下，也是可以的，import跟他类似。

```
 var name1="李四";
 var name2="张三";
 export name1;
 export name2;
```
- [`list-style-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type) ：设置用于列表的项目符号的类型，例如无序列表的方形或圆形项目符号，或有序列表的数字，字母或罗马数字。
- [`list-style-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-position) ：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
- [`list-style-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-image) ：允许您为项目符号使用自定义图片，而不是简单的方形或圆形。