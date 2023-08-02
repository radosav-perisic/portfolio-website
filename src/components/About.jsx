const About = () => {
  return (
    <div name="about" className="w-full h-screen background-2 text-[#bcbcb3]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4 z-prop">
          <p className="text-4xl font-bold inline border-b-4 text-[#f1eeee] border-[#ca8a04]">
            About
          </p>
        </div>
        <div className="max-w-[1300px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right md:text-[55px] md:tracking-wide lg:text-5xl text-[34px] leading-8 font-bold z-prop text-[#f1eeee]">
            <p>
            Hey there, I'm Radosav! It's a pleasure to connect with you. Go ahead and have a look around.
            </p>
          </div>    
          <div className="z-prop text-[#d0d0c5] font-semibold text-lg">
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
