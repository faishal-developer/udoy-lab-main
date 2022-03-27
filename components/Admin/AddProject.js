import { Box, Container, Grid, TextField, Button } from '@mui/material';
import { faAt, faPhone, faUser, faSquarePhone, faEnvelope, faArrowRight, faLinkSlash, faMagnifyingGlass, faBuilding } from '@fortawesome/free-solid-svg-icons';
import css from '../../styles/contact.module.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddProject = () => {
    return (
        <Container sx={{ mt: 5, pt: 5 }}>
            <h1 style={{ color:'#DB4CA3'}}>Add a Project</h1>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FontAwesomeIcon icon={faLinkSlash} className={css.inputSideIcon} />
                            <TextField id="input-with-sx" sx={{ width: '60%' }} label="With sx" variant="standard" />
                        </Box><br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FontAwesomeIcon icon={faAt} className={css.inputSideIcon} />
                            <TextField id="input-with-sx" sx={{ width: '60%' }} label="With sx" variant="standard" />
                        </Box><br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FontAwesomeIcon icon={faPhone} className={css.inputSideIcon} />
                            <TextField type='file' id="input-with-sx" sx={{ width: '60%' }} label="With sx" variant="standard" />
                        </Box><br />


                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={css.inputSideIcon} />
                            <TextField id="input-with-sx" sx={{ width: '60%' }} label="With sx" variant="standard" />
                        </Box><br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FontAwesomeIcon icon={faBuilding} className={css.inputSideIcon} />
                            <TextField id="input-with-sx" sx={{ width: '60%' }} label="With sx" variant="standard" />
                        </Box><br />
                        <div style={{ marginTop: '2vh', fontWeight: 'bold' }}>
                            <Button variant="outlined" sx={{ borderRadius: '20px' }}>
                                Send<FontAwesomeIcon style={{ fontSize: '15px', margin: '0 5px' }} icon={faArrowRight} />
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddProject;