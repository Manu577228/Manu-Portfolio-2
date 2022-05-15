import React from 'react';
import './HeroImg.css';
import { Link } from 'react-router-dom';
import IntroImg from '../assets/intro.webp'

function HeroImg() {
    return (
        <div className='hero'>
            <div className='mask'>
        <img className='into-img' src={IntroImg} alt='svg-image' />
            </div>
            <div className='content'>
                <p>HI, I'M A PASSIONATE</p>
                <h1>REACT DEVELOPER</h1>
                <div>
                    <Link to='/project' className='btn'>
                      Projects              
                    </Link>
                    <Link to='/contact' className='btn btn-light'>
                      Contact            
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg