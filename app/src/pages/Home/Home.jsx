import React from 'react'
import { Categories, FeaturedProducts, Slider } from '../../components'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
    </div>
  )
}
