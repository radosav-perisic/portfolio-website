const AltResumeButton = () => {
  const handleButtonClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <button
      className="border-[4px] text-[#ffb13c] hover:text-white hover:border-[#bf5606] border-white flex z-prop font-bold md:py-[17px] md:px-10 md:mt-12 md:mb-3 md:mr-2 rounded-sm text-xl hover:bg-[#bf5606] bg-[#262626] duration-500"
      onClick={handleButtonClick}
    >
      Resume
    </button>
  );
};

export default AltResumeButton;
