import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ServiceArea from './ServiceArea';
import ClientSection from '../clients/ClientSection';
import Footer from '../shared/footer/Footer';
import ServiceBanner from './ServiceBanner';

const ServiceHome = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <ServiceBanner />
            <ServiceArea />
            <ClientSection />
            <Footer />
        </div>
    );
};

export default ServiceHome;