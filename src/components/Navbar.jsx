import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import {
  HiOutlineSparkles
} from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import rp from "../assets/RP.ico";
import { Link } from "react-scroll";
import SocialsButton from "./SocialsButton";
import ResumeButton from "./ResumeButton";
import PortfolioMobile from "./PortoflioMobile";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [social, setSocial] = useState(false)
  const [resume, setResume] = useState(false)
  const [particlesOn, setParticlesOn] = useState(false);

  const navClickHandler = () => setNav(!nav);
  const socialClickHandler = () => setSocial(!social);
  const resumeClickHandler = () => setResume(!resume);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-3 background-2 bg-[#181818] shadow-lg text-gray-300 z-10">
      <div>
        <img src={rp} alt="Logo Image" className="w-[75px] md:w-[90px]" />
      </div>
            {/* Resume button */}
            <div onClick={resumeClickHandler} className="md:hidden z-10  mr-1">
        {!resume  ? <PortfolioMobile /> : <PortfolioMobile/>}
      </div>
         {/* Socials button */}
         <div onClick={socialClickHandler} className="md:hidden z-10 ">
        {!social  ? <SocialsButton /> : <FaTimes size={'2.45rem'} style={{margin: '1.61rem', color: 'orange'}}/>}
      </div>
   

      {/* main-menu */}

      <ul className="hidden md:flex flex-wrap items-center font-semibold">
        <li>
        <ResumeButton href='/Resume.pdf' /> 
        </li>
        <li>
          <Link className=" hover:text-[#ca8104] tracking-wide duration-300" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104] tracking-wide duration-300"  to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104] tracking-wide duration-300"  offset={-100} to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104] tracking-wide duration-300"  to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104] tracking-wide duration-300" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#ca8104] tracking-wide duration-300"  to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
       
      {/* Hamburger */}
      <div onClick={navClickHandler} className="md:hidden z-50 relative mr-2">
        {!nav ? <FaBars size={'1.7rem'}/> : <FaTimes size={'2rem'}/>}
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
          <Link onClick={navClickHandler} to="experience" smooth={true} duration={500}>
            Experience
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
      <div className={social ? "lg:flex fixed flex-col top-[25%] left-0" : "hidden lg:flex fixed flex-col top-[25%] left-0"}>
        <ul>
        <button
  onClick={() => {
    props.particleClick();
    setParticlesOn(!particlesOn);
  }}
  title="Particles Effect On/Off"
  className={`w-[50px] ml-2 mb-10 h-[50px] flex font-semibold rounded-full hover:outline-zinc-400 hover:text-white justify-center items-center text-[#ca8a04] outline background-particle duration-300 ${
    particlesOn ? ' text-white outline-zinc-400' : ''
  }`}
>
  <HiOutlineSparkles size={social ? 20 : 30} /> {/* Corrected the icon size */}
</button>


          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px] ${social ? 'transition-all translate-x-24 duration-300': null} bg-blue-600` :"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-blue-600"} >
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
              href="https://www.linkedin.com/in/radosav-perisic"
              target="_blank"
            >
              Linkedin <FaLinkedin size={social ? 20 : 30} />
            </a>
          </li>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px]  ${social ? 'translate-x-24 duration-330 ease-in-out transition-transform': null} bg-[#333333]` : "w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-[#333333]"}>
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
              href="https://github.com/radosav-perisic"
              target="_blank"
            >
              Github <FaGithub  size={social ? 20 : 30} />
            </a>
          </li>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px] ${social ? 'translate-x-24 duration-360 ease-in-out transition-transform': null}  bg-[#ca8a04]` :"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-[#ca8a04]" }>
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
              href="mailto:radosavperisic.contact@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={social ? 20 : 30} />
            </a>
          </li>
          <li className={social ? `w-[140px] h-[45px] flex justify-between items-center ml-[-100px] ${social ? 'transform transition-all translate-x-24 duration-390': null} bg-[#565f69]`: "w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-md duration-300 bg-[#565f69]"}>
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
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
