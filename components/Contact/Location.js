import React from 'react';
import Image from 'next/image'
import image from '../../images/images/contact.png'
import css from '../../styles/contact.module.css'
import { Container } from '@mui/material';

const Location = () => {
    return (
        <div style={{ background:'#FFFEF4',padding:'5vh 0'}}>
            <Container>
                <div className={css.contactVisit}>
                    <h2>Visit Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, viverra bibendum quisque tortor sed lectus eget scelerisque. Consectetur eget habitant imperdiet amet vestibulum platea. Risus tortor, est sed tellus. Feugiat eu sociis consequat arcu bibendum.</p>
                </div>
                <div className={css.contactFlexLocation}>
                    <Image src={image} alt="contact location" />
                    <div className={css.cLocation}>
                        <div style={{textAlign:'right'}}>
                            <p>Bishwanath,</p>
                            <p>Maijdee 1200,</p>
                            <p>Noakhali Chittagong</p>
                        </div>
                        <div>
                            <div className={css.cTimeFlex}>
                                <span className={css.contactTime}>08</span>
                                <p className={css.cTime}>Morning</p>
                            </div>
                            <div className={css.cTimeFlex}>
                                <span style={{color:'#C4C4C4'}} className={css.contactTime}>To</span>
                            </div>
                            <div className={css.cTimeFlex}>
                                <span className={css.contactTime}>06</span>
                                <p className={css.cTime}>Evening</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Location;