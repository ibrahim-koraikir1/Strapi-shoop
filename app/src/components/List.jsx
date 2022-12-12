import React from 'react'
import useFetch from '../hooks/useFetch';
import Card from './Card'

export default function List({ subCats, maxPrice, sort, catId }) {
       const { data, loading, error } = useFetch(
    `/products?populate=*&`
  );
  
  console.log(data)
  return (
    <div className="flex justify-between flex-wrap">
     {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}
