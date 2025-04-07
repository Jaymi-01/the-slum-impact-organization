import React from 'react'
import  { excos } from '../constants/Index.jsx'

const Exco = () => {
  return (
    <div className='mt-28 mx-6 md:mx-12'>
      <div>
        <h1 className="text-2xl text-center md:text-4xl font-semibold">Meet Our Executives</h1>
          {excos.map((exco, index) => (
            <div key={index} className="mt-10 px-6 py-4 grid md:flex gap-4">
              <div className=" mx-auto md:mx-0">
                <img src={exco.images} alt={exco.name} className="w-50 h-50 rounded-2xl" />
                
              </div>
              <div className="mt-2 text-center md:text-start">
                <h1 className="text-3xl md:text-2xl">{exco.name}</h1>
                <h1 className="text-xl md:sm opacity-50">{exco.role}</h1>
                <p className='text-md mt-2'>{exco.biodata}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Exco