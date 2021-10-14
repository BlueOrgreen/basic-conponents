import { useEffect, useState } from "react";
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [book, setBook] = useState([]); // 书籍Title
  const [hasMore, setHasMore] = useState(false) // 是否更多

  useEffect(() => {
    setBook([])
  }, [query])

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setBook((preBook) => (Array.from(new Set([
        ...preBook,
        ...res.data.docs.map(i => i.title),
      ]))
      ))
      setHasMore(res.data.docs.length > 0);
    }).catch(e => {
      setError(e)
      if(axios.isCancel(e)) return;
    })

    return () => cancel()
  }, [query, pageNumber])

  return {
    loading,
    error,
    book,
    hasMore
  };
}
