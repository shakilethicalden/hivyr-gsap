import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import ChatBanner from './ChatBanner';
import ChatFeatures from './ChatFeatures';
import ChatExperience from './ChatExperience';
import HowChatWorks from './HowChatWorks';
import Footer from '@/components/shared/footer/Footer';

const ChatHome = () => {
    return (
        <div>
            <Navbar />
            <ChatBanner />
            <ChatFeatures />
            <ChatExperience />
            <HowChatWorks />
            <Footer />
        </div>
    );
};

export default ChatHome;