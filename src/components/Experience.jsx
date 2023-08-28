import React from "react";
import Github from "../assets/Github-Screenshot.png";
import Ecommerce from "../assets/ecommerce.png";
import tokenflow from "../assets/tokenflow.png";
import scaleroad from "../assets/scaleroad.png";
import freelance from "../assets/project-screenshot.png";

const Experience = () => {

  return (
    <div
      name="experience"
      className="background w-full text-[#ffffff] font-bold text-lg z-30"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-40">
        <div className="pb-8 z-prop mb-8 mt-20 lg:mt-0">
          <p className="text-5xl font-bold inline border-b-4 text-[#ffffff] border-[#ca8a04]">
            Experience
          </p>
          <p className="py-4 z-prop mr-1 text-[#bcbcb3] text-lg">
            // Showcasing experiences that shaped my skills
          </p>
        </div>
        <div className="grid gap-24 md:grid-cols-2">
          {/*Grid Item*/}
          <div className="flex flex-col z-prop">
            <div className=" mb-7 container mx-auto flex flex-col items-center">
              {/* Project Image */}
              <div
                className="rounded-md border-[2px] h-[180px] md:h-[212px] bg-cover bg-center bg-no-repeat w-full border-white"
                style={{
                  backgroundImage: `url(${tokenflow})`,
                }}
              ></div>
            </div>

            <h2 className="text-center text-2xl font-extrabold text-[#ffffff] tracking-wider mb-3">
              TokenFlow
            </h2>
            <div className="text-left py-4 px-2 flex container flex-col justify-center items-center w-50% border-[1.5px] h-[205px] bg-[#171717] rounded-md border-white">
              <p className="mt-5 mx-2 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                <a
                  href="https://tokenflow.ai"
                  className="text-orange-600 hover:underline font-extrabold"
                >
                  TokenFlow
                </a>{" "}
                is a{" "}
                <span className="font-extrabold leading-[18px] md:leading-normal">
                  premier smart contract development agency
                </span>{" "}
                specialized in building custom-made solutions for web
                <span className="font-sans text-lg leading-[18px] md:leading-normal">
                  3
                </span>{" "}
                clients
              </p>
              <p className="mt-2 mx-2 mb-5 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                I specialize in designing and developing robust and efficient
                React applications, actively engaging in code reviews and
                collaborating with security teams to ensure project resilience.
              </p>
            </div>
          </div>

          {/*Grid Item*/}
          <div className="flex flex-col z-prop">
            <div className=" mb-7 container mx-auto flex flex-col items-center">
              {/* Project Image */}
              <div
                className="rounded-md border-[2px] bg-[#ffffff] bg-contain bg-center bg-no-repeat w-full h-[180px] md:h-[212px] border-white"
                style={{
                  backgroundImage: `url(${scaleroad})`,
                }}
              ></div>
            </div>
            <h2 className="text-center text-[1.4rem] font-extrabold text-[#ffffff] tracking-wider mb-3">
              ScaleRoad LLC
            </h2>
            <div className="texty-4 px-2 eft flex container flex-col justify-center items-center w-50% border-[1.5px] h-[205px] bg-[#171717] rounded-md border-white">
              <p className="mt-2  mx-2 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                ScaleRoad{" "}
                <span className="font-extrabold">
                  is a SaaS platform for tracking and managing investment
                  research
                </span>{" "}
                in a structured, sophisticated and organized way.
              </p>
              <p className="mt-2 mx-2 mb-5 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                I specialize in designing and developing robust and efficient
                React applications, actively engaging in code reviews and
                collaborating with security teams to ensure project resilience.
              </p>
            </div>
          </div>
          {/*Grid Item*/}
          <div className="flex flex-col z-prop">
            <div className=" mb-7 container mx-auto flex flex-col items-center">
              {/* Project Image */}
              <div
                className="rounded-md border-[2px] h-[180px] md:h-[212px] bg-cover bg-center bg-no-repeat w-full  border-white"
                style={{
                  backgroundImage: `url(${freelance})`,
                }}
              ></div>
            </div>
            <h2 className="text-center text-[1.4rem] font-extrabold text-[#ffffff] tracking-wider mb-3">
              Freelance Web Development
            </h2>
            <div className="texty-4 px-2 text-left flex container flex-col justify-center items-center w-50% border-[1.5px] h-[205px] bg-[#171717] rounded-md border-white">
              <p className="mt-5 mx-2 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                I've combined my passion for coding and problem-solving to
                create impactful digital solutions for clients.
              </p>
              <p className="mt-2 mx-2 mb-5 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                Mastering React, TypeScript, and CSS, I've created captivating
                websites that capture brand essence and user engagement.
                Translating client visions into seamless online platforms is my
                expertise.
              </p>
            </div>
          </div>
          {/*Grid Item*/}
          <div className="flex flex-col z-prop">
            <div className=" mb-7 container mx-auto flex flex-col items-center">
              {/* Project Image */}
              <div
                className="rounded-md border-[2px] h-[180px] md:h-[212px] bg-cover bg-center bg-no-repeat w-full  border-white"
                style={{
                  backgroundImage: `url(${Ecommerce})`,
                }}
              ></div>
            </div>
            <h2 className="text-center text-[1.4rem] font-extrabold text-[#ffffff] tracking-wider mb-3">
              Freelance Ecommerce Development
            </h2>
            <div className="texty-4 px-2 text-left flex container flex-col justify-center items-center w-50% border-[1.5px] h-[205px] bg-[#171717] rounded-md border-white">
              <p className="mt-5 mx-2 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                I specialized in crafting dynamic and user-centric online
                shopping experiences.
              </p>
              <p className="mt-2 mx-2 mb-5 tracking-[0.032em] leading-[18px] md:leading-normal text-sm font-medium text-white">
                Leveraging my expertise, I've seamlessly developed dynamic
                e-commerce solutions to empower businesses with efficient and
                captivating online storefronts, driving sales and enhancing
                customer engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
