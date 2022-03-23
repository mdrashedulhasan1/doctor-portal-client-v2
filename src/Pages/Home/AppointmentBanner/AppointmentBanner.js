import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
const AppointmentBanner = () => {
    const appointmentBanner = {
        background:`url(${bg})`,
        marginTop:'80px',
        backgroundColor:'rgba(82, 78, 84, .8 )',
        backgroundBlendMode:'darken',
        color:'white'
    }
    return (
        <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <img
        style={{width:400, marginTop:'-100px'}}
         src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={7}>
        <Box sx={{textAlign:'left'}}>
        <Typography variant='h6' component='div'>
           Appointment
        </Typography>
        <Typography sx={{ color: 'info.main' }}  variant='h4' component='div'>
           Make an Appointment Today
        </Typography>
        <Typography sx={{my:3}} variant='h6' component='div'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta deserunt repudiandae et unde officiis veniam nulla asperiores ipsa laboriosam voluptatum dolor facilis voluptatem sint nostrum, commodi ex! Est, neque nostrum?
        </Typography>
        <Button variant='contained'>
            Get Appointment
        </Button>
        </Box>
        </Grid>
      </Grid>
    </Container>
    );
};

export default AppointmentBanner;