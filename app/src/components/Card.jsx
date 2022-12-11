import React from 'react'
import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="w-[280px] flex flex-col gap-2 ">
        <div className="w-full h-[350px] overflow-hidden relative image rounded-md ">
          {item?.attributes?.isNew && <span className='absolute top-1 left-1 bg-white text-teal-800 p-[3px 5px] z-10 font-bold text-sm'>New Season</span>}
          <img
            src={
             "http://localhost:1337" + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="w-full h-full absolute object-cover   mainImg"
          />
          <img
            src={
             "http://localhost:1337" + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg w-full h-full absolute object-cover "
          />
        </div>
        <h2>{item?.attributes?.title}</h2>
        <div className="prices flex gap-5">
          <h3 className='font-normal text-base text-gray-700 line-through'>${item?.oldPrice || item?.attributes?.price + 20}</h3>
          <h3 className='font-normal text-base'>${item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  )
}
