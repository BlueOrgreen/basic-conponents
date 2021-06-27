# 自定义的组件

## 目录

- [表格组件](#表格组件)
    - [基本表](#基本表) 

## 表格组件


#### 基本表
[(返回上面)](#目录)

使用 **react-table** 进行搭建，基本原理是使用 **useTable** 并传入两个参数 **columns、data**
生成实例 **tableInstance** , 再从实例中获取属性 **getTableProps、getTableBodyProps、headerGroups、rows、prepareRow** 生成基本表; 其它各种组合类型表、排序表都是基于此开发。

![basic table](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/basic-component.png)

