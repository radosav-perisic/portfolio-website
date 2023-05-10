import React from "react";

const ResumeButton = () => {
  return (
    <a
      className="flex justify-between items-center w-full text-gray-300"
      href="/Resume.pdf"
      target="_blank"
    >
      {" "}
      <button className="border-[3px] text-[#ffb13c] hover:text-white hover:border-[#bf5606] border-white z-prop font-semibold py-[8.5px] px-9 mr-2 mb-1 rounded-sm hover:bg-[#bf5606] duration-500">
        Resume
      </button>
    </a>
  );
};

export default ResumeButton;
