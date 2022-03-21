import { Container, Grid } from '@mui/material';
import React from 'react';
import css from '../../styles/Home.module.css'
import img from '../../images/images/logo.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { fontSize } from '@mui/system';
import Link from 'next/link'



const Footer = () => {


    const data = [
        { first: 'Official phone number', second: '+8801725281740 , +8801688422699', icon: faPhone },
        { first: 'Looking for collaboration', second: 'completesystem@gmail.com', icon: faEnvelope },
        { first: `we don't operate our service from office yet`, second: `maijdi-3800, poro-bazar, Noakhali`, icon: faCompass }
    ]
    const links = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: 'about' },
        { name: 'Contact', link: 'contact' },
        { name: 'Projects', link: 'projects' },
        { name: 'Blog', link: 'blog' }
    ]
    const Questions = ['CMS', 'Coded Website', 'Mobile App', 'ManageMent Software', 'Ladger SoftWare', 'Digital Marketing']
    return (
        <div className={css.footer}>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} >
                        <Image width={50} alt='footer' height={42} src={img} />
                        <p style={{ fontSize: '14px', paddingRight: '20px' }}>Complete system solution. We build website, cms softers and mobile app for business .</p>
                        <div>
                            <FontAwesomeIcon style={{ paddingRight: '15px', fontSize: '20px' }} icon={faFacebook} />
                            <FontAwesomeIcon style={{ paddingRight: '15px', fontSize: '20px' }} icon={faLinkedin} />
                            <FontAwesomeIcon style={{ paddingRight: '15px', fontSize: '20px' }} icon={faTelegram} />
                            <FontAwesomeIcon style={{ paddingRight: '15px', fontSize: '20px' }} icon={faWhatsapp} />
                        </div>
                        <h4>Contact</h4>
                        {
                            data.map((v, i) => (
                                <div key={i} className={css.footerSubSection}>
                                    <div>
                                        <FontAwesomeIcon style={{ fontSize: '18px' }} icon={v.icon} />
                                    </div>
                                    <div>
                                        <small>{v.first}</small>
                                        <p>{v.second}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item sm={11} md={4} sx={{ mt: { xs: 0, md: 6 } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <h4>Usefull Links</h4>
                                {
                                    links.map((v, i) => {
                                        return <p style={{ fontSize: '15px', cursor: 'pointer' }} key={i}>
                                            <Link href={v.link} >{v.name}</Link>
                                        </p>
                                    })
                                }
                            </Grid>
                            <Grid item xs={8}>
                                <h4>Qestions</h4>
                                {
                                    Questions.map((v, i) => (
                                        <p style={{ fontSize: '15px' }} key={i}>
                                            {v}
                                        </p>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} md={1}>
                    </Grid>
                </Grid>
                <hr />
                <div className={css.footerBottomSection}>
                    <p>Copyright @2022 complete system solution.com</p>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Help Center</p>
                        <p>Contact</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;