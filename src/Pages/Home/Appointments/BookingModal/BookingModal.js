import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;
    const handleBookingSubmit = e =>{
        alert('submitting');
        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Modal
            keepMounted
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography  id="spring-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '90%', m:1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m:1 }}
                            id="outlined-size-small"
                            defaultValue='Your Name'
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m:1 }}
                            id="outlined-size-small"
                            defaultValue='Your Phone Number'
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m:1 }}
                            id="outlined-size-small"
                            defaultValue='Your Email'
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m:1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Box sx={{textAlign:'center'}}>
                            <Button  type='submit' variant="contained">Submit</Button>
                        </Box>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;