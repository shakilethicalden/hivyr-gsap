import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import HrManagementBanner from './HrManagementBanner';
import HrManagementFeatures from './HrManagementFeatures';
import RealTimeManagement from './RealtimeManagement';
import HowManagementWorks from './HowManagementWorks';
import Footer from '@/components/shared/footer/Footer';

const HrManagementHome = () => {
    return (
        <div>
            <Navbar />
            <HrManagementBanner />
            <HrManagementFeatures />
            <RealTimeManagement />
            <HowManagementWorks />
            <Footer />
        </div>
    );
};

export default HrManagementHome;