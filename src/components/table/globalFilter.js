import React from 'react';
import { useAsyncDebounce } from 'react-table';

export const GloalFilter = ({filter, setFilter}) => {
  return (
    <span>
      全局查询： {' '}
      <input value={filter} onChange={e => setFilter(e.target.value)} />
    </span>
  )
}
