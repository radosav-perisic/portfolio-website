import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typed from "react-typed";
import AltResumeButton from "./AltResumeButton";
import { PopupButton } from "react-calendly";


function Home() {
  return (
    <div name="home" className="w-full h-screen background">
      {/* Cointainer */}
      <div className="max-w-[1000px] lg:pt-10 mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-[#ec8406ea] z-prop mt-16 md:mt-8">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold z-prop text-[#d8da91]">
          Radosav Perisic
        </h1>
        <h2 className="text-4xl sm:text-7xl sm:text-left z-prop  font-bold text-[#ffffff] ">
          I'm a React Front End Engineer.
        </h2>
        <Typed
          className="text-[2.5rem] md:text-7xl font-bold typed z-prop uppercase lg:mt-6 lg:mb-3 text-[#ec8406ea]"
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
        <PopupButton
        className="text-white  font-bold text-[1.20rem] tracking-wide group border-[5px] px-7 py-[1.1rem] mr-5 my-2 flex items-center hover:bg-orange-700 hover:border-orange-700 duration-300 bg-[#ec8406ea]"
        url="https://calendly.com/radosavperisic-contact/30-minute-call"
   
        rootElement={document.getElementById("root")}
        text="Let's Talk"
      />
          <Link to="work" smooth={true} duration={800}>
            <button className="text-[#ec8406ea] hover:text-white font-bold text-[1.20rem] tracking-wide group border-[5px] px-5 py-[1.1rem] my-2 flex items-center hover:bg-[#ec8406ea] duration-500 bg-[#202020]">
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
