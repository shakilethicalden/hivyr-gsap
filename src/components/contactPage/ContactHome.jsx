import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ContactArea from './ContactArea';
import Footer from '../shared/footer/Footer';

const ContactHome = () => {
    return (
        <div >
            <div className='px-4 sm:px-8 lg:px-16'>
                <Navbar />
            </div>
            <ContactArea />
            <Footer />

        </div>
    );
};

export default ContactHome;