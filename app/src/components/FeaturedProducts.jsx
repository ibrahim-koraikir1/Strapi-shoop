import React from 'react'
import Card from './Card'

export default function FeaturedProducts({type}) {

    const  data = ["heloo" , "heloo"]
  return (
  <div className="featuredProducts mx-[100px] my-[150px] ">
      <div className="pb-4">
        <h1>{type} products</h1>
      </div>
      <div className="flex justify-center gap-12">
        {data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}
