"use client"
import { useState } from 'react';
import CaroImg from './caroimg';
import LogoImg from '../../assets/Rectangle.png';
import frame from '../../assets/Frame.png';
import Arrowleft from '../../assets/Arrowleft.png';
import caropic from "../../assets/caroselpic.jpeg";
import Image from 'next/image';

export default function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  const numSlides = 6;
  
  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, 5));
  };

  const handleSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  return (
    <>
    <button onClick={handleSlide}><Image src={Arrowleft} alt='Arrow' width={"64px"} height={"64px"}/></button>
    <div className="w-full h-auto relative">
      <div id="slide1" className={`absolute w-full ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <CaroImg img={caropic}/>
      </div>
      <div id="slide2" className={`absolute w-full ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
        {/* <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
        <CaroImg img={frame}/>
      </div>
      <div id="slide3" className={`absolute w-full ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
      </div>
      <div id="slide4" className={`absolute w-full ${activeSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
      </div>
      <div id="slide5" className={`absolute w-full ${activeSlide === 4 ? 'opacity-100' : 'opacity-0'}`}>
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
      </div>
      <div id="slide6" className={`absolute w-full ${activeSlide === 5 ? 'opacity-100' : 'opacity-0'}`}>
        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
      </div>
      
      {/* <button onClick={handlePrevSlide} className="btn btn-circle left-0 absolute z-10">❮</button>
      <button onClick={handleNextSlide} className="btn btn-circle right-0  absolute z-10">❯</button> */}
    </div>
    </>
  );
}
