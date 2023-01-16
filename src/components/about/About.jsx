import React from 'react'
import "./About.css";
import award from '../../img/award.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='about-img' />
            </div>
        </div>
        <div className='about-right'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-sub'>
                Its a very good looking portfolio created using React.
            </p>
            <p className='about-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste, earum officia voluptates dolorem necessitatibus quas accusantium ipsam alias facere qui, itaque quis molestiae! Quia inventore ut excepturi nam placeat?
            </p>
            <div className='about-award'>
                <img src={award} alt="award" className='about-award-img'/>
                <div className="about-award-text">
                    <h4 className='about-award-title'>International Design Awards 2021</h4>
                    <p className='about-award-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About