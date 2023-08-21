import React from "react";
import Twitter from "../assets/Twitter.png";
import Tesla from "../assets/tesla.png";
import Claut from "../assets/Claut.png";
import ClautMobile from "../assets/ClautMobile.png";
import TwitterMobile from "../assets/TwitterMobile.png";
import { FaEye, FaCode } from "react-icons/fa";
import creativewood from "../assets/creativewood.png";

const Work = () => {
  return (
    <div
      name="work"
      className="background w-full md:h-screen text-[#bcbcb3] font-bold text-lg z-30"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-40">
        <div className="pb-8 z-prop lg:mt-0 mt-24">
          <p className="text-4xl  font-bold inline border-b-4 text-[#bcbcb3] border-[#ca8a04]">
            Work
          </p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>

        {/*Browser Container*/}
        <div className="lg:grid lg:grid-cols-2 gap-16 z-prop hidden">
          {/*Grid Item*/}
          <div
            style={{
              backgroundImage: `url(${creativewood})`,
              backgroundSize: "480px",
            }}
            className=" hover:shadow-xl hover:shadow-[#6c6a6a] shadow-[#383737] hover:scale-110 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <h2 className="text-4xl mt-1 font-bold text-[#d3811e] tracking-wider">
                Creative Wood
              </h2>
              <p className="text-base tracking-wide font-normal mx-3 mt-1.5 text-[#d6d6d2]">
                Creative Wood is your go-to ecommerce store for laser-cut wooden
                products. Explore our collection of mesmerizing anime LED lamps,
                versatile LED lamps, and stylish wall clocks.
              </p>
              <div className="mt-2 flex justify-center items-center">
                <a href="https://creativewood.store">
                  <button className="text-center rounded-full px-4 py-4 mx-5 text-[#cd6215] hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/creative-wood">
                  <button className="text-center rounded-full px-4 py-4 mx-5 border-4 text-[#cd6215] hover:text-white hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Tesla})`,
              backgroundSize: "520px",
            }}
            className="hover:shadow-xl hover:shadow-[#6c6a6a] shadow-[#383737] hover:scale-110 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <h2 className="text-4xl mt-1 font-bold text-[#d3811e] tracking-wider">
                Tesla Clone
              </h2>
              <p className="text-base tracking-wider font-normal mx-2 mt-1.5 text-[#d6d6d2]">
                Drive into the future with my cutting-edge Tesla Clone App
                developed using React and Tailwind. This app features a modern
                design, responsive interface, and scalable architecture.
              </p>
              <div className="mt-2 flex justify-center items-center">
                <a href="https://rp-tesla-clone.netlify.app">
                  <button className="text-center rounded-full px-4 py-4 mx-5 text-[#cd6215] hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale" />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide text-[#ffffff]">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/tesla-clone">
                  <button className="text-center rounded-full px-4 py-4 mx-5 border-4 text-[#cd6215] hover:text-white hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide text-[#ffffff]">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{
              backgroundImage: `url(${Twitter})`,
              backgroundSize: "480px",
            }}
            className=" hover:shadow-xl hover:shadow-[#6c6a6a] shadow-[#383737] hover:scale-110 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 z-prop text-center group-hover:opacity-100 duration-1000">
              <h2 className="text-4xl mt-1 font-bold text-[#d3811e] tracking-wider">
                Twitter Clone
              </h2>
              <p className="text-base tracking-wider font-normal mx-3 mt-1.5 text-[#d6d6d2]">
                Experience the future of social media with my Twitter Clone app
                built with React.js, Next.js, Sanity CMS, Typescript, SSR,
                Tailwind, and NextAuth.
              </p>

              <div className="mt-8 flex justify-center items-center">
                <a href="https://twitter-clone-alarmovski.vercel.app">
                  <button className="text-center rounded-full px-4 py-4 mx-5 text-[#cd6215] hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/twitter-clone">
                  <button className="text-center rounded-full px-4 py-4 mx-5 border-4 text-[#cd6215] hover:text-white hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{
              backgroundImage: `url(${Claut})`,
              backgroundSize: "480px",
            }}
            className=" hover:shadow-xl hover:shadow-[#6c6a6a] shadow-[#383737] hover:scale-110 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <h2 className="text-4xl mt-1 font-bold text-[#d3811e] tracking-wider">
                Claut
              </h2>
              <p className="text-base tracking-wider font-normal mx-2.5 mt-1.5 text-[#d6d6d2]">
                Claut is a comprehensive cloud management platform that provides
                services such as app security, dashboard design, cloud data, and
                API services.
              </p>
              <div className="mt-8 flex justify-center items-center">
                <a href="https://claut.netlify.app">
                  <button className="text-center rounded-full px-4 py-4 mx-5 text-[#cd6215] hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/claut">
                  <button className="text-center rounded-full px-4 py-4 mx-5 border-4 text-[#cd6215] hover:text-white hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " />
                  </button>
                  <p className="justify-center flex flex-wrap mt-0.5 tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Mobile Container*/}
        <div className="grid gap-2 z-prop lg:hidden">
          {/*Grid Item*/}
          <h3 className="text-3xl text-center font-bold text-[#e3e3de] tracking-wider">
            Creative Wood
          </h3>
          <div className="shadow-xl shadow-[#040c16] mb-20 container rounded-md mx-auto flex flex-col items-center">
            {/* Image */}
            <div
              style={{
                backgroundImage: `url(${creativewood})`,
                backgroundSize: "330px",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "160px",
                width: "100%",
                
              }}
            ></div>

            
            <div className="text-center flex flex-col justify-center items-center w-50%">
              <p className="mt-1 tracking-[0.032em] text-sm font-medium text-[#e3e3de]">
                Creative Wood is your go-to ecommerce store for laser-cut wooden
                products. Explore our collection of mesmerizing anime LED lamps,
                versatile LED lamps, and stylish wall clocks.
              </p>
              <div className=" mt-2 flex justify-center items-center mb-1">
                <a href="https://creativewood.store">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/creative-wood">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-3xl text-center font-bold text-[#e3e3de] tracking-wider">
            Tesla Clone
          </h3>
          <div className="shadow-xl shadow-[#040c16] mb-20 container rounded-md mx-auto flex flex-col items-center">
            {/* Image */}
            <div
              style={{
                backgroundImage: `url(${Tesla})`,
                backgroundSize: "330px",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "160px",
                width: "100%",
                
              }}
            ></div>

            
            <div className="text-center flex flex-col justify-center items-center w-50%">
              <p className="mt-1 tracking-[0.032em] text-sm font-medium text-[#e3e3de]">
                Drive into the future with my cutting-edge Tesla Clone App
                developed using React and Tailwind. This app features a modern
                design, responsive interface, and scalable architecture.
              </p>
              <div className=" mt-2 flex justify-center items-center mb-1">
                <a href="https://rp-tesla-clone.netlify.app">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/tesla-clone">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>
          <h3 className="text-3xl text-center font-bold text-[#e3e3de] tracking-wider">
            Twitter Clone
          </h3>
          <div className="shadow-xl shadow-[#040c16] mb-20 container rounded-md mx-auto flex flex-col items-center">
            {/* Image */}
            <div
              style={{
                backgroundImage: `url(${TwitterMobile})`,
                backgroundSize: "330px",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "150px",
                width: "100%",
                
              }}
            ></div>

            
            <div className="text-center flex flex-col justify-center items-center w-50%">
              <p className="mt-1 tracking-[0.032em] text-sm font-medium text-[#e3e3de]">
                Drive into the future with my cutting-edge Tesla Clone App
                developed using React and Tailwind. This app features a modern
                design, responsive interface, and scalable architecture.
              </p>
              <div className=" mt-2 flex justify-center items-center mb-1">
                <a href="https://twitter-clone-alarmovski.vercel.app">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/twitter-clone">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>
          <h3 className="text-3xl text-center font-bold text-[#e3e3de] tracking-wider">
            Claut
          </h3>
          <div className="shadow-xl shadow-[#040c16] mb-20 container rounded-md mx-auto flex flex-col items-center">
            {/* Image */}
            <div
              style={{
                backgroundImage: `url(${Claut})`,
                backgroundSize: "330px",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "160px",
                width: "100%",
                
              }}
            ></div>

            
            <div className="text-center flex flex-col justify-center items-center w-50%">
              <p className="mt-1 tracking-[0.032em] text-sm font-medium text-[#e3e3de]">
              Claut is a comprehensive cloud management platform that provides
                services such as app security, dashboard design, cloud data, and
                API services.
              </p>
              <div className=" mt-2 flex justify-center items-center mb-1">
                <a href="https://claut.netlify.app">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaEye className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Live
                  </p>
                </a>
                <a href="https://github.com/radosav-perisic/claut">
                  <button className="text-center rounded-full p-2.5 mx-6 bg-[#cd6215] border-white text-white hover:text-white border-4 hover:bg-[#cd6215] duration-300 font-bold text-2xl">
                    <FaCode className="icon-scale " size={20} />
                  </button>
                  <p className="justify-center flex flex-wrap text-xs text-white tracking-wide">
                    Code
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
