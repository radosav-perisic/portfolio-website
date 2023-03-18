import React from "react";

const AltResumeButton = () => {
  return (
    <a
      className="flex justify-center items-center w-full text-gray-300"
      href="/Resume.pdf"
      target="_blank"
    >
      {" "}
      <button className="bg-[#ca8a04] flex z-prop font-bold py-5 px-12 mt-12  mr-2 rounded-xl text-xl hover:bg-[#ca6a04]">
        Resume
      </button>
    </a>
  );
};

export default AltResumeButton;
