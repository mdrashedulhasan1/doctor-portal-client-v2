import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
const Dental = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%', height:'400px' }} src={treatment} alt="" />
                </Grid>
                <Grid style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }} item xs={12} md={7}>
                    <Box>
                        <Typography variant="h4" component="div">
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut fugit ab, fugiat unde omnis! Ipsam id, esse dolorem et vitae voluptatum ex eum sit ullam obcaecati minus delectus sed ipsum atque, laborum iste totam dignissimos sunt aut molestiae animi?
                        </Typography>
                        <Button variant="contained">Contained</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dental;