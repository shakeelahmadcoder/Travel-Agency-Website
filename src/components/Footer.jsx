import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-gray-800 p-4 text-white'>
      <div className='container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 justify-center gap-5'>
        {/* part 1 for logo and about something */}
        <div className='flex flex-col '>
        <h2 className='text-xl font-semibold my-3'>Travel Agency</h2>
        <p>Your trusted partner for unforgettable travel experience Explore the world with us .</p>
        </div>
      {/* part 2 for Quick Links  */}
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-xl font-semibold'>Quick Links</h3>
        <ul className='flex flex-col gap-3'>
          <li> <Link to="/" className='hover:underline'>Home</Link> </li>
          <li> <Link to="/gallery" className='hover:underline'>Gallery</Link> </li>
          <li> <Link to="/contact" className='hover:underline'>Contact</Link> </li>
          <li> <Link to="/about" className='hover:underline'>About</Link> </li>
        </ul>
      </div>
      {/* part 3 for icons and emails  */}
      <div className='flex flex-col gap-5 '>
        <h3 className='text-xl font-semibold'>Follow Us</h3>
        <div className='flex  items-center gap-5 text-xl'>
          <Link> <FaFacebook/> </Link>
          <Link> <FaTwitter/> </Link>
          <Link> <FaGithub/> </Link>
          <Link> <FaLinkedin/> </Link>
        </div>

        <form className='flex items-center justify-center'>
          <input type="text" placeholder='Enter Your Email' className='rounded-l-lg w-full p-2 text-white bg-gray-600 border-0'/>
          <button className='bg-blue-600 text-white rounded-r-lg px-4 py-2'>Submit</button>
        </form>
      </div>


      </div>
      {/* last section  Privacy Policy*/}
      
        <div className='container mt-8 border-t border-gray-600 pt-4 mx-auto px-6 md:px-16 lg:px-24 flex justify-between flex-col md:flex-row  '>
          <p> &copy; 2024 Travel Agency. Alla rights reserved. </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="">Privacy Policy</a>
            <a href="">Terms and Services</a>
          
          <div>

          </div>
        </div>

      </div>


    </footer>
  )
}

export default Footer