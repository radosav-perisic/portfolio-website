import React from "react";
import CSS from "../assets/css.png";
import git from "../assets/git.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="background z-prop w-full md:h-screen text-[#bcbcb3]"
    >
      {/*Container*/}
      <div className="max-w-[1000px] md:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="z-prop pb-8 lg:mt-0 mt-24">
          <p className="text-4xl ml-4 font-bold inline border-b-4 border-[#ca8a04]">
            Skills
          </p>
          <p className="py-4 z-prop ml-4  font-bold  text-lg">
            // These are the technologies I work with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center font-semibold z-prop py-8">
          <div className=" z-prop lg:py-5 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-24 mx-auto md:pt-0 pt-3" src={ReactImg} alt="HTML icon" />
            <p className="py-2 text-xl">React</p>
          </div>
          <div className=" z-prop lg:py-5 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-24 mx-auto md:pt-0 pt-3" src={Typescript} alt="HTML icon" />
            <p className="py-2 text-xl">Typescript</p>
          </div>
          <div className=" z-prop lg:py-5 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-24 mx-auto md:pt-0 pt-3" src={Tailwind} alt="HTML icon" />
            <p className="py-2 text-xl">Tailwind</p>
          </div>
          <div className=" z-prop lg:py-5 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img
              className="w-24 mx-auto md:pt-0 pt-3 z-prop"
              src={Javascript}
              alt="HTML icon"
            />
            <p className="py-2 z-prop text-xl">Javascript</p>
          </div>
          <div className=" z-prop lg:py-5 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-24 mx-auto md:pt-0 pt-3" src={git} alt="HTML icon" />
            <p className="py-2 z-prop text-xl">Git</p>
          </div>
          <div className=" z-prop lg:py-5 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-24 mx-auto md:pt-0 pt-3" src={CSS} alt="HTML icon" />
            <p className="py-2 text-xl">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
