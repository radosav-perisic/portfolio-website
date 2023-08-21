const About = () => {
  return (
    <div name="about" className="w-full h-screen background-2 text-[#bcbcb3]">
      <div className="flex flex-col justify-center md:items-center items-start w-full h-full">
        <div className="text-left pb-8 pl-4 lg:mt-0 mt-20 z-prop">
          <p className="text-5xl font-bold text-left inline border-b-4 text-[#ffffff] border-[#ca8a04]">
            About
          </p>
        </div>
        <div className="max-w-[1300px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="md:text-right text-left md:text-[45px] md:tracking-wide lg:text-5xl text-[34px] leading-8 font-bold z-prop text-[#f1eeee]">
            <p>
            Hey there, I'm Radosav! It's a pleasure to connect with you. Go ahead and have a look around.
            </p>
          </div>    
          <div className="z-prop text-[#d0d0c5] text-left font-semibold text-lg md:mb-0">
            <p>
              As a front-end engineer, I have abundant experience working with
          JavaScript, React.js, TypeScript, and Tailwind. With a deep understanding of both the theoretical and
          practical aspects of front-end development, I excel at creating
          visually stunning and highly functional user interfaces. My attention
          to detail and ability to communicate effectively with designers,
          developers, and other stakeholders make me an excellent team player.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
