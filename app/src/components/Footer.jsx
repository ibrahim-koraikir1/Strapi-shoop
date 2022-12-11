import React from 'react'

export default function Footer() {
  return (
      <div className=" m-[100px 200px 20px 200px]">
      <div className=" flex gap-12">
        <div className="iten">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="iten">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="iten">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="iten">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-between mt-12">
        <div className="flex items-center ">
      
          <span className="ml-5 text-xs text-gray-600">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img  className='h-12' src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
