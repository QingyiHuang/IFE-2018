### san 事件处理

- san 事件处理 通过on-前缀，可以将事件的处理绑定在组件的方法上。
- san中dom/组件事件都是通过on-前缀绑定。

### DOM事件

on+事件名将dom元素的事件绑定到组件方法上，当DOM事件触发，组件方法将被调用，this指向组件实例。

- 例1：当按钮被点击，组件的submit方法被调用

```
san.defineComponent({
    template: '...<button type="button" on-click="submit">submit</button>',//bind submit by on-

    submit: function () {
        var title = this.data.get('title');
        if (!title) {
            return;
        }

        sendData({title: title});
    }
});
```

- 绑定事件可以指定参数，引用当前渲染环境中的数据，参数可以是任何类型的表达式。

```
template:
<ul>
    <li s-for="item, index in todos">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <i class="fa fa-trash-o" on-click="rmTodo(item)"></i>
    </li>
</ul>
```

```
// Component
san.defineComponent({
    rmTodo: function (todo) {
        service.rmTodo(todo.id);
        this.data.remove('todos', todo);
    }
});
```

指定参数时，**$event** 是 San 保留的一个特殊变量，指定 $event 将引用到 DOM Event 对象。从而你可以拿到事件触发的 DOM 对象、鼠标事件的鼠标位置等事件信息。

```
san.defineComponent({
    template: '<button type="button" on-click="clicker($event)">click here</button>',

    clicker: function (e) {
        alert(e.target.tagName); // BUTTON
    }
});
```

### 自定义事件

- 在组件上通过 **on-** 前缀，可以绑定组件的自定义事件。
- MyComponent 为 Label 组件绑定了 done 事件的处理方法。

```
var MyComponent = san.defineComponent({
    components: {
        'ui-label': Label
    },

    template: '<div><ui-label bind-text="name" on-done="labelDone($event)"></ui-label></div>',

    labelDone: function (doneMsg) {
        alert(doneMsg);
    }
});
```

### 修饰符

### capture

`版本`：>= 3.3.0

在元素的事件声明中使用 capture 修饰符，事件将被绑定到捕获阶段。

```
var MyComponent = san.defineComponent({
    template: ''
        + '<div on-click="capture:mainClick">'
            + '<button on-click="capture:btnClick">click</button>'
        + '</div>',

    mainClick: function (title) {
        alert('Main');
    },

    btnClick: function (title) {
        alert('Button');
    }
});
```

`注意`：只有在支持 **addEventListener** 的浏览器环境支持此功能，老旧 IE 上使用 capture 修饰符将没有效果。

### native

`版本`：>= 3.3.0

在组件的事件声明中使用 native 修饰符，事件将被绑定到组件根元素的 DOM 事件。

```
var Button = san.defineComponent({
    template: '<a class="my-button"><slot/></a>'
});

var MyComponent = san.defineComponent({
    components: {
        'ui-button': Button
    },

    template: '<div><ui-button on-click="native:clicker(title)">{{title}}</ui-button></div>',

    clicker: function (title) {
        alert(title);
    }
});
```

有时候组件封装了一些基础结构和样式，同时希望点击、触摸等 DOM 事件由外部使用方处理。如果组件需要 fire 每个根元素 DOM 事件是很麻烦并且难以维护的。native 修饰符解决了这个问题。