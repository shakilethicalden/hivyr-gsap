import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import AgentArea from './AgentArea';
import AgentBanner from './AgentBanner';
import CTA from '../homePage/cta/CTA';

const AgentHome = () => {
    return (
        <div>
            <AgentBanner />
            <AgentArea />
            <CTA />
            <Footer />
        </div>
    );
};

export default AgentHome;