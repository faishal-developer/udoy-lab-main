import { Container, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image'
import aboutBanner from '../../images/images/aboutBanner.png'
import CustomizedAccordions from './BannerAccordion';
import Navbar from '../Shared/Navbar'

import css from '../../styles/about.module.css'

const OurStorySec = () => {
    return (
        <div style={{background:'#EEFEFF'}}>
            <Navbar/>
        <Container maxWidth = "lg" sx={{padding:'10vh 0'}}>
        <Grid container spacing={5}>
            <Grid item md={5} sx={{display:{xs:'none',sm:'none',md:'block'}}}>
                <Image src={aboutBanner} alt="aboutBanner" />
            </Grid>
            <Grid item xs={1} ></Grid>
            <Grid item xs={10} md={5} sx={{pl:{md:5}}}>
                <h2 className={css.BannerHeading}>OUR STORY</h2>
                <p>Our story started with a dream and a group of passionate people.</p>
                <CustomizedAccordions/> 
            </Grid>
        </Grid>
        </Container>
    </div>
    );
};

export default OurStorySec;