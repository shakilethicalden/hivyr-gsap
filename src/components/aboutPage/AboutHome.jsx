import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import AboutBanner from './AboutBanner';
import AboutArea from './AboutArea';
import Team from './Team';
import Footer from '../shared/footer/Footer';

const AboutHome = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <AboutBanner />
            <AboutArea />
            <Team />
            <Footer />
        </div>
    );
};

export default AboutHome;