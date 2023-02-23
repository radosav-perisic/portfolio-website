import React from "react";
//  q
import rp from "../assets/rp.png";


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-grey-300 ">
      <div>
        <img src={rp} alt='Logo Image' style={{width: '100px'}} />
      </div>
    </div>
  );
};

export default Navbar;
