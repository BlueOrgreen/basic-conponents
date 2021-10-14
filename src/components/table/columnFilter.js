import React from 'react';
import { useAsyncDebounce } from 'react-table';

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span style={{display: 'flex'}}>
      <span style={{width: '40%'}}>列查询： {' '}</span>
      <input style={{width: '60%'}} value={filterValue || ''} onChange={e => setFilter(e.target.value)} />
    </span>
  )
}
