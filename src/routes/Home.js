import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'

function Home() {
    return (
        <div>
            <Navbar />
            <HeroImg style={{paddingTop: '12rem'}}/>
            <Work  />
            <Footer/>
        </div>
    )
}

export default Home