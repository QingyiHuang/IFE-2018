#### san基本经过几步：（了解AMD plugin）

- 定义一个San组件，并指定组件的内容模版与初始数据。
- 初始化组件对象
- 让组件在相应的地方渲染
- 双向绑定，通过｛=expression=｝声明双向绑定。，通常在用户输入场景，将用户输入结果自动更新到组件数据。

### 数据绑定（仅支持普通变量和属性访问表达式）

- {{name}}插值

- 属性绑定`<ui-label text="{{jokeName}}"></ui-label>`当 jokeName 数据变化时，会自动将新的值设置到 label 组件的 text 属性中

- 双向绑定

  通常在 **输入表单元素** 或 **具有输入反馈的自定义组件** 上应用双向绑定

- 下面的例子将 input、select、自定义组件的 value 属性与声明的数据项（name、online、color）建立了双向绑定关系。当用户输入时，相应数据项的值会发生变化。


```
<input type="text" value="{= name =}">

<select value="{= online =}">
    <option value="errorrik">errorrik</option>
    <option value="otakustay">otakustay</option>
    <option value="firede">firede</option>
</select>

<ui-colorpicker value="{= color =}"></ui-colorpicker>
```

- 不希望html进行转义的时候

  ```
  <p s-html="rawHTML"></p>
  <p>{{rawHTML | raw}}</p>

  ```

- 过滤器（仅在插值替换的时候支持）

  1.在插值替换的的时候，过滤器可以实现对插值数据的处理和变换，使其转换成更合适视图呈现的数据形式。

  2.插值替换支持多过滤器处理，前一个过滤器的输出作后一个过滤器的输入。

  ```
  <p>{{myVariable | html | url}}</p>//普通变量
  ```

  3.filter支持参数传递，参数可以使任何支持的表达式

```
<!-- // 假设存在过滤器: comma -->
<p>{{myVariable | comma(3)}}</p>
<p>{{myVariable | comma(commaLength)}}</p>
<p>{{myVariable | comma(commaLength + 1)}}</p>

```

- san的插值具有多种表达式类型

  ```
  <!-- 普通变量 -->
  <p>{{name}}</p>

  <!-- 属性访问 -->
  <p>{{person.name}}</p>
  <p>{{persons[1]}}</p>

  <!-- 一元否定 -->
  <p>{{!isOK}}</p>
  <p>{{!!isOK}}</p>

  <!-- 二元运算 -->
  <p>{{num1 + num2}}</p>
  <p>{{num1 - num2}}</p>
  <p>{{num1 * num2}}</p>
  <p>{{num1 / num2}}</p>
  <p>{{num1 + num2 * num3}}</p>

  <!-- 二元关系 -->
  <p>{{num1 > num2}}</p>
  <p>{{num1 !== num2}}</p>

  <!-- 三元条件 -->
  <p>{{num1 > num2 ? num1 : num2}}</p>

  <!-- 括号 -->
  <p>{{a * (b + c)}}</p>
  ```

  ​