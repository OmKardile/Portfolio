import React from "react";

const About = () => {
  return (
    <div
    id="about"
      name="about"
      className="w-full h-screen bg-[#1e2528] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full gird grid-cols-2 gap-8 item max-sm:items-center">
          <div className="sm:text-center pb-16 pl-4 max-sm:items-center">
            <p className="max-sm:text-5xl text-7xl max-sm:items-center font-bold inline border-b-4 border-[#0EF6BE]">
              About Me
            </p>
            {/* <p><br/></p> */}
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000]px w-full grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right max-sm:text-4xl text-6xl">
            <p className="sm:pl-28">
              Hello I am a Student passionate about Designing and improving designs around me.
            </p>
          </div>
          <div className="sm:pr-28 text-3xl sm:text-5xl">
            <p>
              I am currently pursuing my B. Tech Degree in D Y Patil University.
              I completed my Diploma from K. K Wagh Polytechnic. I try to work hard for
              designing and learning new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

    // <div name="about" className="w-full h-screen bg-[#1e2528] text-white text-5xl">
    //   {" "}
    //   <div className="flex flex-col justify-center items-center w-full h-full">
    //     {" "}
    //     <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
    //       {" "}
    //       <div className="sm: text-right pb-8 pl-4">
    //         <p className="text-4xl font-bold inline border-b-4 border-pink-600">
    //           {" "}
    //           About
    //         </p>{" "}
    //       </div>
    //   <div></div>
    //     </div>
    //     <div className="max-w-[1080px] w-full grid grid-cols-2 gap-8">
    //       {" "}
    //       <div>
    //         {" "}
    //         <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
    //       </div>{" "}
    //       <div>
    //         <p>
    //           I am passionate about building excellent software that improves
    //           the lives of those around me. I specialize in creating software
    //           for clients ranging from individuals and small-businesses all the
    //           way to large enterprise corporations. What would you do if you had
    //           a software expert available at your fingertips?
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
