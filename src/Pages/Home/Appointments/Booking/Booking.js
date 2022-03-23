import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
           
           <Paper sx={{py:3}} elevation={3}>
           <Typography sx={{ color: 'info.main' }} variant='h5' gutterButtom component='div'>
                {name}
            </Typography>
            <Typography variant='h6' sx={{color:'InfoBackground.main'}} gutterButtom component='div'>
                {time}
            </Typography>
            <Typography variant='caption' sx={{color:'InfoBackground.main'}} gutterButtom component='div'>
                {space} SPACES AVAILABLE
            </Typography>
            <Button onClick={handleBookingOpen} variant='contained'>BOOK APPOINTMENT</Button>
           </Paper>
           
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
         ></BookingModal>
        </>

    );
};

export default Booking;