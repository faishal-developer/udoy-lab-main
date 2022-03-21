import { Button, Container } from '@mui/material';
import React from 'react';
import css from '../../styles/Home.module.css'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className={css.ContactBackground}>
            <Container maxWidth='lg'>
                <h2 className={css.contactH2}>Have a cool ✌️ project in mind?
                    Contact us to deploy your project in real life.</h2>
                <Link href='contact' passHref>
                    <Button style={{ color: 'white', border: '1px solid white' }} variant="outlined">Contact Now</Button>
                </Link>
            </Container>
        </div>
    );
};

export default Contact;