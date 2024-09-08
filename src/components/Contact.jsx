import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100'>

        <div className='relative bg-cover bg-center h-96' style={{backgroundImage: "url('/Images/hero.png')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h4 className='text-4xl md:text-6xl text-white font-bold'>Contact Us</h4>
        </div>
        
    </div>

<div className='container mx-auto px-4 p-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
    {/* first part  */}
    <div className='bg-white rounded-lg shadow-md p-6'>
    <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
    <div className='flex items-center mb-4'>
        <FaEnvelope className='text-blue-500 mr-2'/>
        <p>info@traveleragency.com</p>
    </div>
    <div className='flex items-center mb-4'>
        <FaPhone className='text-blue-500 mr-2'/>
        <p>+922-303030030</p>
    </div>
    <div className='flex items-center mb-4'>
        <FaMapMarkedAlt className='text-blue-500 mr-2'/>
        <p>123, Mehoo pur Phal, Jhatpat</p>
    </div>
    </div>

    {/* second part  */}
<div className=' bg-white rounded-lg shadow-md p-6'>
<h3 className='text-xl font-bold mb-4'> Get in touch</h3>
<form>
    <div className='mb-4'>
        <label className='block text-gray-700 mb-2' htmlFor="Name">Name</label>
        <input className='w-full p-2 border border-gray-300 rounded' type="text" placeholder='Enter Name'/>
    </div>
    <div className='mb-4'>
        <label className='block text-gray-700 mb-2' htmlFor="Email">Email</label>
        <input className='w-full p-2 border border-gray-300 rounded' type="email" placeholder='Enter Email'/>
    </div>
    <div className='mb-4'>
        <label className='block text-gray-700 mb-2' htmlFor="Message">Message</label>
        <textarea className='w-full p-2 border border-gray-300 rounded' name="" id="" placeholder='Write Message'></textarea>
    </div>
    <button type='submit' className='py-2 px-5 bg-blue-500 text-white rounded'>Send Message</button>
</form>
</div>

</div>
    




    </div>
  )
}

export default Contact