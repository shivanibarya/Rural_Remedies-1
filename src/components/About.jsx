import React from 'react'
import "./About.css"
import img from "../assets/AboutImg.avif"
import { Link } from 'react-router-dom'

function About() {
  
  return (
    <div className="About-main">
        <div className="left">
          <img src={img} alt=""/>
        </div>
        <div className="right">
             <h1 className='text-success d-flex justify-content-start p-4'>About Us </h1>

            <p className='text-white px-4 fs-4'>
            Come join us in celebrating the knowledge of rural women and working together to make healthcare better for everyone. Together, we can create a healthier future! Explore our platform to share, learn, and collaborate on homemade remedies that empower communities and promote well-being
            </p>
             <button  className=' btn d-flex justify-content-center m-4 bg-transparent text-success border border-primary '>
              <Link to="../contact">Contact-Us</Link>
             </button>
        </div>
    </div>
  )
}

export default About
