import React from 'react';
import logo from '../../images/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import css from '../../styles/Home.module.css'
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import TemporaryDrawer from '../home/Drawer';

const Navbar = () => {

    let navItem = [['Home', '/'], ['About us', 'about'], ['Contact', 'contact'], ['Projects', 'projects']]
    return (
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <figure style={{ margin: 0 }}>
                <Image width='80' height='50' src={logo} alt="logo"/>
            </figure>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {
                    navItem.map((item, i) => (
                        <Link key={i} href={item[1]}>
                            <a className={css.navLink} >{item[0]}</a>
                        </Link>
                    ))
                }
            </Box>
            <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                <TemporaryDrawer />
            </Box>
        </Container>
    );
};

export default Navbar;