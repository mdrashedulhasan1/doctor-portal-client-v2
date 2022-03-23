import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
const Services = () => {
    const services = [
        {
            name:'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus nemo laudantium, qui exercitationem explicabo in sint? Nisi, eos architecto.',
            img:fluoride
        },
        {
            name:'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus nemo laudantium, qui exercitationem explicabo in sint? Nisi, eos architecto.',
            img:cavity
        },
        {
            name:'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus nemo laudantium, qui exercitationem explicabo in sint? Nisi, eos architecto.',
            img:whitening
        }
    ]
    return (
        <Box sx={{ flexGrow: 1}}>
        <Typography sx={{m:2, color: 'info.main'}} variant='h6' component='div'>
           OUR SERVICES
        </Typography>
        <Typography sx={{m:3}} variant='h4' component='div'>
           Services We Provide
        </Typography>
        <Grid container spacing={{ xs: 2}}>
          {
            services.map(service => <Service key={service.name} service={service}></Service>)
          }
        </Grid>
      </Box>
    );
};

export default Services;