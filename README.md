# 自定义的组件

**背景**: 像现在流行的各种UI框架, 诸如Antd类, 里面的组件封装了较多的东西, 一旦要修改样式, 不太容易修改,

因此基于此, 就想着写一些较轻量级的, 自己从头搭建, 这样可扩展性会更强, 也更灵活可控.


## 目录

- [表格组件](#表格组件)
    - [基本表](#基本表) 
    - [组合表](#组合表)


## 表格组件


### 基本表
[(返回上面)](#目录)

使用 ***react-table*** 进行搭建，基本原理是使用 ```useTable``` 并传入两个参数 ```columns、data```

生成实例, 再从实例中获取属性 ```getTableProps、getTableBodyProps、headerGroups、rows、prepareRow``` 

根据这些属性生成基本表; 其它各种组合类型表、排序表都是基于基本表开发。

![basic table](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/basic-component.png)


### 组合表
[(返回上面)](#目录)

主要是通过改变columns的数据结果, 
具体看这里[GROUPED_COLUMNS](https://github.com/BlueOrgreen/basic-conponents/blob/master/src/components/table/columns.js)

```js
// table/index.js 中的 columns 数据源换成 GROUPED_COLUMNS
const columns = useMemo(()=>GROUPED_COLUMNS, []);
```

![header-group-table](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/header-group-table.png)
