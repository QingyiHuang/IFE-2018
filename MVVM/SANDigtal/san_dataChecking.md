### 数据校验

- 指定组件data校验规则，对传入不符合的数据，san抛出异常

```
import san, {DataTypes} from 'san';

let MyComponent = san.defineComponent({

    dataTypes: {
        name: DataTypes.string
    }

});
```

#### DataTypes

- datatypes只会在development模式下进行数据校验

详细校验内容如下：

```
import san, {DataTypes} from 'san';

san.defineComponent({

    // 你可以声明数据为 JS 原生类型。
    // 默认的以下这些数据是可选的。
    optionalArray: DataTypes.array,
    optionalBool: DataTypes.bool,
    optionalFunc: DataTypes.func,
    optionalNumber: DataTypes.number,
    optionalObject: DataTypes.object,
    optionalString: DataTypes.string,
    optionalSymbol: DataTypes.symbol,

    // 你也可以声明数据为指定类的实例。
    // 这里会使用 instanceof 进行判断。
    optionalMessage: DataTypes.instanceOf(Message),

    // 如果你可以确定你的数据是有限的几个值之一，那么你可以将它声明为枚举类型。
    optionalEnum: DataTypes.oneOf(['News', 'Photos']),

    // 可以是指定的几个类型之一
    optionalUnion: DataTypes.oneOfType([
        DataTypes.string,
        DataTypes.number,
        DataTypes.instanceOf(Message)
    ]),

    // 数组中每个元素都必须是指定的类型
    optionalArrayOf: DataTypes.arrayOf(DataTypes.number),

    // 对象的所有属性值都必须是指定的类型
    optionalObjectOf: DataTypes.objectOf(DataTypes.number),

    // 具有特定形状的对象
    optionalObjectWithShape: DataTypes.shape({
        color: DataTypes.string,
        fontSize: DataTypes.number
    }),

    // 以上所有校验器都拥有 `isRequired` 方法，来确保此数据必须被提供
    requiredFunc: DataTypes.func.isRequired,
    requiredObject: DataTypes.shape({
        color: DataTypes.string
    }).isRequired,

    // 一个必须的但可以是任何类型的数据
    requiredAny: DataTypes.any.isRequired,

    // 你也可指定一个自定义的校验器。
    // 如果校验失败，它应该丢出一个异常。
    customProp: function (props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
            throw new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },

    // 你也可以给 `arrayOf` 和 `objectOf` 提供一个自定义校验器。
    // 如果校验失败，那么应该当抛出一个异常。
    // 对于数组或者对象中的每个元素都会调用校验器进行校验。
    // 第一个参数是这个数组或者对象，第二个参数是元素的 key。
    customArrayProp: DataTypes.arrayOf(function (dataValue, key, componentName, dataFullName) {
        if (!/matchme/.test(dataValue[key])) {
            throw new Error(
                'Invalid prop `' + dataFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    })

});
```

