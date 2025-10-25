import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import ProductBanner from './ProductBanner';
import ProductBannerImg from './ProductArea2.jsx';
import Testimonials from '../testimonial/Testimonial';
import ProductArea from './ProductArea';


const ProductHome = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <ProductBanner />
            <ProductBannerImg />
            <ProductArea />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default ProductHome;