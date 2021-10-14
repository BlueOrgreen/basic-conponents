import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';

const InfiniteScroll = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1)
  }
  const { loading, error, book, hasMore } = useBookSearch(query, page)

  const observer = useRef();

  const lastBookElementRef = useCallback(node => {
    // 如果正在加载，无需引入infinite scroll
    if(loading) return;
    // 断开上次的intersection observer，进行重连
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPage(prePage => prePage + 1)
      }
    });
    if(node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <React.Fragment>
      <input type="text" value={query} onChange={handleSearch} />
      {book.map((i, index) => {
        if(book.length === index + 1) {
          return <div ref={lastBookElementRef} key={i}>{i}</div>
        } else {
          return <div key={i}>{i}</div>;
        }
      })}
      {loading && <div>Loading...</div>}
    </React.Fragment>
  );
}

export default InfiniteScroll;
