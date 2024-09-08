import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
        <div className='container px-4 flex justify-between items-center h-16'>
            <h3 className='text-2xl font-bold '>Travel</h3>
            <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
            <Link to="/" className='px-6 py-2 hover:underline hover:bg-black hover:text-white'>Home</Link>
            <Link to="/gallery" className='px-6 py-2 hover:bg-black hover:underline hover:text-white'>Gallery</Link>
            <Link to="/contact" className='px-6 py-2 hover:bg-black hover:underline hover:text-white'>Contact</Link>
            <Link to="/about" className='px-6 py-2 hover:bg-black hover:underline hover:text-white'>About</Link>
            <button className='py-2 px-6 border bg-gray-400'>Login</button>
            </div>
            <div className='md:hidden'>
                <button onClick={()=> setIsOpen(!isOpen)}>
                    {isOpen? <FaTimes/>: <FaBars/>}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-6 py-4 flex-col items-center bg-white'>
            <Link to="/" className='px-6 py-2 hover:underline hover:bg-black hover:text-white'>Home</Link>
            <Link to="/gallery" className='px-6 py-2 hover:bg-black hover:underline hover:text-white'>Gallery</Link>
            <Link to="/contact" className='px-6 py-2 hover:bg-black hover:underline hover:text-white'>Contact</Link>
            <Link to="/about" className='px-6 py-2 hover:bg-black hover:underline hover:text-white'>About</Link>
            <button className='py-2 px-6 border bg-gray-400'>Login</button>
            </div>
        )}
    </nav>
  ) 
}

export default Navbar