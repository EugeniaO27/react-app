import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carousel = ({ slides }) => {

  const [current, setCurrent] = useState(0);

  const prev = () => 
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    
  return (
    <div className='overflow-hidden relative group'>
      <div className='flex transition-transform ease-out duration-300' 
      style={{ transform: `translateX(-${current *100}%)`}}>
        {
          slides.map((s) =>{
           return <img src={s} />;
        })}
      </div>
      <div className='absolute top-0 h-full w-full flex cursor-pointer px-5 text-white items-center justify-between'>
        <button onClick={prev}
        className='p-1 rounded-full shadow bg-white/80 text-gray-950 hover:bg-white'>
         <IoIosArrowBack  size={30} />
        </button>
        <button onClick={next}
        className='p-1 rounded-full shadow bg-white/80 text-gray-950 hover:bg-white'>
         <IoIosArrowForward  size={30} />
        </button>
      </div>
      <div className='absolute w-full bottom-0 py-5 flex justify-center gap-3'>
        {slides.map((s, i) => {
          return (
            <div
             onClick={() =>{
              setCurrent(i);
             }}
             key={"circle" + i} 
             className={`w-4 h-4 rounded-full cursor-pointer
             ${i === current ? "bg-white" : "bg-gray-400" }`}>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel