import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import { GloalFilter } from './globalFilter';
import './index.css';

export const CustomBasicTable = () => {
    const columns = useMemo(()=>COLUMNS, []);
    // const columns = useMemo(()=>GROUPED_COLUMNS, []);
    const data = useMemo(()=>MOCK_DATA, []);

    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        // footerGroups,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance;

    const { globalFilter } = state;

    return (
      <React.Fragment>
        <GloalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
            {/* <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => (
                                <td {...column.getFooterGroupProps}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))
                }
            </tfoot> */}
        </table>
        </React.Fragment>
    )
};
