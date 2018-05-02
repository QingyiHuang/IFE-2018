### 盒模型

一个盒子的总宽度是它的width，padding-right，padding-left，border-right，border-left的属性之和

#### 未改变的盒模型

- [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和[`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 设置了内容框的宽/高
- [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 家族属性设置内边距的宽度(别忘了普通属性比如 [`padding-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-bottom) ，一次设置一个边).
- [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 家族属性设置边界的宽度、样式和颜色(许多可用的普通边界属性还有很多)。
- [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 家族属性设置包围CSS盒子外部区域的宽度，这个属性推开布局中其他的CSS盒子（也有许多可用的普通属性比如 [`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom) ）。

##### 一个例子：

设置两个相同的DIV元素，赋予每个元素相同的width border padding

并且使用一些javascript脚本来打印每个盒子宽度的计算值

第二个div 用box - sizing：border-box 顶部盒子默认不改变

首先，HTML为：

```
<div class="one"></div>
<div class="two"></div>
```

然后CSS为：

```
html {
  font-family: sans-serif;
  background: #ccc;
}

.one, .two {
  background: red;
  width: 300px;
  height: 150px;
  padding: 20px;
  border: 10px solid black;
  margin: 20px auto;
}

.two {
  box-sizing: border-box;
}
```

最后，我们用 JavaScript 脚本计算了两个框的计算宽度值：

```
var one = document.querySelector('.one');
var two = document.querySelector('.two');

function outputWH(box) {
  var width = box.offsetWidth;
  var height = box.offsetHeight;
  box.textContent = 'Width: ' + width + 'px, Height: ' + height + 'px.'
}

outputWH(one);
outputWH(two);
```

由上面的例子得出以下结果：

[结果](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/box-sizing-example.html)

第一个框的宽度和高度等于content + padding + border ,然而，第二个框的宽度和高度等于通过CSS设置在 content 的宽度和高度。 padding 和 border 并没有添加到总宽度和高度上; 反而，他们占用一些内容的空间，使内容更小，并保持总体尺寸相同。

#### 这就是完全改变盒模型

```
.two {
  box-sizing: border-box;
}
```

![img](https://github.com/QingyiHuang/IFE-2018/blob/master/basic/box_mode/box-model-alt-small.png)



#### 盒子的高级属性（响应式布局）

- 设置宽和高的约束

  通过属性min-width 、max-width、min-height、max-height实现的

一个明显的用处是，如果想通过设置将一个布局的外层容器的宽度设置为百分比，从而让布局的宽度变得灵活，不过又不想让它变得太宽或者太窄，因为这样布局就开始看起来很糟糕。一个选择是用响应式网页设计技术（之后我们会讲到），但是更简单的方法也许只是给布局一个最大和最小宽度约束即可：

```
width:70%;
margin:0 auto;
max-width:1280px;
min-width:480px;
```

- max-width属性的另外一个好处是可以将容器内的媒体(例如图像和视频)控制在容器内，但是另外党容器变得比图像更窄的时候，图像开始溢流容器，（因为它是固定宽度）
- 应对方法：

```
display:block;
margin:0 auto;
max-width:100%;
```

首先 让该块在父元素容器内居中，并展示为一个块的属性，限制图像的宽度，使它最大宽度与父容器宽度相等，因此，当父容器宽度缩小到小雨图像宽度时图像会一起缩小。



注意：

- 外边距（margin）有一个特殊的行为，称为 [外边距塌陷](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)： 当两个盒子挨在一起时，二者之间的距离为两个挨着的外边距中最大的那个值，而不是二者的和。