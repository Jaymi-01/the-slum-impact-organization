import React from 'react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }
    


  return (
    <div>
        <a onClick={scrollToTop}>To the top!</a>
    </div>
  )
}

export default Footer