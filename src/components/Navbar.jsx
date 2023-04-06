import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import rp from "../assets/RP.ico";
import { Link } from "react-scroll";
import SocialsButton from "./SocialsButton";
import ResumeButton from "./ResumeButton";
import PortfolioMobile from "./PortoflioMobile";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [social, setSocial] = useState(false)
  const [resume, setResume] = useState(false)
  const navClickHandler = () => setNav(!nav);
  const socialClickHandler = () => setSocial(!social);
  const resumeClickHandler = () => setResume(!resume);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#262626] text-gray-300 z-10">
      <div>
        <img src={rp} alt="Logo Image" style={{ width: "145px"}} />
      </div>
            {/* Resume button */}
            <div onClick={resumeClickHandler} className="md:hidden z-10  mr-1">
        {!resume  ? <PortfolioMobile /> : <PortfolioMobile/>}
      </div>
         {/* Socials button */}
         <div onClick={socialClickHandler} className="md:hidden z-10 ">
        {!social  ? <SocialsButton /> : <FaTimes size={'1.7rem'} style={{margin: '1.61rem'}}/>}
      </div>
      {/* Resume Button */}
   

      {/* main-menu */}

      <ul className="hidden md:flex flex-wrap items-center font-semibold">
        <li>
        <ResumeButton href='/Resume.pdf' /> 
        </li>
        <li>
          <Link className=" hover:text-[#ca8104]" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104]"  to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104]"  to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104]" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104]"  to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
       
      {/* Hamburger */}
      <div onClick={navClickHandler} className="md:hidden z-50 relative ml-1">
        {!nav ? <FaBars size={'1.4rem'}/> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-20 top-0 left-0 w-full h-screen bg-[#262626] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={navClickHandler} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={navClickHandler} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={navClickHandler} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={navClickHandler} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={navClickHandler} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className={social ? "lg:flex fixed flex-col top-[35%] left-0" : "hidden lg:flex fixed flex-col top-[35%] left-0"}>
        <ul>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px] ${social ? 'transform transition-all translate-x-24 duration-300': null} bg-blue-600` :"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-blue-600"} >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/radosav-perisic-58ab96265/"
            >
              Linkedin <FaLinkedin size={social ? 20 : 30} />
            </a>
          </li>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px]  ${social ? 'translate-x-24 duration-330 ease-in-out transition-transform': null} bg-[#333333]` : "w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-[#333333]"}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/radosav-perisic"
            >
              Github <FaGithub  size={social ? 20 : 30} />
            </a>
          </li>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px] ${social ? 'translate-x-24 duration-360 ease-in-out transition-transform': null}  bg-[#ca8a04]` :"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-[#ca8a04]" }>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:radosavperisic.contact@gmail.com"
            >
              Email <HiOutlineMail size={social ? 20 : 30} />
            </a>
          </li>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px] ${social ? 'transform transition-all translate-x-24 duration-390': null} bg-[#565f69]`: "w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-md duration-300 bg-[#565f69]"}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href='/Resume.pdf'
              target='_blank'
            >
              Resume <BsFillPersonLinesFill size={social ? 20 : 30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
