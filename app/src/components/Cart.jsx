import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Cart() {

    const  handlePayment = ()=>{
        console.log('item')
    }
  return (
    <div className="absolute  right-[20px]  top-[80px] z-50 bg-white p-[40px]">
      <h1>Products in your cart</h1>
      
        <div className="  flex items-center justify-between gap-5 mb-8">
          <img className='w-[80px] h-[100px] object-cover' src={'https://www.netlify.com/img/global/badges/netlify-light.svg'} alt="" />
          <div >
            <h1  className=" text-lg font-medium"></h1>
            <p className=' text-gray-700 mb-3 text-sm'>33</p>
            <div className="text-[#2879fe]">
             44
            </div>
          </div>
          <DeleteOutlinedIcon
            className="text-red-700 text-3xl cursor-pointer"
            
          />
        </div>
     
      <div className="flex justify-between mb-5 font-normal text-lg">
        <span>SUBTOTAL</span>
        <span>${33}</span>
      </div>
      <button className=' w-[250px] p-2 flex items-center justify-center gap-5 cursor-pointer border-none text-white mb-5 bg-[#2879fe]' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="text-red-800 text-xs cursor-pointer" onClick={() => console.log(33)}>
        Reset Cart
      </span>
    </div>
  )
}
