import { BsLinkedin, BsGithub, BsEnvelopeFill, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="w-full h-28 flex items-center justify-center bg-[#141413] px-6 text-white">
      
      <div className="flex md:flex-row flex-col space-x-10 items-center">
      

      <div className='space-x-12 flex'>
        <a href="https://www.linkedin.com/in/radosav-perisic-58ab96265/" className="md:text-2xl text-xl hover:scale-125 duration-300">
          <BsLinkedin />
        </a>
        <a href="https://github.com/radosav-perisic" className="md:text-2xl text-xl hover:scale-125 duration-300">
          <BsGithub />
        </a>
        <a href="mailto:radosavperisic.contact@gmail.com" className="md:text-2xl text-xl hover:scale-125 duration-300">
          <BsEnvelopeFill />
        </a>
        </div>
        <p className=" text-gray-300/50  md:mt-0 mt-4 ml-auto"> 
         Made by <a href="/Resume.pdf" className="hover:underline text-[#ffb13c]">
          Radosav Perisic  
        </a> © 2023
      </p>
      </div>
      
    </div>
  );
};

export default Footer;
