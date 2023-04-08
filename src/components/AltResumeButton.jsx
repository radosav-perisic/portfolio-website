const AltResumeButton = () => {
  const handleButtonClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <button
      className="bg-[#ca8a04] flex z-prop font-bold py-2.5 px-6  md:py-5 md:px-12 md:mt-12 md:mb-3 md:mr-2  rounded-xl text-xl hover:bg-[#bf5606] duration-500"
      onClick={handleButtonClick}
    >
      Resume
    </button>
  );
};

export default AltResumeButton;
