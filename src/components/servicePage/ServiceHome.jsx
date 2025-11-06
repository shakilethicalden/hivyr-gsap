import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ServiceArea from './ServiceArea';
import ClientSection from '../clients/ClientSection';
import Footer from '../shared/footer/Footer';
import ServiceBanner from './ServiceBanner';
import CTA from '../homePage/cta/CTA';
import ServiceArea2 from './ServiceArea2';

const ServiceHome = () => {
    return (
        <div>
            <div className='px-4 sm:px-8 lg:px-16'>
                <Navbar />
            </div>
            <ServiceBanner />
            <ServiceArea />
            <ServiceArea2 />
            <ClientSection />
            <CTA />
            <Footer />
        </div>
    );
};

export default ServiceHome;