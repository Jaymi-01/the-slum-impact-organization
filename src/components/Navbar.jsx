import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky flex items-center justify-around py-4 shadow-xl cursor-pointer'>
        <h1 className='text-2xl text-lime-300 font-script font-bold'>SIO</h1>
        <div>
            <ul className='flex items-center gap-6'>
                <li className='hover:text-lime-300 duration-200'>Home</li>
                <li className='hover:text-lime-300 duration-200'>About Us</li>
                <li className='hover:text-lime-300 duration-200'>Past Projects</li>
                <li className='hover:text-lime-300 duration-200'>Our Executives</li>
            </ul>
        </div>
        <div>
            <button className='py-2 px-5 rounded-md border border-lime-300 hover:bg-lime-300 hover:text-white'>Support Us</button>
        </div>
    </div>
  )
}

export default Navbar