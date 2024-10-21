import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 py-3'>
      <div className="logo">
        <span className='name text-xl font-bold  mx-20 cursor-pointer hover:transform hover:scale-150'>
          QuickTick!
        </span>
      </div>
    </nav>
  )
}

export default Navbar
