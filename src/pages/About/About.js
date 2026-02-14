import React from 'react'
import "./About.css";

function About() {
  return (
    <>
      <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-sg-6 col-xs-12 about-img'>
              <img src="/1686734377978.jpg" alt="profile-pic" /></div>
            <div className='col-md-6 col-xl-6 col-sg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>MERN Stack Developer with hands-on experience building full-stack 
                    web applications using React.js, Node.js, Express.js, and MongoDB.
                     Developed production-style applications including eCommerce and 
                     booking platforms with authentication, RESTful APIs, and database
                     integration. Strong in JavaScript fundamentals, REST architecture,
                      and responsive UI development. Seeking a Full Stack / 
                    MERN Developer role to contribute to scalable web solutions.</p>
            </div>
        
        </div>
      </div>
    </>
  )
}

export default About;
