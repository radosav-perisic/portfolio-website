import React from "react";
import Twitter from "../assets/Twitter.png";

import Tesla from "../assets/tesla.png";
import Traveler from "../assets/traveler.png";
import Claut from "../assets/Claut.png";

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

        {/*Container*/}

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 z-prop">
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
              <div className="pt-8 text-center">
                <a href="https://rp-tesla-clone.netlify.app">
                  <button className="text-center rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/tesla-clone">
                  <button className="text-center rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
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
              <div className="pt-8 text-center">
                <a href="https://claut.netlify.app">
                  <button className="text-center rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/claut">
                  <button className="text-center rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
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
              <div className="pt-8 z-prop text-center">
                <a href="https://twitter-clone-alarmovski.vercel.app">
                  <button className=" text-center z-prop rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/twitter-clone">
                  <button className="text-center z-prop rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
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
              <div className="pt-8 text-center">
                <a href="https://travelers-oasis.netlify.app">
                  <button className="text-center rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/travelers-oasis">
                  <button className="text-center rounded-lg px-7 py-5 mt-6 mx-4 bg-[#2e2e2b] text-[#bcbcb3] font-bold text-2xl">
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