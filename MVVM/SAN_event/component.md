### components

`解释`：

声明组件中可以使用哪些类型的子组件

`类型`： Object

`用法`：

```
var AddForm = san.defineComponent({
    components: {
        'ui-timepicker': TimePicker,
        'ui-calendar': Calendar
    }
});
```

### components

组件中通常通过声明自定义元素，使用其它组件。

组件视图可以使用哪些子组件类型，必须通过定义组件的 **components** 成员指定。key 是自定义元素的标签名，value 是组件的类。

`注意`：考虑到组件的独立性，San 没有提供全局组件注册的方法，组件必须在自身的 **components** 中声明自己内部会用到哪些组件。

有些组件可能在内容中会使用自己，比如树的节点。我们可以将 **components** 中这一项的值设置为字符串 **self**。

```
var Node = san.defineComponent({
    // template

    components: {
        'ui-node': 'self'
    }
});
```

### owner 与 parent

**owner** 与 **parent** 的概念已经被 react 明确过了，但这里还是要专门明确下。

**owner** 指的是目标在声明时位于哪个组件的组件视图中，其生存时间、交互的通信等行为都由 **owner** 管理。**owner**必须是一个组件。ui-calendar 的 **owner** 是 AddForm 组件。

**parent** 指的是目标在视图中对应的直接父级元素。ui-calendar 的 **parent** 是其上层的 div。**parent** 对组件管理并没有直接的意义。