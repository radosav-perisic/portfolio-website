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
      <div className="max-w-[1000px] lg:pt-10 mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ca8a04] z-prop">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold z-prop text-[#d8da91]">
          Radosav Perisic 
        </h1>
        <h2 className="text-4xl sm:text-7xl sm:text-left z-prop  font-bold text-[#bcbcb3] ">
          I'm a React Front End Engineer. 
        </h2>
    <Typed className="text-4xl sm:text-7xl font-bold z-prop text-[#8f6e19]"
           strings={['Javascript', 'React', 'TypeScript', 'Tailwind' ]} typeSpeed={60} backSpeed={70} loop/>
        <p className="text-[#adaf92] py-4 max-w-[700px] z-prop">
        I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-bussiness all the
              way to large enterprise corporations. What would you do if you had
              a React front end Engineer available at your fingertips?
        </p>
        <div className="flex">
          <Link to="work" smooth={true} duration={800}>
            <button className=" text-white z-prop group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ca8a04] hover:border-[#ca8a04] duration-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
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
