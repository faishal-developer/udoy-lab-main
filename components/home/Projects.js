import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid } from '@mui/material';
import React from 'react';
import css from '../../styles/Home.module.css'
import image1 from '../../images/images/image.png'
import image2 from '../../images/images/image1.png'
import image3 from '../../images/images/image2.png'
import image4 from '../../images/images/image3.png'
import Image from 'next/image'
import '@ciar4n/izmir/docs/css/izmir.min.css'


const Projects = () => {

    let imgArr = [image1, image2, image3, image4, image1, image2]
    return (
        <Container maxWidth="lg">
            <h2 className={`${css.projectsH2}`}>Explore our letest projects and know more about us, our services and quality.</h2>
            <p className={css.projectP}>Explore More <FontAwesomeIcon className={css.projectIcon} icon={faAngleRight} /></p>
            <Grid container spacing={2}>
                {
                    imgArr.map((v, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <figure className={`c4-izmir c4-border-center ${css.figure}`}>
                                <Image src={v} />
                                <figcaption>
                                    <p>caption</p>
                                </figcaption>
                            </figure>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Projects;