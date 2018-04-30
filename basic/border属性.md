## border-width:

- `border-width:1px 2px 3px 4px;` 

- 上面等价于 

  ```
   border-top-width: 1px;  border-right-width：2px;  border-bottom-width: 3px;  border-left-width: 4px;
  ```

### border-style

·由于 border-style 的默认值是 none，如果没有声明样式，就相当于 border-style: none

·如果颜色值小于 4 个，值复制就会起作用。例如下面的规则声明了段落的上下边框是蓝色，左右边框是红色：

```
p {
  border-style: solid;
  border-color: blue red;
  }
```

### border-radius

用于添加圆角效果

##### 实例:

`border-radius:10px;`

```
border-radius:5px 10px 15px 20px; //顺序是顺时针
```

```
border-radius:26px 106px 162px 32px/28px 80px 178px 26px; //标准语法格式
```

`border-radius:50%; //是相对于元素占据尺寸的百分比，即包含边框和padding后的尺寸`

```
.radius{
    border-top-left-radius:5px;      //左上角，注意顺序是先上下后左右
    border-top-right-radius:10px;    //左上角
    border-bottom-left-radius:15px;  //左下角
    border-bottom-left-radius:20px;  //右上角
    background-color:red;  //即使元素没有边框，圆角也可以用到 background 上面，具体效果受 background-clip 影响。
}
```

##### 兼容性：

IE9+,Firefox4+,Chrome5+,Safari5+,Opera01.5+,iOS Safari4+,Android Browser2.2+ ,Android Chrome18+

##### 兼容方法：

低版本的chrome:`-webkit-border-radius:10px;`
低版本的firefox:`-moz-border-radius:10px;`
IE6/7/8:引入ie-css3兼容文件,不支持除了黑色(#000)以外的其他颜色
详情参阅[让IE6/IE7/IE8浏览器支持CSS3属性](http://www.zhangxinxu.com/wordpress/2010/04/%E8%AE%A9ie6ie7ie8%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81css3%E5%B1%9E%E6%80%A7/)
详情参阅[border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

#### box-shadow

用于添加阴影效果

##### 语法：

`box-shadow：none|[inset? && [<offset-x><offset-y><blur-radius>?<spread-radius>?<color>?]]#`
inset：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影
`<offset-x>`: 这是第一个 length值设置水平偏移量，如果是负值则阴影位于元素左边。
`<offset-y>`: 这是第二个 length值设置垂直偏移量，如果是负值则阴影位于元素上面。
`<blur-radius>`:这是第三个 length值。值越大，糊糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。
`<color>`：设置对象的阴影的颜色。

##### 实例：

`box-shadow: 10px 10px 5px #888;`

```
box-shadow: 3px 3px green, -1em 0 0.4em gold;
```

##### 兼容性：

IE9.0+,Firefox4.0+,Chrome10.0+,Safari5.1+,Opera10.5+,iOS Safari5.0+,Android Browser4.0+,Android Chrome18.0+

##### 兼容方法：

低版本的chrome:`-webkit-box-shadow:10px 10px 5px #888;`
低版本的firefox:`-moz-box-shadow:10px 10px 5px #888;`
IE6/7/8:

- 方法一:

  ```
  filter:progid:dXImageTransform.Microsoft.DropShadow(color=#888888,offX=10,offY=10,positives=true);
  ```

  缺点：阴影不能边缘模糊

- 方法二：

  ```
  filter:progid:DXImageTransform.Microsoft.Shadow(color='#0099ff', Direction='120', Strength='10');
  ```

  类似于投影效果，缺点：阴影不能边缘模糊

- 方法三(推荐)、引入ie-css3兼容文件`behavior:url(ie-css3.htc)`
  缺点：不支持除了黑色(#000)以外的其他颜色
  详情参阅[让IE6/IE7/IE8浏览器支持CSS3属性](http://www.zhangxinxu.com/wordpress/2010/04/%E8%AE%A9ie6ie7ie8%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81css3%E5%B1%9E%E6%80%A7/)
  详情参阅[box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

#### border-image

用来给元素边框添加背景图片

##### 语法：

```
border-image：<' border-image-source '> || <' border-image-slice '> [ / <' border-image-width '> | 
/ <' border-image-width '>? / <' border-image-outset '> ]? || <' border-image-repeat '>
```

<' border-image-source '>：设置或检索对象的边框是否用图像定义样式或图像来源路径。
<' border-image-slice '>： 设置或检索对象的边框背景图的分割方式,该属性指定从上，右，下，左方位来分隔图像，将图像分成4个角，4条边和中间区域共9份，中间区域始终是透明的（即没图像填充），除非加上关键字 fill。
<' border-image-width '>： 设置或检索对象的边框厚度。
<' border-image-outset '>：设置或检索对象的边框图像可超出边框盒的大小。
<' border-image-repeat '>：设置或检索对象的边框图像的平铺方式repeat,round,stretch。

##### 实例：

`border-image:url("http://www.w3school.com.cn/i/border.png") 30 30 round;`

```
border-image:url("http://www.w3school.com.cn/i/border.png") 30 30 stretch;
```

##### 兼容性：

IE11+, Firefox15+, Chrome16+ , Safari6+,Opera15+,iOS Safari6+,Android Browser4.4+, Android Chrome18+

##### 兼容方法：

低版本的chrome:`-webkit-border-image:url("http://www.w3school.com.cn/i/border.png") 30 30 stretch;`
低版本的firefox:`-moz-border-image:url("http://www.w3school.com.cn/i/border.png") 30 30 stretch;`
低版本的Opera:`-o-border-image:url("http://www.w3school.com.cn/i/border.png") 30 30 stretch;`
IE未解决
详情参阅[border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image),[border-image](http://www.360doc.com/content/14/1016/13/2792772_417403574.shtml)