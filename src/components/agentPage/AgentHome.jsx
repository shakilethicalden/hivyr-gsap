import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import AgentArea from './AgentArea';
import AgentBanner from './AgentBanner';

const AgentHome = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <AgentBanner />
            <AgentArea />
            <Footer />
        </div>
    );
};

export default AgentHome;