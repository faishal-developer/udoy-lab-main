import React from 'react';
import image from '../../images/images/image6.png'
import image1 from '../../images/images/Rectangle.png'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Image from 'next/image'


const OnGoning = () => {
    let imageArr = [image1, image1, image1, image1, image1, image1]
    return (
        <Container>
            <Grid sx={{ pt: 5, mt: 5 }} container spacing={5}>
                <Grid item xs={7} >
                    <h1>Rahi Rahaman</h1>
                    <h3 style={{ color:'#868686'}}>Backend Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cursus vestibulum, sit at. Est eu et vel justo sed pharetra faucibus. Amet ante lobortis odio pretium pellentesque in nunc justo, praesent. Elit faucibus euismod fusce neque adipiscing.</p>
                </Grid>
                <Grid item xs={5}>
                    <Image src={image} alt="rahi"/>
                </Grid>
            </Grid>
            <div style={{marginTop:'80px'}}>
                <h2 style={{ textAlign: 'center', color:'#454ADE'}}>Ongoing Project</h2>
                <Grid container spacing={2}>
                {
                    imageArr?.map((v,i)=>(
                        <Grid key={i} item xs={4}>
                            <Image src={v} alt='placeholder-image'/>
                        </Grid>                       
                    ))
                }
                </Grid>
            </div>
        </Container>
    );
};

export default OnGoning;