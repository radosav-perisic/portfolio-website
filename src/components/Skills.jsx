import React from "react";
import CSS from "../assets/css.png";
import git from "../assets/git.png";
import web3 from "../assets/web3.png";
import hardhat from "../assets/hardhat.png";
import ethers from "../assets/ethers.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="background-2 z-prop w-full md:h-screen text-[#bcbcb3]"
    >
      {/*Container*/}
      <div className="max-w-[1000px] md:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="z-prop pb-8 mt-20 lg:mt-0">
          <p className="text-5xl ml-4 font-bold inline text-[#ffffff] border-b-4 border-[#ca8a04]">
            Skills
          </p>
          <p className="py-4 z-prop ml-4 mr-1 font-bold  text-lg">
            // These are the technologies I work with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-semibold z-prop py-8">
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={ReactImg} alt="/" />
            <p className="py-2 text-[1.4rem] font-bold mt-4">React</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={Typescript} alt="/" />
            <p className="py-2 text-[1.4rem] font-bold mt-4">Typescript</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={Tailwind} alt="/" />
            <p className="py-2 text-[1.4rem] font-bold mt-4">Tailwind</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={CSS} alt="/" />
            <p className="py-2 text-[1.4rem] font-bold mt-[17px]">CSS</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={web3} alt="/" />
            <p className="py-2 text-[1.4rem] font-bold mt-6">Web<span className="font-sans">3</span>.js</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={ethers} alt="/" />
            <p className="py-2 text-[1.4rem] font-bold mt-2">Ethers.js</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img
              className="w-[100px] mx-auto md:pt-0 pt-3 z-prop"
              src={hardhat}
              alt="/"
            />
            <p className="py-2 z-prop text-[1.4rem] font-bold mt-2">Hardhat</p>
          </div>
          <div className=" z-prop lg:py-4 sm:py-2 mx-4 my-4 background-2 rounded-md duration-500">
            <img className="w-[100px] mx-auto md:pt-0 pt-3" src={git} alt="/" />
            <p className="py-2 z-prop text-[1.4rem] font-bold mt-2">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
