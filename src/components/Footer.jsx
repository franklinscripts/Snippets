import React from 'react'

const Footer = () => {
  return (
    <div className='sm:flex block h-[100px] justify-between sm:py-20 px-5 py-10 items-center max-w-screen-xl  mx-auto'>
    <div>
        <img src='/Assets/Logo.svg'/>
    </div>
    <div>
        <ul className='flex items-center gap-8'>
            <li><a href='#'>Terms and Conditions</a></li>
            <li><a href='#'>Privacy Policy</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Footer