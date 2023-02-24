import React from "react";
import { FaBars } from "react-icons/fa";
import rp from "../assets/rp.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#262626] text-gray-300 ">
      <div>
        <img src={rp} alt="Logo Image" style={{ width: "100px" }} />
      </div>

      {/* main-menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* mobile-menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
