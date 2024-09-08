import React from 'react'

const About = () => {
  return (
    <div>

<div className='relative bg-cover bg-center h-96' style={{backgroundImage: "url('/Images/hero.png')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h4 className='text-4xl md:text-6xl text-white font-bold'>About Us</h4>
        </div>
    </div>


{/* botom  */}
<div className='container mx-auto px-4 py-12'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* for image  */}
        <div>
            <img src="/Images/hero.png" alt="" className='rounded-lg shadow-md w-full h-auto'/>
        </div>

{/* for text  */}
        <div className='flex flex-col justify-center'>
            <h3 className='text-2xl font-bold'>Who We are </h3>
            <p className='text-gray-700 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reprehenderit possimus! Quod cumque illo quisquam perspiciatis. Necessitatibus blanditiis eligendi voluptate.</p>
            <h3 className='text-2xl font-bold'>Our Mission </h3>
            <p className='text-gray-700 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reprehenderit possimus! Quod cumque illo quisquam perspiciatis. Necessitatibus blanditiis eligendi voluptate.</p>
        </div>

    </div>
</div>


    </div>
  )
}

export default About