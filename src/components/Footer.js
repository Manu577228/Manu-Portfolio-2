import React from 'react';
import './Footer.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <div>
                            <p>Tyagarajanagara,Basavanagudi</p>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />+919972642230</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} />bnmanubharadwaj1844@gmail.com</h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About me</h4>
                    <p>Hi I am Manu Bharadwaj BN. I enjoy
                        discussing new projects &
                        design challenges.
                    </p>
                    <div>
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer