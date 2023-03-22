import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll';
const Nav = () => {
  return (<nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
    <div className="container mx-auto">
      <div>
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 
        rounded-full max-w-[460px] m-auto flex justify-between text-2x1
        text-white/50">
          <Link to='home' activeClass="active"
          smooth={true} spy={true} className="cursor-pointer w-[60px] flex items-center 
          justify-center items-center text-2x1">
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass="active"
          smooth={true} spy={true} className="cursor-pointer w-[60px] flex items-center 
          justify-center items-center text-2x1">
            <BiUser />
          </Link>
          <Link to='services' activeClass="active"
          smooth={true} spy={true} className="cursor-pointer w-[60px] flex items-center 
          justify-center items-center text-2x1">
            <BsClipboardData />
          </Link>
          <Link to='contact' activeClass="active"
          smooth={true} spy={true} className="cursor-pointer w-[60px] flex items-center 
          justify-center items-center text-2x1">
            <BsBriefcase />
          </Link>
          <Link to='work' activeClass="active"
          smooth={true} spy={true} className="cursor-pointer w-[60px] flex items-center 
          justify-center items-center text-2x1">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </div>
  </nav>);
};

export default Nav;
