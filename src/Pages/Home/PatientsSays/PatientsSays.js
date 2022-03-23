import React from 'react';
import winson1 from '../../../images/people-1.png';
import winson2 from '../../../images/people-2.png';
import winson3 from '../../../images/people-3.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PatientsFeedback from '../PatientsFreedback/PatientsFeedback';
import { Container, Typography } from '@mui/material';
const PatientsSays = () => {
    const patientsSays = [
        {   
            id:1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, architecto necessitatibus. Perferendis adipisci soluta, quasi placeat debitis veniam alias incidunt.',
            img:winson1,
            personName:'Winson Herry',
            country: 'California'
        },
        {   
            id:2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, architecto necessitatibus. Perferendis adipisci soluta, quasi placeat debitis veniam alias incidunt.',
            img:winson2,
            personName:'Winson Angle',
            country: 'California-1'
        },
        {   
            id:3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, architecto necessitatibus. Perferendis adipisci soluta, quasi placeat debitis veniam alias incidunt.', 
            img:winson3,
            personName:'Winson Angle-02',
            country: 'California-2'
        }
    ]
    return (
        <Container sx={{ flexGrow: 1, mt:3 }}>
        <Typography sx={{color: 'info.main', textAlign:'left'}} variant="h6" component="div">
            TESTIMONIAL
        </Typography>
        <Typography sx={{textAlign:'left'}} variant="h4" component="div">
            What's Our Patients <br />
            Says
        </Typography>
      <Grid container spacing={2}>
        {
            patientsSays.map(patientsSays => <PatientsFeedback key={patientsSays.id} patientsSays={patientsSays}></PatientsFeedback>)
        }
      </Grid>
    </Container>
    );
};

export default PatientsSays;