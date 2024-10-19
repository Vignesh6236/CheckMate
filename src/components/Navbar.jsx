import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gradient-to-r from-indigo-400 to-cyan-400 py-3'>
        <div className="logo">
            <span className='text-xl font-bold  mx-20 cursor-pointer'>
                QuickTick
            </span>
        </div>
        <ul className="flex gap-8 mx-20">
            <li className='cursor-pointer hover:font-bold hover:transition-all duration-100 t'>Home</li>
            <li className='cursor-pointer hover:font-bold hover:transition-all duration-100'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
