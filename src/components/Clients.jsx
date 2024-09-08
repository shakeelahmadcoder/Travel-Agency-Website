import React from 'react'
import {FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell,  } from 'react-icons/fa'

const services = [
    {image: 'John Doe', image: '/Images/me2.png', text: 'This Travel agency provided excellent service and helped us plan the perfect facation', location: 'New York, USA'},
    {image: 'Jane Smith', image: '/Images/me.png', text: 'This Travel agency provided excellent service and helped us plan the perfect facation', location: 'London, UK'},
    {image: 'John Doe', image: '/Images/me2.png', text: 'This Travel agency provided excellent service and helped us plan the perfect facation', location: ', USA'},
]
const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>What our Clients Says</h2>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {services.map((service, index)=>(
                    <div key={index} className='bg-white rounded-lg shadow-md p-4 text-center cursor-pointer transform transition duration-300 hover:scale-110'> 
                        <img src={service.image} alt=""  className='w-24 h-24 rounded-full mx-auto mb-4'/>
                        
                            <h4 className='text-xl font-bold mb-2'>{service.location}</h4>
                            {/* <p className='text-gray-600'>{service.location}</p> */}
                            <p className='text-gray-600 italic'>{service.text}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients