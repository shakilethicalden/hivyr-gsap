import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import AgentArea from './AgentArea';
import AgentBanner from './AgentBanner';
import CTA from '../homePage/cta/CTA';

const AgentHome = () => {
    return (
        <div>
            <div className='px-4 sm:px-8 lg:px-16'>
                <Navbar />
            </div>
            <AgentBanner />
            <AgentArea />
            <CTA />
            <Footer />
        </div>
    );
};

export default AgentHome;