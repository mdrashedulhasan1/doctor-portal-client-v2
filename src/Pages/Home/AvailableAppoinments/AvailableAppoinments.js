import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Appointments/Booking/Booking';

const AvailableAppoinments = ({ date }) => {
    const booking = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '8AM-9AM',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentisty',
            time: '9AM-10AM',
            space: 8
        },
        {
            id: 3,
            name: 'Teeth Cleanning',
            time: '10AM-11AM',
            space: 10
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11AM-12AM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '11AM-12PM',
            space: 7,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '7PM-8PM',
            space: 5,
        },
    ]
    return (
        <Container sx={{m:5, color: 'secondary.main'}}>
            <Typography sx={{m:5}} variant='h4'>Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    booking.map(booking => <Booking date={date} key={booking.id} booking={booking}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinments;