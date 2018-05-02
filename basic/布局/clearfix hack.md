### 清除浮动

所有在浮动下面的自身不浮动的内容都将围绕浮动元素进行包装，如果没有处理这些元素就会变得很糟糕

[`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 可以取三个值：

- `left`：停止任何活动的左浮动
- `right`：停止任何活动的右浮动
- `both`：停止任何活动的左右浮动

例如三个浮动的div后写一个p标签，则p会围绕最height的浮动元素进行包装，需要在p的style里面添加 clear both