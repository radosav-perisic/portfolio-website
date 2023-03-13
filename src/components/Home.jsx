import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#262626]">
      {/* Cointainer */}
      <div className="max-w-[1000px] lg:pt-10 pt-48 mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ca8a04]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#d8da91]">
          Radosav Perisic
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#bcbcb3]">
          I'm a React Front End Engineer.
        </h2>
        <p className="text-[#adaf92] py-4 max-w-[700px]">
          As a front-end engineer, I have abundant experience working with
          JavaScript, React.js, TypeScript, and Tailwind. I specialize in using
          React hooks to manage state and avoid the need for external libraries
          like Redux. With a deep understanding of both the theoretical and
          practical aspects of front-end development, I excel at creating
          visually stunning and highly functional user interfaces. My attention
          to detail and ability to communicate effectively with designers,
          developers, and other stakeholders make me an excellent team player.
        </p>
        <div>
        <Link to="work" smooth={true} duration={800}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ca8a04] hover:border-[#ca8a04]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>;
        </div>
      </div>
    </div>
  );
}

export default Home;
