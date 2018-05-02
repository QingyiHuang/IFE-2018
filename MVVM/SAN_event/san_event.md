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





## SAN事件通信，以及事件处理相关api

### fire

- 派发一个自定义事件，san为组件提供了自定义事件功能，组件开发者可以通过改方法派发事件，事件可以在视图模板中通过“on-”的方式绑定监听，亦可通过组件实例on方法监听
- 用法：fire({str},eventArgument)

```
var Label = san.defineComponent({
    template: '<template class="ui-label"><a on-click="clicker" title="{{text}}">{{text}}</a></template>',

    clicker: function () {
        this.fire('customclick', this.data.get('text') + ' clicked');
    }
});

var MyComponent = san.defineComponent({
    initData: function () {
        return {name: 'San'};
    },

    components: {
        'ui-label': Label
    },

    template: '<div><ui-label text="{{name}}" on-customclick="labelClicker($event)"></ui-label></div>',

    labelClicker: function (doneMsg) {
        alert(doneMsg);
    }
});
```

### dispatch

- 派发一个消息，消息将沿着组件树向上传递，直到遇到第一个处理该消息的组件，上层组件通过massages声明组件要处理的消息，消息主要用于组件与非owner的上层组件进行通信

###### 消息

通过 **dispatch** 方法，组件可以向组件树的上层派发消息。

```
var SelectItem = san.defineComponent({
    template: '<li on-click="select"><slot></slot></li>',

    select: function () {
        var value = this.data.get('value');

        // 向组件树的上层派发消息
        this.dispatch('UI:select-item-selected', value);
    }
});
```

消息将沿着组件树向上传递，直到遇到第一个处理该消息的组件，则停止。通过 **messages**可以声明组件要处理的消息。**messages** 是一个对象，key 是消息名称，value 是消息处理的函数，接收一个包含 target(派发消息的组件) 和 value(消息的值) 的参数对象。

```
var Select = san.defineComponent({
    template: '<ul><slot></slot></ul>',

    // 声明组件要处理的消息
    messages: {
        'UI:select-item-selected': function (arg) {
            var value = arg.value;
            this.data.set('value', value);

            // arg.target 可以拿到派发消息的组件
        }
    }
});
```

消息主要用于组件与非 **owner** 的上层组件进行通信。比如，slot 内组件 SelectItem 的 **owner** 是更上层的组件，但它需要和 Select 进行通信。

```
san.defineComponent({
    components: {
        'ui-select': Select,
        'ui-selectitem': SelectItem
    },

    template: ''
        + '<div>'
        + '  <ui-select value="{=value=}">'
        + '    <ui-selectitem value="1">one</ui-selectitem>'
        + '    <ui-selectitem value="2">two</ui-selectitem>'
        + '    <ui-selectitem value="3">three</ui-selectitem>'
        + '  </ui-select>'
        + '</div>'
});
```
定义子组件的名称时不能用大写字母.