const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#262626] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#ca8a04]">
            About
          </p>
        </div>
        <div className="max-width-[1000px] width-full px-4 grid-cols-2 gap-8">
          <div className="text-4xl font-bold">
            <p>
              Hi. I'm Radosav, nice to meet you!. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-bussiness all the
              way to large enterprise corporations. What would you do if you had
              a React front end Engineer available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
