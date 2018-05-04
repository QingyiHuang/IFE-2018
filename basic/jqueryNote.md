### jq prop()

当该方法用于**返回**属性值时，则返回第一个匹配元素的值。

当该方法用于**设置**属性值时，则为匹配元素集合设置一个或多个属性/值对。

**注意：**prop() 方法应该用于检索属性值，例如 DOM 属性（如 selectedIndex, tagName, nodeName, nodeType, ownerDocument, defaultChecked, 和 defaultSelected）。

**提示：**如需检索 HTML 属性，请使用 [attr()](http://www.runoob.com/jquery/html-attr.html) 方法代替。

**提示：**如需移除属性，请使用 [removeProp()](http://www.runoob.com/jquery/html-removeprop.html) 方法。



prop 返回 property 的bool值

attr（）返回属性值

### children（）

语法：`.children(selector)`

```
找到所有 div  类名为 "selected" 的的子元素，并将其设置为蓝色：

$("div").children(".selected").css("color", "blue");
```

