## 类型选择器（又名元素选择器）

## 类/id选择器

## 存在和值（Presence and value）属性选择器

这些属性选择器尝试匹配精确的属性值：

- `[attr]`：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
- `[attr=val]`：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
- `[attr~=val]`：该选择器仅选择 attr 属性的值（以空格间隔出多个值）中有包含 val 值的所有元素，比如位于被空格分隔的多个类（class）中的一个类。

让我们看一个以下面的HTML代码片段为例：

```
我的食谱配料: <i lang="fr-FR">Poulet basquaise</i>
<ul>
  <li data-quantity="1kg" data-vegetable>Tomatoes</li>
  <li data-quantity="3" data-vegetable>Onions</li>
  <li data-quantity="3" data-vegetable>Garlic</li>
  <li data-quantity="700g" data-vegetable="not spicy like chili">Red pepper</li>
  <li data-quantity="2kg" data-meat>Chicken</li>
  <li data-quantity="optional 150g" data-meat>Bacon bits</li>
  <li data-quantity="optional 10ml" data-vegetable="liquid">Olive oil</li>
  <li data-quantity="25cl" data-vegetable="liquid">White wine</li>
</ul>
```

和一个简单的样式表：

```
/* 
    具有"data-vegetable"属性的所有元素,
    将被给予绿色的文本颜色
*/
[data-vegetable] {
  color: green
}

/* 
    具有"data-vegetable"属性且属性值刚好是"liquid"的所有元素，
    将被给予金色背景颜色 
*/
[data-vegetable="liquid"] {
  background-color: goldenrod;
}

/* 
    具有"data-vegetable"属性且属性值包含"spicy"的所有元素，
    即使某元素的该属性还包含其他属性值，
    都会被给予红色的文本颜色 
*/
[data-vegetable~="spicy"] {
  color: red;
}
```

## 子串值（Substring value）属性选择器

这种情况的属性选择器也被称为“伪正则选择器”

- `[attr|=val]` : 选择attr属性的值是 val 或值以 val- 开头的元素（-用来处理语言编码）。
- `[attr^=val]` : 选择attr属性的值以val开头（包括 val）的元素。
- `[attr$=val]` : 选择attr属性的值以val结尾（包括 val）的元素。
- `[attr*=val]` : 选择attr属性的值中包含字符串 val 的元素。

```
/* 语言选择的经典用法 */
[lang|="fr"] {  // filter
  font-weight: bold;
}

/* 
    具有"data-vegetable"属性含有值"not spicy"的所有元素,都变回绿色
*/
[data-vegetable*="not spicy"] {
  color: green;
}

/* 
   具有"data-quantity"属性其值以"kg"结尾的所有元素*/
[data-quantity$="kg"] {
  font-weight: bold;
}

/* 
   具有属性"data-quantity"其值以"optional"开头的所有元素 
*/
[data-quantity^="optional"] {
  opacity: 0.5;
}
```

## 伪类（Pseudo-class）

一个 CSS  [伪类（pseudo-class）](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 是一个以冒号(`:`)作为前缀的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。你可能希望某个元素在处于某种状态下呈现另一种样式，例如当鼠标悬停在元素上面时，或者当一个 checkbox 被禁用或被勾选时，又或者当一个元素是它在 DOM 树中父元素的第一个孩子元素时。

- [`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active)
- [`:any`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:any)
- [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)
- [`:default`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default)
- [`:dir()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir)
- [`:disabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled)
- [`:empty`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)
- [`:enabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled)
- [`:first`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first)
- [`:first-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)
- [`:first-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type)
- [`:fullscreen`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen)
- [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)
- [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)
- [`:indeterminate`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate)
- [`:in-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range)
- [`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid)
- [`:lang()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang)
- [`:last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)
- [`:last-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type)
- [`:left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left)
- [`:link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link)
- [`:not()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
- [`:nth-child()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)
- [`:nth-last-child()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child)
- [`:nth-last-of-type()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type)
- [`:nth-of-type()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)
- [`:only-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child)
- [`:only-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type)
- [`:optional`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional)
- [`:out-of-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range)
- [`:read-only`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only)
- [`:read-write`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write)
- [`:required`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required)
- [`:right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right)
- [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
- [`:scope`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope)
- [`:target`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target)
- [`:valid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid)
- [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)

用法：

```
/* 当光标悬停于链接，键盘激活或锁定
链接时，我们让链接呈现高亮 */
a:hover,
a:active,
a:focus {
  color: darkred;
  text-decoration: none;
}
```

## 伪元素

 

[伪元素（Pseudo-element）](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)跟伪类很像，但它们又有不同的地方。它们都是关键字 —— 但这次伪元素前缀是两个冒号 (`::`) —— 同样是添加到选择器后面达到指定某个元素的某个部分。

- [`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)
- [`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)
- [`::first-letter`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter)
- [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line)
- [`::selection`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection)
- [`::backdrop`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::backdrop)

它们都拥有特别的行为和有趣的特性，但我们不会在这里对它们都进行深入探究。

### 一个伪元素（pseudo-element）例子

我们在这里仅展示一个简单的 CSS 例子，就是如何在所有超链接元素后面的增加一个箭头：

```
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS">CSS</a> defined in the MDN glossary.</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML">HTML</a> defined in the MDN glossary.</li>
</ul>
```

让我们加上 CSS 规则：

```
/* All elements with an attribute "href", which values
   start with "http", will be added an arrow after its
   content (to indicate it's an external link) */
[href^=http]::after {
  content: '⤴';
}
```

### 组合器选择器

demo: .id table tr td {}