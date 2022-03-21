import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Image from 'next/image'
import logo from '../images/images/logo.png'

const AdminLogin = () => {
    return (
        <div style={{ background: '#EEFEFF' }}>
            <Navbar />
            <Container maxWidth='lg' className='login-container'>
                <div>
                    <Image width={100} height={100} src={logo} alt="logo"/>
                </div>
                <div>
                    <form>
                        <TextField className='login-input' id="outlined-basic" label="Outlined" variant="outlined" />
                        <br />
                        <TextField className='login-input' id="outlined-basic" label="Outlined" variant="outlined" />
                        <br />
                        <div className='login-btn-div'>
                            <Button className='login-btn' variant="outlined">Login <FontAwesomeIcon style={{ paddingLeft: '10px', fontSize: '15px' }} icon={faArrowRight} /></Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AdminLogin;