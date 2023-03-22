import React from 'react';

import Logo from "../assets/logo.svg"
const Header = () => {
  const handleDownload =()=>{
    const url = 'https://drive.google.com/file/d/1dputh23GOxUPQjqscvS5AHTSCfn0FPbv/view';
    window.open(url, '_blank');
  }
  return (
    <header className="bg-pink-300 py-8">
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <button className='btn btn-sm' onClick={handleDownload}>Ver CV </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
