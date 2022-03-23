import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
const TopBanner = () => {
    const bannerbg = {
        background:`url(${bg})`,
        backgroundPosition:'center'
    }
    const verticalCenter = {
        display:'flex',
        alignItems:'center',
        height:'300px'
    }
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1, mt:2}}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign:'left'}} item xs={12} md={5}>
                    <Box>
                        <Typography variant='h3' component='div'>
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant='h6' component='div'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione delectus minus sed consequuntur iusto vero a fugit, debitis eveniet vitae!
                        </Typography>
                        <Button variant='contained'>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{width:'250px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopBanner;