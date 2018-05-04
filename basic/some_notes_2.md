checkbox只有两种值：选中（checked）或未选中（unchecked）。它可以有任何值，但是表单提交时checkbox的值只能是checked或unchecked。它的默认值是unchecked，你可以在HTML中这样控制它：

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<!-- Default to unchecked -->
<input type="checkbox">

<!-- Default to checked, XHTML -->
<input type="checkbox" checked="checked" />

<!-- Default to checked, HTML5 -->
<input type="checkbox" checked>
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

视觉上，checkbox有三种状态：checked、unchecked、indeterminate（不确定的）。看起来就像这样子：

![img](https://images0.cnblogs.com/blog2015/664733/201507/012211335465821.png)

对于indeterminate状态的checkbox需要注意的是：**你无法在HTML中设置checkbox的状态为indeterminate**。因为HTML中没有indeterminate这个属性，你可以通过Javascript脚本来设置它

```
var checkbox = document.getElementById("some-checkbox");
checkbox.indeterminate = true;
```

 

或者通过jQuery来设置

```
$("#some-checkbox").prop("indeterminate", true); // prop is jQuery 1.6+
```

 

checkbox的indeterminate状态仅仅是视觉上的，它的值仍然只有checked或unchecked，这意味着indeterminate状态的checkbox的真正价值只是在用户界面上看起来更友好！

indeterminate状态的checkbox在不同浏览器里外观不同，下图是它在Mac下Opera 11.50的外观：

![img](https://images0.cnblogs.com/blog2015/664733/201507/012224168907882.png)

**案例**

我写这篇文章的主要原因是我有一个有用的案例：在嵌套的checkbox中，每一个checkbox都可能有很多个子checkbox，如果所有子checkbox都选中了，它也应该选中；如果没有一个子checkbox选中，它也不选中；如果有一部分子checkbox选中，它应该是indeterminate状态（在这种情况下，象征着部分子元素选中）.

![img](https://images0.cnblogs.com/blog2015/664733/201507/020040251404036.jpg)

完整demo（原作者的demo有点问题，这里我做了个简化版）





