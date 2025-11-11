import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ServiceArea from './ServiceArea';
import ClientSection from '../clients/ClientSection';
import Footer from '../shared/footer/Footer';
import ServiceBanner from './ServiceBanner';
import CTA from '../homePage/cta/CTA';
import ServiceArea2 from './ServiceArea2';
import ServiceVideo from './ServiceVideo';

const ServiceHome = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <ServiceBanner />
            <ServiceArea />
            {/* <ServiceArea2 /> */}
            <ClientSection />
            <CTA />
            <Footer />
        </div>
    );
};

export default ServiceHome;