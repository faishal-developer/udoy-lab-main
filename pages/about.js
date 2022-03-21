import Head from 'next/head';
import React from 'react';
import BannerCarousel from '../components/About/Carousel';
import HowWeWork from '../components/About/HowWeWork';
import OurStorySec from '../components/About/OurStorySec';
import Footer from '../components/Shared/Footer'

const about = () => {
    return (
        <div>
            <OurStorySec/>
            <BannerCarousel/>
            <HowWeWork/>
            <Footer/>
        </div>
    );
};

export default about;