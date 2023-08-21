import React from "react";

const ResumeButton = () => {
  return (
    <a
      className="flex justify-between items-center w-full text-gray-300"
      href="/Resume.pdf"
      target="_blank"
    >
      {" "}
      <button className="border-[4px] text-[#ffb13c] hover:text-white hover:border-orange-700 border-white z-prop font-semibold py-[8.5px] px-9 mr-2 mb-1 hover:bg-orange-700 duration-500">
        Resume
      </button>
    </a>
  );
};

export default ResumeButton;
