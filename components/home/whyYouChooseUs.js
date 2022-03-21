import { Container, Grid } from '@mui/material';
import React from 'react';
import css from '../../styles/Home.module.css'
import Image from 'next/image'
import img1 from '../../images/SVG/Group 10.svg'
import img2 from '../../images/SVG/Group 11.svg'
import img3 from '../../images/SVG/Group 12.svg'
import img4 from '../../images/SVG/Group 13.svg'
import img5 from '../../images/SVG/Group 14.svg'
import img6 from '../../images/SVG/Group 15.svg'

const WhyYouChooseUs = () => {
    const fake = [img1, img2, img3, img4, img5, img6]
    return (
        <Container maxWidth="lg">
            <h2 className={css.chooseH2}>Know more about us and our servises and our servise providing system</h2>
            <Grid container spacing={5}>
                {
                    fake.map((v, i) => (
                        <Grid item key={v} xs={12} sm={6} md={4}>
                            <Image width={50} height={50} src={v} />
                            <h3 className={css.chooseSubH3}>lorem10 </h3>
                            <p className={css.chooseP}>some text goes here .some text goes here .some text goes here .some text goes here .some text goes here .some text goes here .some text goes here .</p>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default WhyYouChooseUs;