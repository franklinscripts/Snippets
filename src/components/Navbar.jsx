import React from 'react'
import Hero from './Hero'

function Navbar() {
  return (
    <div className='bg-hero w-full bg-no-repeat bg-cover'>

    <div className="flex justify-between sm:py-4 px-5 py-4 items-center max-w-screen-xl  mx-auto">
    <div>
        <img src="/Assets/Logo.svg" alt='logo'/>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class="sm:hidden flex" aria-controls="navbar-default" aria-expanded="false">
    <img src='/Assets/Menu.svg' />
    </button>
    <div className="sm:flex  hidden items-center gap-4 cursor-pointer ">
        <img className='w-[20px]' src="/Assets/search.svg" />
        <a href="#" className="font-thin ">Sign in</a>
        <button className="bg-black flex items-center px-[20px] py-[10px] gap-1 rounded-[3px] ">
 
            <b className=" text-white font-bold text-sm">Get Started</b>
            
        <span className='text-slate-400 border w-3'></span>
            <p className="text-gray-500">
                it's free
            </p>
        </button>
    </div>
    </div>
    <Hero />
    </div>
  )
}

export default Navbar