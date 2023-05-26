import React from 'react'

const Customizable = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse justify-between sm:py-20 px-5 py-10  items-center max-w-screen-xl  mx-auto'>
    <div>
        <h1 className='font-bold text-[30px] pt-4 sm:w-[500px] w-[80%]'>A fully customizable code snippet editor</h1>
        <p className='sm:w-[500px] w-[80%]'>
            Fully customize the color scheme of your code snippet, or use our own premade schemes. Export your code snippets in JPG, PDF, PNG, or any of the other 10+ common extensions.
        </p>
        <button className="bg-black flex items-center sm:mx-0 mx-auto my-5 px-[20px] py-[10px] gap-1 rounded-[3px] ">
 
            <b className=" text-white font-bold text-sm">Get Started</b>
            
            <span className='text-slate-400 border w-3'></span>
            <p className="text-gray-500">
                it's free
            </p>
        </button>
    </div>
    <div className=''>
        <img src='/Assets/customize.png' className='w-[500px] h-[400px]'/>
    </div>
    </div>
  )
}

export default Customizable