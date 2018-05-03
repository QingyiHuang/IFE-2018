### 清除浮动

所有在浮动下面的自身不浮动的内容都将围绕浮动元素进行包装，如果没有处理这些元素就会变得很糟糕

[`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 可以取三个值：

- `left`：停止任何活动的左浮动
- `right`：停止任何活动的右浮动
- `both`：停止任何活动的左右浮动

例如三个浮动的div后写一个p标签，则p会围绕最height的浮动元素进行包装，需要在p的style里面添加 clear both

在使用浮动的时候经常会遇到一个古怪的事情：

```
img {
  float: right;
}
```

<div>

不......这个图片比包含它的元素还高， 而且它是浮动的，于是它就溢出到了容器外面！

见证奇迹的时刻到了！有一种比较丑陋的方法可以解决这个问题，它叫做*清除浮动（clearfix hack）*.

让我们加入一些新的CSS样式：

```
.clearfix {
  overflow: auto;
}
```

现在再看看发生了什么：

<div class="clearfix">

好多了！

这个可以在现代浏览器上工作。如果你想要支持IE6，你就需要再加入如下样式：

```
.clearfix {
  overflow: auto;
  zoom: 1;
}
```

有些独特的浏览器需要“额外的关照”。[清除浮动这潭 水很深很深](http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best)，但是这个简单的解决方案已经可以在今天所有的主要浏览器上工作。