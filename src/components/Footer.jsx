import { BsLinkedin, BsGithub, BsEnvelopeFill, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="w-full z-prop h-28 flex items-center md:mt-0 relative justify-center bg-[#141413] px-6 text-white">
      
      <div className="flex md:flex-row flex-col space-x-10 items-center">
      

      <div className='space-x-12 flex  md:mb-0 mb-4'>
        <a href="https://www.linkedin.com/in/radosav-perisic" className="md:text-2xl text-xl hover:scale-125 duration-300">
          <BsLinkedin />
        </a>
        <a href="https://github.com/radosav-perisic" className="md:text-2xl text-xl hover:scale-125 duration-300">
          <BsGithub />
        </a>
        <a href="mailto:radosavperisic.contact@gmail.com" className="md:text-2xl text-xl hover:scale-125 duration-300">
          <BsEnvelopeFill />
        </a>
        </div>
        <p className=" text-gray-300/50 text-center relative font-sans"> 
         Made by <a href="/Resume.pdf" className="hover:underline text-[#ec8406ea]">
          <span>Radosav Perisic</span>  
        </a> © 2023
      </p>
      </div>
      
    </div>
  );
};

export default Footer;
