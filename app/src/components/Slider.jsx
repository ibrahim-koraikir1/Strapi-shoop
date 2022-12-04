import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="overflow-hidden w-[100vw] relative" style={{  height: `calc(100vh - 80px)`}}>
      <div className="w-[300vw] translate-x-3 h-full flex" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img className=" w-[100vw] h-full object-cover" src={data[0]} alt="" />
        <img className=" w-[100vw] h-full object-cover" src={data[1]} alt="" />
        <img className=" w-[100vw] h-full object-cover" src={data[2]} alt="" />
      </div>
      <div className=" w-[fit-content]  flex absolute left-0 right-0 bottom-5 m-auto gap-3">
        <div className=" w-12 h-12 border-[1px solid #999] flex items-center justify-center cursor-pointer" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className=" w-12 h-12 border-[1px solid #999] flex items-center justify-center cursor-pointer" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;