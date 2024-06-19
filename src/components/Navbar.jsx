import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <>
      <div className="chathura fixed w-full h-20 flex justify-between items-center px-4 bg-[#0EF6BE]">
        <div>
          <img src={logo} alt="logo png" style={{ width: "57px" }} />
        </div>

        <div className="text-4xl hidden md:flex">
          <ul className="flex">
            <li><a className="hover:underline hover:text-white" href="#home">Home</a></li> 
            <li><a className="hover:underline hover:text-white" href="#about">About</a></li>
            <li><a className="hover:underline hover:text-white" href="#skills">Skills</a></li>
            <li><a className="hover:underline hover:text-white" href="#experience">Experience</a></li>
            <li><a className="hover:underline hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div id="hamburger" onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div
          id="mobiles menu"
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0EF6BE] flex flex-col justify-center items-center"
          }
        >
          <ul className="">
            <li className="py-6 text-5xl">Home</li>
            <li className="py-6 text-5xl">About</li>
            <li className="py-6 text-5xl">Skills</li>
            <li className="py-6 text-5xl">Experience</li>
            <li className="py-6 text-5xl">Contact</li>
          </ul>
        </div>

        <div className="flex fixed flex-col top-[35%] left-0 max-sm:hidden">
          <ul className="text-4xl ">
            <li className="hover:ml-[-10px] duration-500 bg-[#f7f7f7] w-[160px] ml-[-100px] h-[60px] flex justify-between items-center">
              <IconContext.Provider
                value={{ color: "#0A66C2", className: "global-class-name" }}
              >
                <a
                  className="flex justify-between items-center w-full text-black"
                  href="https://www.linkedin.com/in/omkar-kardile-49501b213/" target="_blank"
                >
                  LinkedIn <FaLinkedin size={27} />
                </a>
              </IconContext.Provider>
            </li>
            <li className="hover:ml-[-10px] duration-500 bg-[#f7f7f7] w-[160px] ml-[-100px] h-[60px] flex justify-between items-center">
              <IconContext.Provider
                value={{ color: "#000", className: "global-class-name" }}
              >
                <a
                  className="flex justify-between items-center w-full text-black"
                  href="https://github.com/OmKardile" target="_blank"
                >
                  GitHub <FaGithub size={27} />
                </a>
              </IconContext.Provider>
            </li>
            <li className="hover:ml-[-10px] duration-500 bg-[#f7f7f7] w-[160px] ml-[-100px] h-[60px] flex justify-between items-center">
              <IconContext.Provider
                value={{ color: "#F56040", className: "global-class-name" }}
              >
                <a
                  className="flex justify-between items-center w-full text-black"
                  href="https://www.instagram.com/whysoserious._.5/" target="_blank"
                >
                  Instagram <FaInstagram size={27} />
                </a>
              </IconContext.Provider>
            </li>
            <li className="hover:ml-[-10px] duration-500 bg-[#f7f7f7] w-[160px] ml-[-100px] h-[60px] flex justify-between items-center">
              <IconContext.Provider
                value={{ color: "#000", className: "global-class-name" }}
              >
                <a
                  className="flex justify-between items-center w-full text-black"
                  href="mailto:omkardile84@gmail.com" 
                >
                  Email <HiOutlineMail size={27} />
                </a>
              </IconContext.Provider>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* 
  const [effect, setEffect] = useState(false);
  <div className="flex h-screen flex-col justify-center">
    <div className="flex justify-center">
      <button
        className={`${
          effect && "animate-wiggle"
        } bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
        onClick={() => {
          setEffect(true);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        Wiggle Button
      </button>
    </div>
  </div>
*/
}