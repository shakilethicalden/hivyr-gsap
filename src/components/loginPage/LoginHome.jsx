import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Login from './Login';
import Footer from '../shared/footer/Footer';

const LoginHome = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <Login />
            <Footer />
        </div>
    );
};

export default LoginHome;