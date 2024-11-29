import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about_title'>
            <h1>About me</h1>
            <img src= {theme_pattern}alt="decorative pattern" />

        </div>
        <div className='about-section'>
            <div className="about_left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about_right">
                <div className="about-para">
                <p>
                Hello! I’m <strong>Sasindu Marasinghe</strong>, a passionate web developer and an undergraduate student at SLIIT University. 
                 With a strong foundation in HTML, CSS, JavaScript, and React, I enjoy creating visually appealing and user-friendly websites. 
                </p>
            <p>
                I’m currently exploring advanced web technologies and frameworks while working on real-world projects to enhance my skills. 
                My interests include UI/UX design, responsive web development, and solving challenging problems through innovative solutions.
             </p>                </div>
             <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width: "50%"}} /></div>
                <div className="about-skill"><p>React js</p> <hr style={{width: "70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width: "60%"}} /></div>
                <div className="about-skill"><p>Python </p> <hr style={{width: "50%"}} /></div>

             </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECT COMPLETED </p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>HAPPY CLIENTS </p>
                
            </div>
            

        </div>
    </div>
  )
}

export default About