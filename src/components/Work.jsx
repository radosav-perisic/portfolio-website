import React from "react";
import Twitter from "../assets/Twitter.png";
import Tesla from "../assets/tesla.png";
import Traveler from "../assets/traveler.png";
import Claut from "../assets/Claut.png";
import ClautMobile from "../assets/ClautMobile.png";
import TwitterMobile from "../assets/TwitterMobile.png"
import TravelersMobile from "../assets/TravelersMobile.png"

const Work = () => {
  return (
    <div name='work' className="background-2 w-full md:h-screen text-[#bcbcb3] font-bold text-lg z-30">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-40">
        <div className="pb-8 z-prop lg:mt-0 mt-24">
          <p className="text-4xl  font-bold inline border-b-4 text-[#bcbcb3] border-[#ca8a04]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        
        {/*Browser Container*/}
        <div className="lg:grid lg:grid-cols-2 gap-4 z-prop hidden">
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Tesla})`, backgroundSize: '550px' }}
            className="shadow-xl shadow-[#040c16] hover:scale-105 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <span className="text-4xl font-bold text-[#1b1b18] tracking-wider">
                Tesla Clone
              </span>
              <p className="text-lg font-semibold text-[#2e2e2a]">
              Drive into the future with my cutting-edge Tesla Clone App created with React and Tailwind
              </p>
              <div className="pt-8 text-center">
                <a href="https://rp-tesla-clone.netlify.app">
                  <button className="text-center rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/tesla-clone">
                  <button className="text-center rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Claut})`, backgroundSize: '480px' }}
            className="shadow-xl shadow-[#040c16] hover:scale-105 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <span className="text-4xl justify-items-center font-bold text-[#1b1b18] tracking-wider">
                Claut
              </span>              
              <p className="text-base font-semibold text-[#2e2e2a]">
              Claut is a comprehensive cloud management platform that provides services such as app security, dashboard design, cloud data, and API services
              </p>
              <div className="pt-6 text-center">
                <a href="https://claut.netlify.app">
                  <button className="text-center rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/claut">
                  <button className="text-center rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Twitter})`, backgroundSize: '480px' }}
            className="shadow-xl shadow-[#040c16] hover:scale-105 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 z-prop text-center group-hover:opacity-100 duration-1000">
              <span className="text-4xl z-prop font-bold text-[#1b1b18] tracking-wider">
                Twitter Clone
              </span>
              <p className="text-sm font-semibold text-[#2e2e2a]">
              Experience the future of social media with my Twitter Clone app built with React.js, Next.js, Sanity CMS, Typescript, SSR, Tailwind, and NextAuth.
              </p>

              <div className="pt-8 z-prop text-center">
                <a href="https://twitter-clone-alarmovski.vercel.app">
                  <button className=" text-center z-prop rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/twitter-clone">
                  <button className="text-center z-prop rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Traveler})`, backgroundSize: '480px' }}
            className="shadow-xl shadow-[#040c16] hover:scale-105 duration-1000 group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <span className="text-4xl font-bold text-[#1b1b18] tracking-wider">
                Traveler's Oasis
              </span>
              <p className="text-base mx-1 font-semibold text-[#2e2e2a]">
              Find your perfect oasis and book with ease using my app, built with React and Tailwind for a seamless user experience
              </p>
              <div className="pt-8 text-center">
                <a href="https://travelers-oasis.netlify.app">
                  <button className="text-center rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/travelers-oasis">
                  <button className="text-center rounded-lg px-7 py-5 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
       
        {/*Mobile Container*/}
        <div className="grid  gap-4 z-prop lg:hidden">
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Tesla})`, backgroundSize: '330px', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', height: '250px'}}
            className="shadow-xl shadow-[#040c16]  container rounded-md justify-center items-center mx-auto"
          >
            <div className=" text-center">
              <span className="text-2xl font-bold text-[#606060] tracking-wider">
                Tesla Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://rp-tesla-clone.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 mt-28 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/tesla-clone">
                  <button className="text-center rounded-lg px-4 py-3 mt-28 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${ClautMobile})`, backgroundSize: '330px', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', height: '250px' }}
            className="shadow-xl shadow-[#040c16]  container rounded-md justify-center items-center mx-auto"
          >
            {/* Hover Effects */}
            <div className="text-center">
             
              <div className="pt-12 text-center">
                <a href="https://claut.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 mt-32 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/claut">
                  <button className="text-center rounded-lg px-4 py-3 mt-32 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${TwitterMobile})`,backgroundSize: '380px', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', height: '250px' }}
            className="shadow-xl shadow-[#040c16]  container rounded-md justify-center items-center mx-auto"
          >
            {/* Hover Effects */}
            <div className="text-center">
              <span className="text-2xl font-bold text-[#606060] tracking-wider">
                Twitter Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://twitter-clone-alarmovski.vercel.app">
                  <button className=" text-center rounded-lg px-4 py-3 mt-28 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/twitter-clone">
                  <button className="text-center rounded-lg px-4 py-3 mt-28 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${TravelersMobile})`, backgroundSize: '330px', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', height: '250px' }}
            className="shadow-xl shadow-[#040c16]  container rounded-md justify-center items-center mx-auto"
          >
            {/* Hover Effects */}
            <div className="text-center">
              <div className="pt-16 text-center">
                <a href="https://travelers-oasis.netlify.app">
                  <button className="text-center rounded-lg px-5 py-3 mt-28 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/travelers-oasis">
                  <button className="text-center rounded-lg px-5 py-3 mt-28 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Code
                  </button>
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