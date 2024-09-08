import React from 'react'

const destinations = [
    {image: '/Images/gal1.jpg', title: 'Paris, France', description: 'The City of Light draws millionns of visistors every year with its unforgettable ambiance'},
    {image: '/Images/gal2.jpg', title: 'Bali, Indonesia', description: 'Bali is Living postcard an indonisan paradise that feels like a fantasy'},
    {image: '/Images/gal3.png', title: 'New York, USA', description: 'New York City the larget city the United States and home to many world famous attractions'},
    {image: '/Images/gal4.jpg', title: 'Tokyo, Japan', description: 'Tokyo offers a seemingly unlimited choice of entertainment, chopping, cultural attractions and dining'},
]
const PapularDestination = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Papular Destinations</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {destinations.map((city, index)=>(
                    <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'> 
                        <img className='w-full h-48 object-cover transform transition duration-300 hover:scale-110' src={city.image} alt="" />
                        <div className='p-4'>
                            <h4 className='text-xl font-bold mb-2'>{city.title}</h4>
                            <p className='text-gray-600'>{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PapularDestination