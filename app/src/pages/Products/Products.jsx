import React, { useState } from 'react'
import { List } from '../../components';

export default function Products() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  return (
     <div className="flex justify-center p-[50px]">
      <div className="flex-1 sticky h-full  top-12">
        <div className="mb-8">
          <h2 className='mb-5'>Product Categories</h2>
         
        </div>
        <div className="mb-8">
          <h2 className='mb-5' >Filter by price</h2>
          <div className="mb-3">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
             onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className='mb-5'>Sort by</h2>
          <div className="mb-3">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
             
            />
            <label className='ml-3' htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="mb-3">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
           
            />
            <label className='ml-3' htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="imgflex ">
        <img
          className="w-full h-[300px] object-cover mb-12 "
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      <List />
      </div>
    </div>
  )
}
