import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import AboutBanner from './AboutBanner';
import AboutArea from './AboutArea';
import Team from './Team';
import Footer from '../shared/footer/Footer';
import AboutTeam from './AboutTeam';


const AboutHome = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <AboutBanner />
            <AboutArea />
            <Team />
            <AboutTeam />
            <Footer />
        </div>
    );
};

export default AboutHome;