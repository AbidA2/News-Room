import React from 'react';
import '../App.css';
import Button from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-4.mp4" autoPlay loop muted></video>
        <h1> Stay Informed, Stay Empowered.</h1>
        <p>Are you ready to take the leap?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Latest Updates</Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Watch Us LIVE<i className='far fa-play-circle'></i></Button>
        </div>

    </div>
  )
}

export default Hero;