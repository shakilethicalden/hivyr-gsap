import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import VideoCallBanner from './VideoCallBanner';
import VideoCallFeatures from './VideoCallFeatures';
import RealTimeVideo from './RealTimeVideo';
import HowVideoCallWorks from './HowVideoCallWorks';
import Footer from '@/components/shared/footer/Footer';

const VideoCallingHome = () => {
    return (
        <div>
            <Navbar />
            <VideoCallBanner />
            <VideoCallFeatures />
            <RealTimeVideo />
            <HowVideoCallWorks />
            <Footer />
        </div>
    );
};

export default VideoCallingHome;