import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Canva from "../assets/canva.png";
import Tailwind from "../assets/tailwind.png";
import Flutter from "../assets/flutter.png";
import Figma from "../assets/figma.png";

const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-[#1e2528] text-white">
        {/* <div className='pl-20'> */}
        <div  className='max-w-[1024px] mx-auto pt-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='font-bold inline border-b-4 border-[#0EF6BE] max-sm:text-5xl text-7xl '>Skills</p>
                <p className='max-sm:text-4xl text-5xl sm:py-10 pt-8 mb-[-30px] '>These are the skills I am currently specializing.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center pt-8'>


                <div className='max-w-xs max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={HTML} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>HTML</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={CSS} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>CSS</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={JavaScript} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>JavaScript</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={ReactImg} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>React</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={Figma} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>Figma</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={Tailwind} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>Tailwind</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={Flutter} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>Flutter</p>
                </div>
                <div className='max-w-sm max-h-[11.5rem] pt-5 rounded overflow-hidden sm:shadow-lg sm:shadow-slate-700 hover:scale-110 duration-300 bg-[#060E0E]'>
                    <img className='h-[100px] w-[100px] object-contain max-sm:w-14 mx-auto' src={Canva} alt="HTML img" />
                    <p className='max-sm:text-3xl text-4xl my-4'>Canva</p>
                </div>
            </div>
        </div>

    </div>

    
  );
};

export default Skills;

// <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
    //   Container
    //   <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    //     <div>
    //       <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
    //         Skills
    //       </p>
    //       <p className="py-4">// These are the technologies I've worked with</p>
    //     </div>

    //     <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
    //       <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
    //         <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
    //         <p className="my-4">HTML</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>