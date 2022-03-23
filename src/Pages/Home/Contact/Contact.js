import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import bg from '../../../images/bg.png';
const Contact = () => {
    const bgImage = {
        background:`url(${bg})`,
        backgroundPosition:'center',
        backgroundColor:'rgba(114, 117, 117, .9)',
        backgroundBlendMode: 'multiply'
    }
    return (
        <Box style={bgImage} sx={{ mt: 3, py:'20px'}}>
            <Typography sx={{ color: 'info.main' }} variant="h4" gutterBottom component="div">
                Contact Us
            </Typography>
            <Typography style={{ color: 'white' }} variant="h4" gutterBottom component="div">
                Always Contact with Us
            </Typography>
            <form action="">
                <TextField       
                    required
                    style={{ border: '2px solid white', borderRadius:'5px', width: '40%' }}
                    id="outlined-required"
                    defaultValue="Email Address*"
                    size="small"
                />
                <br /><br />
                <TextField
                    required
                    style={{ border: '2px solid white', borderRadius:'5px', width: '40%' }}
                    id="outlined-required"
                    defaultValue="Subject*"
                    size="small"
                />
                <br /><br />
                <TextField
                    required
                    style={{ border: '2px solid white', borderRadius:'5px', width: '40%' }}
                    id="outlined-required"
                    defaultValue="Your Message*"
                    size="small"
                />
                <br /><br />
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </Box>
    );
};

export default Contact;