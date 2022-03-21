import { Container, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image'
import css from '../../styles/Home.module.css'
import featureImg from '../../images/images/featuredSectionPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, angleLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CustomCarousel from './Carousel';

const Services = () => {

    let services = ['Wordpress Website', 'Coded Website', 'Mobile App', 'ERP Software', 'Social Media Marketing', 'Ladger App']
    return (
        <div style={{ background: '#49D3FF' }}>
            <Container className={`${css.feature}`} maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <h2 className={`${css.featureH2}`}>Our Main Features that we serve our clients</h2>
                        {
                            services.map((v, i) => <p key={i} className={`${css.featureP}`}>{i + 1}. {v}</p>)
                        }
                        <div className={`${css.carouselBtn}`}>
                            <FontAwesomeIcon style={{ padding: '10px 15px', fontSize: '20px' }} icon={faAngleLeft} />
                            <FontAwesomeIcon style={{ padding: '10px 15px', fontSize: '20px' }} icon={faAngleRight} />
                        </div>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item sx={{ display: { xs: 'none', md: 'block' }, marginTop: '10px' }} md={5}>
                        {/* <CustomCarousel /> */}
                        <Image src={featureImg} alt='feature'/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {
                        services.map((v, i) => (
                            <Grid sx={{ marginTop: '15px', display: { xs: 'none', md: 'block' } }} key={i} item md={2}>
                                <div style={{ borderTop: '1px solid #000', maxWidth: '180x' }}>
                                    <small>Services</small>
                                    <p className={`${css.featureSliderP}`}>{v}</p>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Services;