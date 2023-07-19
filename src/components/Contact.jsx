import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#1e2528]  text-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/56034e8b-0b5d-4505-accb-2335e4792c15" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='font-bold inline border-b-4 border-[#0EF6BE] max-sm:text-5xl text-7xl'>Contact</p>
                <p className='max-sm:text-4xl text-5xl sm:py-10 pt-8 mb-[-30px] '>Submit the form below to shoot me an Email</p>
            </div>
            <input className='text-3xl rounded-lg border-white bg-[#060E0E] shadow-xl shadow-slate-700 hover:bg-[#3A504B] hover:border-[#0EF6BE] p-2' type="text" placeholder='Name' name='name' />
            <input className='text-3xl my-4 p-2 rounded-lg bg-[#060E0E] shadow-xl shadow-slate-800' type="email" placeholder='Email' name='email' />
            <textarea className='text-1xl font-mono bg-[#060E0E] shadow-xl shadow-slate-900 p-2 rounded-lg' name="message" rows="7" placeholder='Message'></textarea>
            <button className='text-3xl text-white border-2 hover:bg-[#0EF6BE] hover:border-[#0EF6BE] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact