import React from "react";
import Hangman from "../assets/Hangman.png";
import Pantry from "../assets/Pantry.png";
import Auth from "../assets/auth-app.png";
import TechCart from "../assets/tech-cart.png";

const Work = () => {
  return (
    <div name='work' className="bg-[#262626] w-full md:h-screen text-[#bcbcb3] font-bold text-lg z-30">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-40">
        <div className="pb-8 z-prop">
          <p className="text-4xl  font-bold inline border-b-4 text-[#bcbcb3] border-[#ca8a04]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/*Container*/}

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 z-prop">
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Hangman})`, backgroundSize: 'contain' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 z-prop text-center group-hover:opacity-100 duration-1000">
              <span className="text-2xl z-prop font-bold text-white tracking-wider">
                The Hangman
              </span>
              <div className="pt-8 z-prop text-center">
                <a href="https://hangmania.netlify.app">
                  <button className=" text-center z-prop rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/the-hangman">
                  <button className="text-center z-prop rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Pantry})`, backgroundSize: 'contain' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pantry Storage Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://pantry-storage-tracker.netlify.app">
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
            style={{ backgroundImage: `url(${Auth})`, backgroundSize: 'contain' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Authenthication App
              </span>
              <div className="pt-8 text-center">
                <a href="https://quick-auth.netlify.app">
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
            style={{ backgroundImage: `url(${TechCart})`, backgroundSize: 'contain' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 duration-1000">
              <span className="text-2xl justify-items-center font-bold text-white tracking-wider">
                Tech Cart
              </span>
              <div className="pt-8 text-center">
                <a href="https://the-gadget-cart.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 my-12 mx-4 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/radosav-perisic/the-gadget-cart">
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
