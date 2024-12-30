# 内置组件

为了更快的搭建数据管理平台, vueAdmin 基于 elementPlus 开发, 除了 elementPlus 的组件外, 还封装了一些常用组件. 如下:

## 页面组件



### dataTable

数据表格, 最常用的组件之一, 用于列表展示数据信息. 集成分页、查询等功能. 可以用在 [用户信息](/contract#用户信息)接口返回的 `menu` 中.

该组件在加载时会发起 GET 请求获取表格数据及相关配置. 默认会向同路径接口请求, 也可以配置 fetch 参数手动控制请求内容. 返回内容如下:

```json
{ code: 200, message: '', data: {
    rows: [],
    columns: [],
    actions: [],
    search: [],
    advSearch: [],
    total: 0
}}
```

| 字段      | 描述             | 演示数据                                                     |
| --------- | ---------------- | ------------------------------------------------------------ |
| rows      | 实际数据         | [<br />{id: 1, title: '标题', createAt: '2012-12-12'},<br />{id: 2, title: '', createAt: ''}<br />] |
| columns   | 表格列的配置     | [<br />{key: 'id', label: '编号'},<br />{key: 'title', label: '标题'},<br />{key: 'createAt', label: '创建时间'}<br />] |
| actions   | 表格操作项的配置 | [<br />{key: "create", label: "创建", icon: "ri-add-circle-line", component: "form", positions: ["top"]}<br />] |
| search    | 搜索项的配置     | [<br />{ key: "name", label: "姓名", placeholder: "请输入姓名" }<br />] |
| advSearch | 高级搜索的配置   | [<br />{ key: "name", label: "姓名", placeholder: "请输入姓名" }<br />] |
| total     | 总数据条数       | 10                                                           |

#### columns

表格列的配置, 具体格式如下:

| 字段           | 数据格式 | 描述           | 备注                                   |
| -------------- | -------- | -------------- | -------------------------------------- |
| key            | string   | 唯一id         | 与rows中的key对应.                     |
| label          | string   | 显示名称       |                                        |
| component      | string   | 组件名称       | 可使用[内联组件](#内联组件)            |
| componentProps | {}       | 组件的配置     |                                        |
| fetch          | {}       | 拉取数据的配置 | 详见[数据获取](#数据获取)              |
| props          | {}       | 当前列的配置   | elementPlus 中 el-table 的 column 配置 |



#### actions

表格操作项的配置, 具体格式如下:

| 字段           | 数据格式                      | 描述               | 备注                                                         |
| -------------- | ----------------------------- | ------------------ | ------------------------------------------------------------ |
| key            | string                        | 唯一id             | 在自动构建 fetch url 时会用到此参数                          |
| label          | string                        | 显示名称           |                                                              |
| icon           | ri-\*                         | 图标, 没有则不显示 | remixIcon 图标命名                                           |
| component      | string                        | 组件名称           |                                                              |
| componentProps | {}                            | 组件的配置         |                                                              |
| showType       | dialog \| drawer \| slideover | 展示方式           | 默认为 dialog<br />drawer 和 slideover 都是侧边滑出          |
| showTypeProps  | {}                            | 展示方式的配置     |                                                              |
| positions      | ['top', 'row']                | 展示位置           | top: 表格左上方<br />row: 表格内, component = actions 的那列 |
| props          | {}                            | 当前操作按钮的配置 | elementPlus 的 el-button 的配置                              |
| fetch          | {}                            | 拉取数据的配置     | 详见[数据获取](#数据获取)                                    |
| submit         | {}                            | 提交数据的配置     | 详见[数据提交](#数据提交)                                    |
| disabled       | {top: {}, row: {}}            | 当前操作的禁用条件 | 符合 [sift](https://github.com/crcn/sift.js#readme) 的配置, 分别处理 top 和 row |
| invisible      | {top: {}, row: {}}            | 当前操作的可见性   | 同上                                                         |



#### search

搜索项的配置, 会显示在表格右上角区域, 建议配置1~2个即可, 更多请放入 advSearch, 具体格式请参考[表单组件](#表单组件)



#### advSearch

高级搜索的配置项, 与 search 搜索的配置格式相同. 



## 表单组件

如果要通过接口配置一个完整的表单, 首先需要一个接口来拉取表单项配置. 然后才是渲染表单以及提交表单.

为方便数据操作, 拉取表单数据的接口放在了当前表单的父级去配置, 可一同配置的还有提交表单的配置.

这里的配置仅仅是一个完整表单各项的配置. 具体如下:

| 字段           | 数据格式 | 描述     | 备注     |
| -------------- | -------- | -------- | -------- |
| key            | string   | 唯一id   |          |
| label          | string   | 显示名称 |          |
| placeholder    | string   | 占位内容 |          |
| component      | string   | 组件名称 | 详见下文 |
| componentProps | {}       | 组件配置 |          |

### input

文本框, 默认组件.

未声明 component 的表单项会以当前组件渲染. 组件配置可参考 elementPlus 的 el-input. 

注意: 未处理的 component 也会渲染此组件, component 的值就是 el-input 的 type. 比如 `component="textarea"`就基于 el-input 渲染一个多行文本.

### select

下拉菜单, 支持以下配置项:

| 字段         | 数据格式                                                     | 描述           | 备注                                                  |
| ------------ | ------------------------------------------------------------ | -------------- | ----------------------------------------------------- |
| options      | [{ label: "男", value: "male" }]                             | 定义菜单项     | 注意, 当前配置在componentProps外面, 计划统一放入其中. |
| fetchOptions | {<br/>                url: "/products",<br/>                method: "POST",<br/>                dataKey: '',<br/>                labelKey: 'name',<br/>                valueKey: 'id',<br/>                params: {limit: 999},<br/>            } | 异步拉取菜单项 | 注意, 当前配置在componentProps外面, 计划统一放入其中. |
|              |                                                              |                |                                                       |



### date

日期选择器

## 内联组件

针对展示内容的再处理. 比如把表格中某列图片图片URI地址渲染为一列图片; 或者是给当前内容增加超链接, 点击可查看此内容的详细信息.

> [!WARNING]
>
> 注意:
> 组件是可用的, 但配置项我总感觉乱乱的, 需要规整/统一.

### copy

在当前内容的后方(或前方)显示一个复制操作的按钮, 点击复制当前内容. 可配置以下参数

| 字段     | 数据格式        | 描述      | 备注              |
| -------- | --------------- | --------- | ----------------- |
| position | before \| after | 按钮位置  | 默认为 before     |
| type     |                 | 按钮 type | el-button 的 type |
|          |                 |           |                   |



### detail

展示内容会以超链接的形式展示, 点击后弹窗显示数据详情. 可配置以下参数:

| 字段          | 数据格式                      | 描述           | 备注                                                |
| ------------- | ----------------------------- | -------------- | --------------------------------------------------- |
| showType      | dialog \| drawer \| slideover | 展示方式       | 默认为 dialog<br />drawer 和 slideover 都是侧边滑出 |
| showTypeProps | {}                            | 展示方式的配置 |                                                     |
| fetch         | {}                            | 拉取数据的配置 | 详见[数据获取](#数据获取)                           |

### enum

以 el-tag 的形式展示内容. 可配置以下参数:

| 字段    | 数据格式 | 描述                                                         | 备注                                                         |
| ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| options | [{}]     | 每项 el-tag 的配置. 根据当前内容去 options 中找 value 相同的值, 显示为 label 的值. | {<br/>    label: "女",<br/>    value: "2",<br/>    props: {<br/>        type: "danger",<br/>    },<br/>}, |
|         |          |                                                              |                                                              |

### table

展示内容会以超链接的形式展示, 点击后弹窗显示数据列表. 可配置以下参数:

| 字段          | 数据格式                      | 描述           | 备注                                                |
| ------------- | ----------------------------- | -------------- | --------------------------------------------------- |
| showType      | dialog \| drawer \| slideover | 展示方式       | 默认为 dialog<br />drawer 和 slideover 都是侧边滑出 |
| showTypeProps | {}                            | 展示方式的配置 |                                                     |
| fetch         | {}                            | 拉取数据的配置 | 详见[数据获取](#数据获取)                           |



## 数据获取

获取数据时, vueAdmin 会发起一个携带 token 的 GET 请求, 并按照标准格式返回数据. 整个项目的数据获取做了统一配置, key 为 fetch, value 为 object 对象,  具体配置如下:

| 字段   | 数据格式                                                 | 描述              | 备注                                                         |
| ------ | -------------------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| url    | string                                                   | 请求地址, 可为空. | 默认的请求接口的地址同当前 url 地址的 path 路径. 如果是弹窗请求, 则根据 params 中配置的 key 追加到当前的 GET 参数中. |
| params | [<br />'string': [key, alias],<br /> {key: value}<br />] | GET 参数          | 数组的每一项可以是字符串, 数组或对象.<br />string: 即 GET 参数的 key, value 会在当前数据中寻找相同 key 的值.<br />[key, alias]: 数组模式跟 string 类似, value 在当前数据中寻找相同 key 的值, 但发送 GET 参数的时候以 alias 作为 key<br />{key: value}: 对象模式相当于在 GET 参数增加一个固定的参数 |
| config | {}                                                       | 请求头的配置      | 请参考 `axios`                                               |
|        |                                                          |                   |                                                              |



## 数据提交

提交数据时, vueAdmin 会发起一个携带 token 的 POST 请求, 并按照标准格式返回数据. 整个项目的数据提交也做了统一配置, key 为 submit, value 为 object 对象,  具体配置如下:

| 字段   | 数据格式 | 描述               | 备注                   |
| ------ | -------- | ------------------ | ---------------------- |
| url    | string   | 提交地址, 可为空.  | 逻辑同 fetch 的 url    |
| params | []       | 提交时的 get 参数  | 逻辑同 fetch 的 params |
| data   | []       | 提交时的 post 参数 | 逻辑同 params          |
| config | {}       | 请求头的配置       | 请参考 `axios`         |

> [!tip]
>
> 如果没有配置 submit , 则会使用 fetch 中的配置信息
