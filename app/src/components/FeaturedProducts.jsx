import React from 'react'
import useFetch from '../hooks/useFetch';
import Card from './Card'

export default function FeaturedProducts({type}) {
    const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  console.log(data)
    
  return (
  <div className="featuredProducts mx-[100px] my-[150px] ">
      <div className="pb-4">
        <h1>{type} products</h1>
      </div>
      <div className="flex justify-center gap-12">
         {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}
