### san from实现input、checkbox组件

- 目的：学会使用san的表单API
- 封装表单组件

### task describe

- 利用san提供的api实现表单控件
- 利用设计稿实现自定义Input、checkbox组件，并满足给定的api

### 设计稿如下

### Input

**props**

| 属性        | 类型    | 默认值 | 说明       |
| ----------- | ------- | ------ | ---------- |
| value       | string  | 空     | 双绑定的值 |
| placeholder | string  | 空     | 站位文本   |
| disabled    | boolean | false  | 是否禁用   |
| readonly    | boolean | false  | 是否只读   |

**events**

| 事件     | 说明           | 返回值 |
| -------- | -------------- | ------ |
| on-input | 输入时触发     | event  |
| on-focus | 获得焦点时触发 | event  |
| on-blur  | 失去焦点时触发 | event  |

 Checkbox

**props**

| 属性          | 类型    | 必须   | 默认值 | 说明                                                         |
| ------------- | ------- | ------ | ------ | ------------------------------------------------------------ |
| checked       | Boolean | string | false  | 组件的值，如果使用了trueValue和falseValue则为对应字符串，否则为boolean |
| disabled      | Boolean | false  | false  | 是否禁用当前项                                               |
| trueValue     | String  | false  | -      | 选中时的值                                                   |
| falseValue    | String  | false  | -      | 未选中时的值                                                 |
| indeterminate | Boolean | false  | false  | 设置 indeterminate 状态，只负责样式控制                      |

**event**

| 事件      | 说明                                                   | 返回值     |
| --------- | ------------------------------------------------------ | ---------- |
| on-change | 触发原生的change事件，通过修改外部的数据改变时不会触发 | events对象 |

**使用形式**

```
    <san-input
        value="{{value}}"
    />

    <san-input
        placehold="请输入用户名"
        value="{{value}}"
    />

    <san-input
        on-input="handleInput"
        placehold="请输入用户名"
        value="{{value}}"
    />
```