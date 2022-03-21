import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from '@mui/material';
import css from '../../styles/about.module.css'
import image from '../../images/images/teamMember.png'
import Image from 'next/image'

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
      },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
      },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
      },
        items: 2,
        partialVisibilityGutter: 30
    }
};

const BannerCarousel = () => {
    const imagArr =[image,image,image,image,image]

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()}><FontAwesomeIcon icon={faPlus}/></button>;
    };
    return (
        <div style={{ background: '#FFFEF4',padding:'10vh 0' }}>
            <Container maxWidth="lg">
                <h2 className={css.sliderHeading}>👋<span style={{ marignLeft: '-40px' }}>Meet our team</span></h2>
                <p className={css.sliderPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse morbi euismod sem quis quisque diam magna. Vel consectetur sit mauris, amet, amet. Cursus nunc eleifend ipsum sit. Magna elit erat malesuada consectetur congue tortor in gravida.
                </p>
                <Carousel partialVisible autoPlaySpeed={3000} responsive={responsive}>
                    {
                        imagArr.map((item,i)=>(
                            <div key={i} className={css.sliderImage}>
                                <Image src={item} alt="okayk"/>
                                <h4>Md. Faishal</h4>
                                <p>Front-end Developer</p>
                            </div>
                        ))
                    }
                </Carousel>
            </Container>
        </div>
    );
};

export default BannerCarousel;