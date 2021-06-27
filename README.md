## 自定义的组件

#### 表格组件

1. 基本表
使用**react-table**进行搭建，基本原理是使用**useTable**并传入两个参数**columns**和**data**
生成实例**tableInstance**, 再从实例中获取属性**getTableProps、getTableBodyProps、headerGroups、rows、prepareRow** 生成基本表; 其它各种组合类型表、排序表都是基于此开发。

```jsx
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
} = useTable({
        columns,
        data
    }, useSortBy);

return (
    <table {...getTableProps}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            <span>
                                {column.isSorted? (column.isSortedDesc? '▼' : '▲') : ''}
                            </span>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
);
```
