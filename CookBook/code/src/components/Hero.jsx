import React from 'react'
import '../styles/Hero.css'
import heroImg1 from '../images/hero img 1.png'
import heroImg2 from '../images/hero img 2.png'
import heroImg3 from '../images/hero img 3.png'
import heroImg4 from '../images/hero img 4.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
              <div className="hero-line" />
              <h1>Every Meal is a page in Life's Diary!!...</h1>
              <p>"Behind every Meal lies a story of Flavors, Emotions & Moments that stay with us Forever".</p>
              <a href="#recipies"><button>Recipies</button></a>
          </div>
        <div className="hero-images">
            <span className='span1'>
              <img src={heroImg2} alt="" />
              <img src={heroImg4} alt="" />
            </span>
            <span className='span2'>
              <img src={heroImg3} alt="" />
              <img src={heroImg1} alt="" />
            </span>
        </div>
    </div>
  )
}

export default Hero