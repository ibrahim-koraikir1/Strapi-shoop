import React from 'react'
import { FeaturedProducts, Slider } from '../../components'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Slider/>
      <FeaturedProducts/>
    </div>
  )
}
