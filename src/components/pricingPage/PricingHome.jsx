import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import PricingArea from './PricingArea';
import Footer from '../shared/footer/Footer';

const PricingHome = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <PricingArea />
            <Footer />
        </div>
    );
};

export default PricingHome;