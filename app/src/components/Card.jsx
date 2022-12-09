import React from 'react'
import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div >
        <div >
          {item?.attributes?.isNew && <span>New Season</span>}
         
      </div>
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3>${item?.oldPrice || item?.attributes?.price + 20}</h3>
          <h3>${item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  )
}
