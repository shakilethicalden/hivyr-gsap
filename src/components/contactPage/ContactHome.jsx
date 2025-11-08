import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import ContactArea from './ContactArea';
import Footer from '../shared/footer/Footer';

const ContactHome = () => {
    return (
        <div >
            <div className=''>
                <Navbar />
            </div>
            <ContactArea />
            <Footer />

        </div>
    );
};

export default ContactHome;