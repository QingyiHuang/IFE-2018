- [`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color): 为背景设置一个纯色。块级元素可设置背景。

- [`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image): 指定在元素的背景中出现的背景图像。
  这可以是静态文件，也可以是生成的渐变。例子：块级元素background-image: url(url)，重要图片信息要用img标签。方便可读//渐变线性渐变是通过`linear-gradient()`函数传入的，它是一个[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)属性的值。函数至少需要用逗号分隔的三个参数——背景中渐变的方向，开始的颜色和结尾的颜色。例如：

  ```
  div {
  background-image: linear-gradient(to bottom, orange, yellow);
  }
  ```

  这个渐变将从上到下，从顶部的橙色开始，然后平稳过渡到底部的黄色。可以使用关键字来指定方向 （`to bottom`，`to right`， `to bottom right`等）， 或角度值 (`0deg`相当于 `to top`，`90deg` 相当于 `to right`，直到 `360deg`，它再次相当于 `to top` ）

- `background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position):指定背景应该出现在元素背景中的位置。

- [`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat): 指定背景是否应该被重复(平铺)。属性有三：`no-repeat`: 图像将不会重复:它只会显示一次。`repeat-x`: 图像将在整个背景中水平地重复。`repeat-y`: 图像会在背景下垂直地重复。

- [`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment): 当内容滚动时，指定元素背景的行为，例如，它是滚动的内容，还是固定的?另一个可供选择的选项是指定当内容滚动时它们是如何滚动的。这是使用[`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)属性来控制的，该属性可以使用以下值：

  - `scroll`: 这将把背景修改为页面视图，因此它将在页面滚动时滚动。注意，我们说的是视图，而不是元素——如果你滚动实际的背景设置的元素，而不是页面，背景不会滚动。
  - `fixed`: 这可以在页面的位置上固定背景，所以当页面滚动时，它不会滚动，不管你是滚动页面还是背景设置的元素，它都会保持在相同的位置。
  - `local`:这个值后来被添加了(它只在Internet Explorer 9+中得到支持，而其他的则在IE4+中得到支持)，因为`scroll`值相当混乱，并且在许多情况下并没有真正做您想要的事情。  `local` 值将背景设置为它所设置的元素的背景，因此当您滚动元素时，背景会随之滚动。

- [`background`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background): 在一行中指定以上五个属性的缩写。背景简写

  可以通过使用[`background`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)属性来声明上面讨论的所有属性值(以及在更新的浏览器中的其他一些属性值)。要做到这一点，你要使用和你在单个属性中所做的相同的值，但是你把它们都放在一个由空格分隔的行上，就像这样：

  ```
  div {
  background: yellow linear-gradient(to bottom, orange, yellow) no-repeat left center scroll;
  }
  ```

- [`background-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size): 允许动态调整背景图像的大小。