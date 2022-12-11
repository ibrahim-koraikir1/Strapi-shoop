import React from 'react'
import useFetch from '../hooks/useFetch';
import Card from './Card'

export default function List({ subCats, maxPrice, sort, catId }) {
     const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="flex justify-between flex-wrap">
     {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}
