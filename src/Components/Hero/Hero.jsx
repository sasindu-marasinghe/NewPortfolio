import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import resume from '../../assets/resume.pdf'; // Import your resume file
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Sasindu Marasinghe,</span> web developer</h1>
      <p>I am a web developer and undergraduate student at SLIIT University.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink 
            className='anchor-link' 
            href='#contact'
          >
            Connect with me
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a 
            href={resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
