import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  {Box}  from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
const PatientsFeedback = (props) => {
    const {personName, description, img, country} = props.patientsSays;
    return (
        <Grid item xs={12} sm={6} md={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2" gutterBottom>
        {description}
        </Typography>
        <Box style={{display:'flex', alignItems:'center'}}>
        <CardMedia
        sx={{marginX:'10px'}}
        style={{ width:'20%'}}
        component="img"
        image={img}
        alt="Paella dish"
      />   
      <Box>
      <Typography sx={{color: 'info.main'}} variant="h6" component="div">
         {personName}
        </Typography>
        <Typography variant="h6" component="div">
         {country}
        </Typography>
      </Box>
        </Box>
      </CardContent>
      
    </Card>
      </Grid>
    );
};

export default PatientsFeedback;