### example

[几个例子html](https://github.com/QingyiHuang/IFE-2018/tree/master/MVVM/SANDigtal/example)

#### 表单是常见用户输入承载元素，MVVM中，我们一般在用户输入的表单元素或者组件上应用双向绑定

- 输入框
- 输入框绑定就是对输入框的value属性应用双向绑定

```
<input type="text" value="{= name =}">
```

#### checkbox

checkbox 常见的使用场景是分组，在组件模板中，我们把需要分组的 checkbox 将 checked 属性双向绑定到同名的组件数据中。

`提示`：除非你需要进行传统的表单提交，否则无需指定 checkbox 的 name 属性。San 仅以 checked 作为分组的依据。

```
<!-- Template -->
<div>
    <label><input type="checkbox" value="errorrik" checked="{= online =}">errorrik</label>
    <label><input type="checkbox" value="otakustay" checked="{= online =}">otakustay</label>
    <label><input type="checkbox" value="firede" checked="{= online =}">firede</label>
</div>
```

我们期望 checkbox 绑定到的数据项是一个 **Array<string>** 。当 checkbox 被选中时，其 value 会被添加到绑定的数据项中；当 checkbox 被取消选中时，其 value 会从绑定数据项中移除。

```
// Component
san.defineComponent({
    // ...

    initData: function () {
        return {
            online: []//初始未选中任何东西
        };
    },

    attached: function () {
        this.data.set('online', ['errorrik', 'otakustay']);
    }
});
```

## radio

与 checkbox 类似，我们在组件模板中，把需要分组的 radio 将 checked 属性绑定到同名的组件数据中。

`提示`：你需要手工指定分组 radio 的 name 属性，使浏览器能处理 radio 选择的互斥。可以把它设置成与绑定数据的名称相同。//设置相同name值保证互斥，可以设置与绑定数据的名称相同

```
<!-- Template -->
<div>
    <label><input type="radio" value="errorrik" checked="{= online =}" name="online">errorrik</label>
    <label><input type="radio" value="otakustay" checked="{= online =}" name="online">otakustay</label>
    <label><input type="radio" value="firede" checked="{= online =}" name="online">firede</label>
</div>
```

我们期望 radio 绑定到的数据项是一个 **string** 。当 radio 被选中时，绑定的数据项值被设置成选中的 radio 的 value 属性值。

```
// Component
san.defineComponent({
    // ...

    initData: function () {
        return {
            online: 'errorrik'
        };
    }
});
```

## select

select 的使用方式和输入框类似，直接对 value 属性应用双向绑定。

```
<!-- Template -->
<select value="{= online =}">
    <option value="errorrik">errorrik</option>
    <option value="otakustay">otakustay</option>
    <option value="firede">firede</option>
</select>
```

`提示`：在浏览器中，select 的 value 属性并不控制其选中项，select 的选中项是由 option 的 selected 属性控制的。考虑到开发的方便，开发者不需要编写 option 的 selected 属性，San 会在下一个视图更新时间片中刷新 select 的选中状态。

```
// Component
san.defineComponent({
    // ...

    initData: function () {
        return {
            online: 'errorrik'
        };
    }
});
```