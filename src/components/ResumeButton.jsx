import React from "react";

const ResumeButton = () => {
  return (
    <a
      className="flex justify-between items-center w-full text-gray-300"
      href="/Resume.pdf"
      target="_blank"
    >
      {" "}
      <button className="bg-[#ca8a04] z-prop font-bold py-2.5 px-9 mr-2 mb-1 rounded-md hover:bg-[#bf5606] duration-500">
        Resume
      </button>
    </a>
  );
};

export default ResumeButton;
