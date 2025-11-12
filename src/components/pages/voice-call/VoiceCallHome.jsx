import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import VoiceCallBanner from './VoiceCallBanner';
import VoiceCallFeatures from './VoiceCallFeatures';
import VoiceCallExperience from './VoiceCallExperience';
import HowVoiceCallWorks from './HowVoiceCallWorks';
import Footer from '@/components/shared/footer/Footer';

const VoiceCallHome = () => {
    return (
        <div>
            <Navbar />
            <VoiceCallBanner />
            <VoiceCallFeatures />
            <VoiceCallExperience />
            <HowVoiceCallWorks />
            <Footer />
        </div>
    );
};

export default VoiceCallHome;