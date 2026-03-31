import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import ProductBanner from './ProductBanner';
import ProductAbout from './ProductAbout';
import ProductCollection from './ProductCollection.jsx';
import ProductQuote from './ProductQuote';
import Testimonials from '../testimonial/Testimonial';


const ProductHome = () => {
    return (
        <div>
            <ProductBanner />
            <ProductAbout />
            <ProductCollection />          
            <ProductQuote />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default ProductHome;