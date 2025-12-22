import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className=' bg-white relative z-50  dark:bg-gray-800 mt-10 shadow-inner shadow-gray-300 dark:shadow-gray-700 '>
      <div className=' flex justify-between items-center p-7 border-b border-gray-300'>
<div  className=' flex'>
 <img
          src="https://assignment-sass.vercel.app/assets/logo-BfNap0Pe.png" className=' w-8'
          alt="Logo"
        />
  
  <span className='font-bold text-2xl'>Recipe</span>
</div>
 <span className=' text-2xl font-bold text-blue-600'>Route</span>

      </div>
      <div className=' p-6'>
        <p className='text-gray-400 text-center'>© 2025 Nagy Osama™. All Rights Reserved.</p>
      </div>
    </footer>
      
    </>
  )
}
