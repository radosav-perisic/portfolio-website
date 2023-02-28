import React from "react";
import Hangman from "../assets/Hangman.png";
import Pantry from "../assets/Pantry.png";
import Auth from "../assets/auth.png";
import TechCart from "../assets/tech-cart.png";

const Work = () => {
  return (
    <div className="bg-[#262626] w-full md-h-screen text-[#bcbcb3] font-bold text-lg">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-[#bcbcb3] border-color-[#ca8a04]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/*Container*/}

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Hangman})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                The Hangman
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/the-hangman">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Pantry})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pantry Storage Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/pantry-storage-tracker">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Auth})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Authenthication App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${TechCart})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-300">
              <span className="text-2xl justify-items-center font-bold text-white tracking-wider">
                Tech Cart
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
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