#### 注：以chrome为例

css3 动画应该在0.3s到0.5s之间

### transition

```
a.foo {
  padding: 5px 10px;
  background: #9c3;
  -webkit-transition-property: background;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  }
a.foo:hover {
  background: #690;
  }
```

声明中三个部分的转换：

- `transition-property`：要转换的属性（在这种情况下是背景属性）
- `transition-duration`：过渡应持续多久（0.3秒）
- `transition-timing-function`：随着时间的推移，转换的速度有多快（缓解）
- 融合上面三个步骤

```
-webkit-transition：background 0.3s ease;
```

#### 添加浏览器的兼容

```
  -webkit-transition: background 0.3s ease;
  -moz-transition: background 0.3s ease;
  -o-transition: background 0.3s ease;
  transition: background 0.3s ease;
```

#### 四种曲线

