### 数据操作

- san组件的data上提供的数据操作方法用以操作数据，相应视图会被自动刷新。

#### 初始化

- [ ] 定义initData方法，可以在定义组建初始化的时候指定组件初始化时的数据，initData方法反回组件实例的初始化数据。

  ```
  san.defineComponent({
  	initData:	function(){
  		return{
  			width:200,
  			top:100,
  			left:-1000
  		};
  	}
  });

  ```

#### set

- set方法是最常用的操作数据的方法，作用相当于赋值


- [ ] ```
  san.defineComponent({
      attached:function(){
          requestUser().then(this.userReceived.bind(this));
      },
      userReceived:function(){
          this.data.set('user',data);
      },
      changeEmail:function(email){
          this.data.set('user.email',email);
      }
  });
  ```

### merge

- 类似于js的Object.assign() 用于将目标数据对象（target）和传入数据对象（source）的键进行合并

```
san.defineComponent({
    attached: function () {
        requestUser().then(this.updateUserInfo.bind(this));
    },

    updateUserInfo: function (data) {
        this.data.merge('user', data);
    }
});
```

### apply

- 接受一个函数作为参数，传入当前的值到函数，然后用新返回的值更新它 类似Array.prototype.map

### 数组方法

- [ ] 与js的数组操作方法同名，除了删除操作
- [ ] **push** 数组末尾插入一条数据

```
san.defineComponent({
    addUser: function (name) {
        this.data.push('users', {name: name});
    }
});
```

- [ ] pop在数组尾部弹出一条数据

```
san.defineComponent({
    rmLast: function () {
        this.data.pop('users');
    }
});
```

- [ ] unshift 在数组开始插入一条数据

```
san.defineComponent({
    addUser: function (name) {
        this.data.unshift('users', {name: name});
    }
});
```

- [ ] shift在数组开始弹出一条数据

```
san.defineComponent({
    rmFirst: function () {
        this.data.shift('users');
    }
});
```

- [ ] remove当数组项与传入项完全相等（===）的时候，数组项才会被移除

```
san.defineComponent({
    rm: function (user) {
        this.data.remove('users', user);
    }
});
```

- [ ] removeAt

通过数据项的索引移除一条数据。

```
san.defineComponent({
    rmAt: function (index) {
        this.data.removeAt('users', index);
    }
});
```

- [ ] splice

向数组中添加或删除项目。

```
san.defineComponent({
    rm: function (index, deleteCount) {
        this.data.splice('users', [index, deleteCount]);
    }
});
```