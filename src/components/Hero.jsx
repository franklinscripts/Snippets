import React from 'react'

const Hero = () => {
  return (
    <div className=' sm:px-20 px-5 pt-3 items-center max-w-screen-xl  mx-auto'>
     <div className='flex items-center justify-center flex-col'>
     <h1 className='text-3xl text-center mt-20 font-extrabold text-4xl'>Gorgeous Code Snippets</h1>
     <p className='pt-4 pb-4 sm:w-[540px] text-center'>With Snipper, create fully customizable code snippets in a matter of seconds right from your browser</p>
     <button className="bg-black flex items-center my-4 sm:px-[20px] px-[30px] py-[10px] gap-1 rounded-[4px] ">
 
        <b className=" text-white font-bold text-sm">Get Started</b>
        <span className='text-slate-400 border w-3'></span>
        <p className="text-gray-400">
            it's free
        </p>
    </button>
    <p className=' pb-4'>No credit card required</p>
            </div>
     <div className="max-w-screen-xl object-contain">
        <img src='/Assets/Snippet.png' className='sm:h-[100%] h-[300px] ' />
     </div>
    </div>
  )
}

export default Hero