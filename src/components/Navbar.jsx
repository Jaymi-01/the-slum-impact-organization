import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-header backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between text-white
        text-xl items-center px-12 h-20'>

            <a className='text-2xl font-one md:text-3xl' href="#">SIO</a>

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                    <li><Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>About Us</Link></li>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>What We Do</Link></li>
                    <li><Link to="project" onClick={closeNav} smooth={true} offset={50} duration={500}>Past Projects</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Executives</Link></li>
                    <li><Link to="support" onClick={closeNav} smooth={true} offset={50} duration={500}>Support</Link></li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-white'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen bg-header z-40'
            >
                <ul className='font-semibold text-1xl space-y-8 mt-24 text-center '>
                    <li className='text-white'><Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>About Us</Link></li>
                    <li className='text-white'><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>What We Do</Link></li>
                    <li className='text-white'><Link to="project" onClick={closeNav} smooth={true} offset={50} duration={500}>Past Projects</Link></li>
                    <li className='text-white'><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Executives</Link></li>
                    <li className='text-white'><Link to="support" onClick={closeNav} smooth={true} offset={50} duration={500}>Support</Link></li>
                </ul>


            </motion.div>



        </div>
    </div>
  )
}

export default Navbar