import React from 'react';
import Carousel from 'react-multi-carousel';
// import CustomDot from 'react-multi-carousel';
import Image from 'next/image'
import image1 from '../../images/images/image1.png'
import image2 from '../../images/images/image.png'
import image3 from '../../images/images/image2.png'
import image4 from '../../images/images/image3.png'


const CustomCarousel = () => {
    console.log(image1);
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            // customDot={<CustomDot />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                }
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            <Image
                src={image1}
                
                height={100}
                width={100}
                alt='new'
            />
            <Image
                src={image2}
                
                height={100}
                width={100}
                alt="new"
            />
            <Image
                src={image3}
                
                height={100}
                width={100}
                alt="new"
            />
            <Image
                src={image4}
                
                height={100}
                width={100}
                alt="new"
            />
            <Image
                src={image2}
                
                height={100}
                width={100}
                alt="new"
            />
        </Carousel>
    );
};

export default CustomCarousel;