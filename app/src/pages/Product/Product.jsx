import React, { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
export default function Product() {
    const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
     <div className=" p-[20px 50px] flex gap-12">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="flex-1 flex gap-5">
            <div className="flex-1">
              <img
              className='  w-full h-[150px ] object-cover cursor-pointer mb-2'
                src={
                 "http://localhost:1337"+
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                className='  w-full h-[150px ] object-cover cursor-pointer mb-2'
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="flex-5">
              <img
              className=' w-full max-h-[800px] object-cover'
                src={
                 "http://localhost:1337"+
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="  flex-1 flex flex-col gap-8s">
            <h1>{data?.attributes?.title}</h1>
            <span className=" text-3xl text-[#2879fe] font-medium">${data?.attributes?.price}</span>
            <p className='  text-lg font-light '>{data?.attributes?.desc}</p>
            <div className=" flex items-center gap-8">
              <button
              className='  w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none'
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="w-[250px] p-2 bg-red-500 text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="flex gap-5">
              <div className=" flex items-center gap-2 text-[#2879fe] text-sm">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="flex items-center gap-2 text-[#2879fe] text-sm">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm mb-8 text-gray-700">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr  className=' w-[200px] border-[1px px solid rgb(238, 237, 237)]'/>
            <div className=" flex flex-col gap-2 text-sm mb-8 text-gray-700 ">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
