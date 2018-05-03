### inline-block

你可以创建很多网格来铺满浏览器。在过去很长的一段时间内使用 `float` 是一种选择，但是使用 `inline-block` 会更简单。 

#### float

```
困难的方式（使用浮动）
.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}
```

## 容易的方式（使用 inline-block）

你可以用 `display` 属性的值 `inline-block` 来实现相同效果。

```
.box2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}
```

### 使用inline-block布局

- `vertical-align` 属性会影响到 `inline-block` 元素，你可能会把它的值设置为 `top` 。
- 你需要设置每一列的宽度
- 如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙

```

```

