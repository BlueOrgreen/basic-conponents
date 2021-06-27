# 自定义的组件

背景: 像现在流行的各种UI框架, 诸如Antd类, 里面的组件封装了较多的东西, 一旦要修改样式, 不太容易修改,

因此基于此, 就想着写一些较轻量级的, 自己从头搭建, 这样可扩展性会更强, 也更灵活可控.


## 目录

- [表格组件](#表格组件)
    - [基本表](#基本表) 

## 表格组件


#### 基本表
[(返回上面)](#目录)

使用 ***react-table*** 进行搭建，基本原理是使用 ```useTable``` 并传入两个参数 ```columns、data```

生成实例, 再从实例中获取属性 ```getTableProps、getTableBodyProps、headerGroups、rows、prepareRow``` 

根据生成基本表; 其它各种组合类型表、排序表都是基于此开发。

![basic table](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/basic-component.png)

