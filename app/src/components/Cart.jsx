import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useSelector } from "react-redux"
import { removeItem, resetCart } from "../redux/cartReducer"
import { useDispatch } from "react-redux"
import { makeRequest } from "../makeRequest"

export default function Cart() {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

   const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

    const  handlePayment = ()=>{
        console.log('item')
    }
  return (
    <div className="absolute  right-[20px]  top-[80px] z-50 bg-white p-[40px]">
      <h1>Products in your cart</h1>
            {products?.map((item) => (
        <div className="  flex items-center justify-between gap-5 mb-8">
          <img className='w-[80px] h-[100px] object-cover' src={"http://localhost:1337" + item.img} alt="" />
          <div >
            <h1  className=" text-lg font-medium">{item.title}</h1>
            <p className=' text-gray-700 mb-3 text-sm'>{item.desc?.substring(0, 100)}</p>
            <div className="text-[#2879fe]">
             {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="text-red-700 text-3xl cursor-pointer"
             onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
        ))}
      <div className="flex justify-between mb-5 font-normal text-lg">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className=' w-[250px] p-2 flex items-center justify-center gap-5 cursor-pointer border-none text-white mb-5 bg-[#2879fe]' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="text-red-800 text-xs cursor-pointer" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
}
