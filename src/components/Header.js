import React from 'react';

import Logo from "../assets/rv.svg"
const Header = () => {
  const handleDownload =()=>{
    const url = 'https://drive.google.com/file/d/1ExElvtNqXA_5a1Tm2Q2qRzc4YJmTUrBq/view?usp=sharing';
    window.open(url, '_blank');
  }
  return (
    <header className="py-8">
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <div><h2 className='h2 text-accent'>Ruben <span>Vasquez</span></h2></div>
            <button className='btn btn-sm' onClick={handleDownload}>Ver CV </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
