import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import ProductBanner from './ProductBanner';
import ProductArea from './ProductArea';
import ProductArea2 from './ProductArea2.jsx';
import ProductQuote from './ProductQuote';
import Testimonials from '../testimonial/Testimonial';


const ProductHome = () => {
    return (
        <div>
            <ProductBanner />
            <ProductArea2 />
            <ProductArea />
            <ProductQuote />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default ProductHome;