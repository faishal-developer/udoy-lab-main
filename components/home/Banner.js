import { Container } from '@mui/material';
import React from 'react';
import css from '../../styles/Home.module.css'

const Banner = () => {
    return (
        <Container maxWidth="lg" className={`${css.bannerContent}`}>
            <h1 className={`${css.bannerH2}`}>
                Shaping a secure and sustainable energy future for all.
            </h1>
        </Container>
    );
};

export default Banner;