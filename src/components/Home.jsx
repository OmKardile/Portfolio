import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='bg-[#1e2528] w-full h-screen'>    
      
    <div id='container' className='max-sm:ml-5 max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-8xl max-sm:text-5xl text-[#c0f4e8]'>Konichiwa, </p>
      <p className='text-5xl max-sm:text-3xl text-slate-300'>I am <strong className='text-[#e2e6f4] max-sm:text-6xl text-9xl'>Omkar Kardile</strong></p>
      <p className='text-6xl max-sm:text-4xl text-[#bcbfc8] pt-6'><h4 className='max-sm:text-5xl text-7xl text-[#bcbfc8] font-bold'>I'm a <strong className=''>Designer. I like to design Ui/Ux, FrontEnd Web,</strong> etc.</h4>
      Please take a look around my portfolio.</p>
 
      <div className='max-sm:text-3xl pt-7 text-5xl text-[#0EF6BE]'>
        <button className='border-2 max-sm:px-3 px-6 py-3 my-2 flex items-center border-white bg-[black] shadow-xl shadow-black hover:bg-[#3A504B] hover:border-[#0EF6BE]'>View More <HiArrowNarrowRight className='ml-3'/> </button> 
      </div>


    </div>
    </div>
  )
}

export default Home