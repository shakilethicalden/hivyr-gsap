import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ServiceArea from './ServiceProcess';
import ClientSection from '../clients/ClientSection';
import Footer from '../shared/footer/Footer';
import ServiceBanner from './ServiceBanner';
import CTA from '../homePage/cta/CTA';
import ServiceArea2 from './ServiceArea2';
import ServiceVideo from './ServiceVideo';

const ServiceHome = () => {
    return (
        <div>
            <ServiceBanner />  
            <ServiceArea2 />
            <ServiceArea />
            <CTA />
            <Footer />
        </div>
    );
};

export default ServiceHome;