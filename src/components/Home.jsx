import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* Cointainer */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ca8a04]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Radosav Perisic</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a React Front End Engineer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a front-end engineer, I have abundant experience working with
          JavaScript, React.js, TypeScript, and Next.js. I specialize in using
          React hooks to manage state and avoid the need for external libraries
          like Redux. With a deep understanding of both the theoretical and
          practical aspects of front-end development, I excel at creating
          visually stunning and highly functional user interfaces. My attention
          to detail and ability to communicate effectively with designers,
          developers, and other stakeholders make me an excellent team player.
        </p>
      </div>
    </div>
  );
}

export default Home;
