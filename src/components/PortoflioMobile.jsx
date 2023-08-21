import React from "react";

const PortfolioMobile = () => {
  return (
    <a
      className="flex justify-between items-center w-full text-gray-300"
      href="/Resume.pdf"
      target="_blank"
    >
      {" "}
      <button className="bg-[#ec8406ea] border-4 border-white z-10 text-white font-bold mr-2 py-1.5 px-1.5">
        Resume
      </button>
    </a>
  );
};

export default PortfolioMobile;
