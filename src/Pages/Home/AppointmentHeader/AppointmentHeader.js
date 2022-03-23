import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Calendar from '../Shared/Calendar/Calendar';
import chair from '../../../images/chair.png';
const AppointmentHeader = ({date, setDate}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width:'100%'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentHeader;