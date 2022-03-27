import React from 'react';
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'

const Custom404 = () => {
    return (
        <div style={{ background:'#EEFEFF'}}>
            <Navbar/>
            <div className='notFound'>
                <div>
                    <h1 style={{ fontSize: '60px',textAlign:'center',marginBottom:'0px' }}>4o4</h1>
                    <h1>!!not found!!</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Custom404;