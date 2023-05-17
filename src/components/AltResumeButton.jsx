const AltResumeButton = () => {
  const handleButtonClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <button
      className="border-[4px] text-[#ca8a04] tracking-wide hover:text-white hover:border-[#bf5606] border-white flex z-prop font-bold md:py-[16px] md:px-[38px] md:mt-12 md:mb-3 md:mr-2 rounded-sm text-[20px] hover:bg-[#bf5606] bg-[#262626] duration-500"
      onClick={handleButtonClick}
    >
      Resume
    </button>
  );
};

export default AltResumeButton;
