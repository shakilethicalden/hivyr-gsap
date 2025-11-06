import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import ProductBanner from './ProductBanner';
import ProductBannerImg from './ProductArea2.jsx';
import Testimonials from '../testimonial/Testimonial';
import ProductArea from './ProductArea';
import ProductArea2 from './ProductArea2.jsx';
import ServiceArea from '../servicePage/ServiceArea';


const ProductHome = () => {
    return (
        <div>
            <div className='px-4 sm:px-8 lg:px-16'>
                <Navbar />
            </div>
            <ProductBanner />
            <ProductArea2 />
            <ProductArea />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default ProductHome;