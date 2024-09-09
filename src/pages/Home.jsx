import React from 'react'
import PapularDestination from '../components/PapularDestination'
import Services from '../components/Services'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <>
    <div className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/Images/hero.png')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-2xl md:text-6xl text-white font-bold'>Explore the World With Us</h1>
            <p className='text-lg md:text-2xl text-white mb-4'>Discover amazing places at exclusive deals</p>
            <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105'>Get started</button>
        </div>
    </div>

    <PapularDestination/>
    <Services/>
    <Clients/>
    </>
  )
}

export default Home