import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from './Cart';

export default function Navbar() {
      const [open,setOpen] = useState(false)
  
  return (
    <div className="navbar relative h-[80px]  ">
      <div className=" flex items-center justify-between py-[10px] px-[30px] ">
        <div className=" flex items-center gap-6  text-base">
           <Link className ="link" to="/">shoop</Link>
          
        
        </div>
        <div className="  flex items-center gap-6  ml-10 ">
            <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
         
        </div>
        <div className="right flex items-center gap-6">
          
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className=" flex items-center gap-4 cursor-pointer text-red-500">
            <SearchIcon/>
         
            <FavoriteBorderOutlinedIcon/>
            <div className=" relative" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span className='text-xs absolute w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center right-[-10px] top-[-10px]'>1</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}



