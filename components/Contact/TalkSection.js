import { faAt, faPhone, faUser,faSquarePhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Grid, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import Navbar from '../Shared/Navbar'
import css from '../../styles/contact.module.css'
import { Box } from '@mui/system';

const TalkSection = () => {
    return (
        <div style={{ background:'#EEFEFF'}}>
            <Navbar />
            <Container maxWidth='lg' style={{ padding: '2vh 2vw'}}>
                <div>
                    <div>
                        <h1 className={css.contactBannerHead}>Let’s talk</h1>
                        <p className={css.contactBannerpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, viverra bibendum quisque tortor sed lectus eget scelerisque. Consectetur eget habitant imperdiet amet vestibulum platea. Risus tortor, est sed tellus. Feugiat eu sociis consequat arcu bibendum.</p>
                    </div>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <FontAwesomeIcon icon={faUser} className={css.inputSideIcon} />
                                    <TextField id="input-with-sx" sx={{width:'60%'}} label="With sx" variant="standard" />
                                </Box><br />
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <FontAwesomeIcon icon={faAt} className={css.inputSideIcon} />
                                    <TextField id="input-with-sx" sx={{width:'60%'}} label="With sx" variant="standard" />
                                </Box><br />
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <FontAwesomeIcon icon={faPhone} className={css.inputSideIcon} />
                                    <TextField id="input-with-sx" sx={{width:'60%'}} label="With sx" variant="standard" />
                                </Box><br />
                                

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="name" placeholder='name' sx={{ width: '60%' }} label="Standard" variant="standard" /><br />
                                <div style={{marginTop:'6vh',fontWeight:'bold'}}>
                                    <Button variant="outlined" sx={{borderRadius:'20px'}}>
                                        Send<FontAwesomeIcon style={{fontSize:'15px',margin:'0 5px'}} icon={faArrowRight}/>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                    <div>
                        <h2 className={css.contactBeep}>Beep Us</h2>
                        <div className={css.contactBeepFlex}>
                            <div className={css.contactFlexItem}>
                                <div>
                                    <FontAwesomeIcon style={{fontSize:'40px',margin:'0 15px'}} icon={faPhone}/>
                                </div>
                                <div>
                                    <h5>+880-1688-422699</h5>
                                    <h5>+880-1688-422699</h5>
                                    <h5>+880-1688-422699</h5>
                                </div>
                            </div>
                            <div className={css.contactFlexItem}>
                                <div>
                                    <h5>foysal.professional@gmail.com</h5>
                                    <h5>foysal.professional@gmail.com</h5>
                                    <h5>foysal.professional@gmail.com</h5>
                                </div>
                                <div>
                                    <FontAwesomeIcon style={{fontSize:'40px',margin:'0 15px'}} icon={faEnvelope} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TalkSection;