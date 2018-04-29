### style

- san并没有为class 和 style 出题提供特殊绑定语法，他们的处理方法和attribute一样

### class

- ```
  <ul class="list {{isHidden ? 'list-hidden' : 'list-visible'}}">...</ul>
  ```

  根据状态不同，切换不同class场景

## 条件

## s-if

通过 **s-if** 指令，我们可以为元素指定条件。当条件成立时元素可见，当条件不成立时元素不存在。

`提示`：当不满足条件时，San 会将元素从当前页面中移除，而不是隐藏。

```
<span s-if="isOK">Hello San!</span>
```

**s-if** 指令的值可以是任何类型的[表达式](https://baidu.github.io/san/tutorial/data-binding/#%E8%A1%A8%E8%BE%BE%E5%BC%8F)。

```
<span s-if="isReady && isActive">Hello San!</span>
```

`提示`：San 的条件判断不是严格的 === false。所以，一切 JavaScript 的假值都会认为条件不成立：0、空字符串、null、undefined、NaN等。

## s-elif

`> 3.2.3`

**s-elif** 指令可以给 **s-if** 增加一个额外条件分支块。**s-elif** 指令的值可以是任何类型的[表达式](https://baidu.github.io/san/tutorial/data-binding/#%E8%A1%A8%E8%BE%BE%E5%BC%8F)。

```
<span s-if="isActive">Active</span>
<span s-elif="isOnline">Pending</span>
```

`提示`：**s-elif** 指令元素必须跟在 **s-if** 或 **s-elif** 指令元素后，否则将抛出 **elif not match if** 的异常。

## s-else

**s-else** 指令可以给 **s-if** 增加一个不满足条件的分支块。**s-else** 指令没有值。

```
<span s-if="isOnline">Hello!</span>
<span s-else>Offline</span>
```

`提示`：**s-else** 指令元素必须跟在 **s-if** 或 **s-elif** 指令元素后，否则将抛出 **else not match if** 的异常。

## 虚拟元素

在 san 中，template 元素在渲染时不会包含自身，只会渲染其内容。对 template 元素应用 if 指令能够让多个元素同时根据条件渲染视图，可以省掉一层不必要的父元素。

```
<div>
    <template s-if="num > 10000">
        <h2>biiig</h2>
        <p>{{num}}</p>
    </template>
    <template s-elif="num > 1000">
        <h3>biig</h3>
        <p>{{num}}</p>
    </template>
    <template s-elif="num > 100">
        <h4>big</h4>
        <p>{{num}}</p>
    </template>
    <template s-else>
        <h5>small</h5>
        <p>{{num}}</p>
    </template>
</div>
```

## 循环

通过循环渲染列表是常见的场景。通过在元素上作用 **s-for** 指令，我们可以渲染一个列表。

## 语法

**s-for** 指令的语法形式如下：

```
item-identifier[, index-identifier] in expression
```

## 列表渲染

下面的代码描述了在元素上作用 **s-for** 指令，渲染一个列表。在列表渲染的元素内部，可以正常访问到 owner 组件上的其他数据（下面例子中的dept）。

```
<!-- Template -->
<dl>
    <dt>name - email</dt>
    <dd s-for="p in persons" title="{{p.name}}">{{p.name}}({{dept}}) - {{p.email}}</dd>
</dl>
```

```
// Component
san.defineComponent({
    // template

    initData: function () {
        return {
            dept: 'ssg',
            persons: [
                {name: 'errorrik', email: 'errorrik@gmail.com'},
                {name: 'otakustay', email: 'otakustay@gmail.com'}
            ]
        };
    }
});
```

## 索引

**s-for** 指令中可以指定索引变量名（下面例子中的index），从而在列表渲染过程获得列表元素的索引。

```
<!-- Template -->
<dl>
    <dt>name - email</dt>
    <dd s-for="p, index in persons" title="{{p.name}}">{{index + 1}}. {{p.name}}({{dept}}) - {{p.email}}</dd>
</dl>
```

```
// Component
san.defineComponent({
    // template

    initData: function () {
        return {
            dept: 'ssg',
            persons: [
                {name: 'errorrik', email: 'errorrik@gmail.com'},
                {name: 'otakustay', email: 'otakustay@gmail.com'}
            ]
        };
    }
});
```

## 列表数据操作

列表数据的增加、删除等操作请使用组件 data 提供的数组方法。详细请参考[数组方法](https://baidu.github.io/san/tutorial/data-method/#%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95)文档。

## 虚拟元素

和 if 指令一样，对 template 元素应用 for 指令，能够让多个元素同时根据遍历渲染，可以省掉一层不必要的父元素。

```
<!-- Template -->
<dl>
    <template s-for="p in persons">
        <dt>{{p.name}}</dt>
        <dd>{{p.email}}</dd>
    </template>
</dl>
```