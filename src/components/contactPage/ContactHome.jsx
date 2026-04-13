import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ContactArea from './ContactArea';
import Footer from '../shared/footer/Footer';
import ContactBanner from './ContactBanner';

const ContactHome = () => {
    return (
        <div >
            <ContactBanner />
            <ContactArea />
            <Footer />

        </div>
    );
};

export default ContactHome;