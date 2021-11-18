## vuepress-plugin-runtus-aplayer
> 集成了aplayer的vuepress插件

### Installation
```shell
yarn add vuepress-plugin-runtus-aplayer
# or
npm install vuepress-plugin-runtus-aplayer
```

### Usage
```js
module.exports = {
    plugins: [
        'runtus-aplayer'
    ]
}
```

### Options
#### position
* Type: `Object`
* Require: `false`

```js
// example
{
    position: {
        top: xxx,
        left: xxx,
        bottom: xxx,
        right: xxx
    }
}
```

* **其余设置参考aplayer[aplayer官方文档](https://aplayer.js.org/#/zh-Hans/)**
