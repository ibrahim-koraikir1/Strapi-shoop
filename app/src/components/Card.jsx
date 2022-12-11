import React from 'react'
import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className=" 50px; w-[280px] flex flex-col gap-10 mb-[50px]">
        <div className=" w-full h-[350px] overflow-hidden relative image rounded-md ">
          {item?.attributes.isNew && <span>New Season</span>}
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
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}
