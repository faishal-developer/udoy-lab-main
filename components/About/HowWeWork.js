import { Container } from '@mui/material';
import React from 'react';
import data from './HowWeWorkData'
import css from '../../styles/about.module.css'
import Grid from '@mui/material/Grid';

const HowWeWork = () => {
    return (
        <div style={{ background:'#EEFEFF',padding:'8vh 0'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <h1 className={css.WorkHead}>How we work<span>🔥</span></h1>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas in curabitur tincidunt vitae pellentesque. Commodo rhoncus risus, enim at amet cras mattis. At in pharetra ornare nibh phasellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas in curabitur tincidunt vitae pellentesque. Commodo rhoncus risus, enim at amet cras mattis. At in pharetra ornare nibh phasellus.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {
                        data.map((value,i)=>(
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <div className={css?.WorkSubHead}>
                                    <h2>0{value?.id}</h2>
                                    <h6>{value?.head}</h6>
                                </div>
                                <div>
                                    <p>{value?.data}</p>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default HowWeWork;