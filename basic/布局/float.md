### 浮动float

- 几乎所有元素都可以浮动
- div横向排列，大字图报..

### 多列浮动布局

- 两列布局

  在html中放置两个div，两个div宽度各是100%

  如果我们希望将两个div放在一起，那么我们需要将他们的宽度设置为父元素的宽度的50%，或者更小，这样他们就可以彼此匹配。一个左浮动一个右浮动。

```
    div:nth-of-type(1){
        width: 50%;
        float: left;
    }
    div:nth-of-type(2){
        width: 50%;
        float: right;
    }
```

- 三列布局

```
div:nth-of-type(1) {
  width: 36%;
  float: left;
}

div:nth-of-type(2) {
  width: 30%;
  float: left;
}

div:nth-of-type(3) {
  width: 26%;
  float: right;
}
```

三列布局有很多实现方式，不一一列举。



### 浮动的时候，整个宽度可能难以计算，

当我们给设置好了的百分比div添加上内边距外边距背景等功能的时候，问题就来了，由于盒模型，默认宽度等于margin-left+border+padding-left+width+padding-right+margin-right

- 我们需要放置这样一个style

```
* {
  box-sizing: border-box;
}
```

盒模型详细解释链接



注意：

非浮动元素的外边距不能用于它们和浮动元素之间来创建空间