import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Login from './Login';
import Footer from '../shared/footer/Footer';

const LoginHome = () => {
    return (
        <div>
            <div className='px-4 sm:px-8 lg:px-16'>
                <Navbar />
            </div>
            <Login />
            <Footer />
        </div>
    );
};

export default LoginHome;