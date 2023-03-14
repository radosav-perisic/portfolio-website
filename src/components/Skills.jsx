import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#262626] z-prop w-full h-screen text-[#bcbcb3]">
      {/*Container*/}
      <div className="max-w-[1000px] md:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="z-prop">
          <p className="text-4xl font-bold inline border-b-4 border-[#ca8a04]">
            Skills
          </p>
          <p className="py-4 z-prop">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center z-prop py-8">
          <div className="shadow-md z-prop lg:py-5 sm:py-2 mx-4 my-4 shadow-[#040c16] hover:z-20 hover:scale-110 duration-500">
            <img className="w-24 mx-auto z-prop" src={Javascript} alt="HTML icon" />
            <p className='pt-4 z-prop text-xl'>Javascript</p>
          </div>
          <div className="shadow-md z-prop lg:py-5 sm:py-2 mx-4 my-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className='pt-4 text-xl'>React</p>
          </div>
          <div className="shadow-md z-prop lg:py-5 sm:py-2 mx-4 my-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Typescript} alt="HTML icon" />
            <p className='pt-4 text-xl'>Typescript</p>
          </div>
          <div className="shadow-md z-prop lg:py-5 sm:py-2 mx-4 my-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className='pt-4 text-xl'>Tailwind</p>
          </div>
          <div className="shadow-md z-prop lg:py-5 sm:py-2 mx-4 my-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={HTML} alt="HTML icon" />
            <p className='pt-4 z-prop text-xl'>HTML</p>
          </div>
          <div className="shadow-md z-prop lg:py-5 sm:py-2 mx-4 my-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={CSS} alt="HTML icon" />
            <p className='pt-4 text-xl'>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
