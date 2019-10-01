import { useEffect, useState} from 'react'
import Axios from 'axios'

export default function useBookSearch(query, pageNumber) {

  useEffect(() => {
    Axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json()',
      params: { p: query, page: pageNumber}
    }).then(res => {
      console.log(res.data);
    })
  }, [query, pageNumber])
  return null
  
}
