import React from 'react'
import Card from './Card'

export default function List() {
    const data = ['hello','hello', 'hello' ]
  return (
    <div className="flex justify-between flex-wrap">
      { data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}
