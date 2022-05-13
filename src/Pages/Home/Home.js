import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <OurServices />
            <Appointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;