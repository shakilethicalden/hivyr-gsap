import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import ConversationalBanner from './ConversationalBanner';
import Footer from '@/components/shared/footer/Footer';
import ConversationalFeatures from './ConversationalFeatures';
import BuildVoiceAI from './BuildVoiceAI';
import HowConversationalWorks from './HowConversationalWorks';
import FAQ from '@/components/homePage/faq/FAQ';

const ConversationalHome = () => {
    return (
        <div>
            <Navbar />
            <ConversationalBanner />
            <ConversationalFeatures />
            <BuildVoiceAI />
            <HowConversationalWorks />
            <FAQ />
            <Footer />
        </div>
    );
};

export default ConversationalHome;