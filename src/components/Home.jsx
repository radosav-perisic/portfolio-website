import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typed from "react-typed";
import AltResumeButton from "./AltResumeButton";
import PortfolioMobile from "./PortoflioMobile";
import ResumeButton from "./ResumeButton";

function Home() {
  return (
    <div name="home" className="w-full h-screen background">
      {/* Cointainer */}
      <div className="max-w-[1000px] lg:pt-10 mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-[#ca8a04] z-prop mt-8">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold z-prop text-[#d8da91]">
          Radosav Perisic
        </h1>
        <h2 className="text-4xl sm:text-7xl sm:text-left z-prop  font-bold text-[#ffffff] ">
          I'm a React Front End Engineer.
        </h2>
        <Typed
          className="text-5xl md:text-7xl font-bold typed z-prop uppercase mt-6 mb-3 text-[#ecba06ea]"
          strings={["Javascript", "React", "TypeScript", "Tailwind"]}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
        <p className="text-[#ececdb] py-4 max-w-[700px] z-prop tracking-wide">
          Creating outstanding software that improves the lives of people around
          me is my driving passion. My area of expertise lies in developing
          software solutions for clients of varying sizes, from individuals and
          small businesses to large corporations. Consider the possibilities of
          having a proficient React front-end engineer available at your
          fingertips. What kind of impact could we make together?
        </p>
        <div className="flex  z-prop">
          <Link to="work" smooth={true} duration={800}>
            <button className="text-[#ca8a04] hover:text-white font-semibold tracking-wide group border-[3px] px-5 py-3 my-2 flex items-center hover:bg-[#ca8a04] hover:border-[#ca8a04] duration-500 bg-[#202020]">
              View Work
              <span className="group-hover:rotate-90 text-white duration-300">
                <HiArrowNarrowRight className="ml-3" size={20} />
              </span>
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center w-full text-gray-300">
          <AltResumeButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
