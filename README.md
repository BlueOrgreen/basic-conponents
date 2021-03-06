# 自定义的组件

**背景**: 脱离UI框架，自己写些组件


## 目录

- [表格组件](#表格组件)
    - [基本表](#基本表) 
    - [组合表](#组合表)
    - [全局过滤器](#全局过滤器)
- [无限滚动组件](#无限滚动组件)

## 表格组件

### 基本表
[(返回上面)](#目录)

使用 ***react-table*** 进行搭建，基本原理是使用 ```useTable``` 并传入两个参数 ```columns、data```

生成实例, 再从实例中获取属性 ```getTableProps、getTableBodyProps、headerGroups、rows、prepareRow``` 

根据这些属性生成基本表; 其它各种组合类型表、排序表都是基于基本表开发。

![basic table](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/basic-component.png)

<br />

### 组合表
[(返回上面)](#目录)

主要是通过改变columns的数据结构, 
具体看这里[GROUPED_COLUMNS](https://github.com/BlueOrgreen/basic-conponents/blob/master/src/components/table/columns.js)

```js
// table/index.js 中的 columns 数据源换成 GROUPED_COLUMNS
const columns = useMemo(()=>GROUPED_COLUMNS, []);
```

![header-group-table](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/header-group-table.png)

<br />

### 全局过滤器
[(返回上面)](#目录)

可以直接在**客户端实现查询, 不再像传统的一样查询放在与后端的交互**中, 而是设置了***全局的过滤器***, 过滤整个数据源的字段内容.

主要是通过 ```useGlobalFilter``` 的hooks传入 ```useTable``` 中, 获得两个属性 ```globalFilter, setGlobalFilter```

将其传入 ***GlobalFilter*** 组件内

```jsx
// useGlobalFilter 全局过滤器hooks
const {..., state, setGlobalFilter} = useTable({...}, useGlobalFilter);
const { globalFilter } = state;

<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
```

![global-filter](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/globaFilter.gif)

<br />

## 无限滚动组件
[(返回上面)](#目录)

实现原理： 后端接口对数据进行分页，前端使用`intersection observer`监听当前list的最后一个元素，窗口出现最后一个元素后会查询
下一页的信息，添加到页面上

![infinite-scroll](https://github.com/BlueOrgreen/basic-conponents/blob/master/imgs/infinite-scroll.gif)

```jsx
const observer = useRef();
// 监听最后一个元素
const lastBookElementRef = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPage(prePage => prePage + 1)
      }
    });
    if(node) observer.current.observe(node)
  }, [loading, hasMore])
  
// 最后一个List元素
<div ref={lastBookElementRef} key={i}>{i}</div>
```
