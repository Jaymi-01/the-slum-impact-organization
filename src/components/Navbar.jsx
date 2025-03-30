import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-xl'>
      <div className='flex justify-between items-center px-6 md:px-12 py-4'>
        <h1 className='text-2xl text-lime-300 font-script font-bold'>SIO</h1>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 text-xl cursor-pointer'>
          <Link to="home" smooth={true} duration={500} className='hover:text-lime-300 duration-200'>Home</Link>
          <Link to="about" smooth={true} duration={500} className='hover:text-lime-300 duration-200'>About Us</Link>
          <Link to="project" smooth={true} duration={500} className='hover:text-lime-300 duration-200'>Past Projects</Link>
          <Link to="exco" smooth={true} duration={500} className='hover:text-lime-300 duration-200'>Our Executives</Link>
        </div>

        <button className='hidden md:block py-2 px-5 rounded-md border border-lime-300 hover:bg-lime-300 hover:text-white'>
          Support Us
        </button>
        
        {/* Mobile Menu Button */}
        <div className='md:hidden z-50' onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-lime-300' />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-lime-300 bg-opacity-90 flex flex-col justify-center items-center text-xl space-y-6 text-white transition-transform duration-300 ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Link to="home" smooth={true} duration={500} onClick={() => setNavOpen(false)} className='hover:text-lime-300 duration-200 font-bold'>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={() => setNavOpen(false)} className='hover:text-lime-300 duration-200 font-bold'>About Us</Link>
        <Link to="project" smooth={true} duration={500} onClick={() => setNavOpen(false)} className='hover:text-lime-300 duration-200 font-bold'>Past Projects</Link>
        <Link to="exco" smooth={true} duration={500} onClick={() => setNavOpen(false)} className='hover:text-lime-300 duration-200 font-bold'>Our Executives</Link>
        <button className='py-2 px-5 rounded-md border border-lime-300 hover:bg-lime-300 hover:text-white' onClick={() => setNavOpen(false)}>
          Support Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
