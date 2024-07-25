import {Link} from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YardIcon from '@mui/icons-material/Yard';

const bull = (

  <Box 
      component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
              >
                  
  </Box>
   );

         export default function About() {
         return (
                          
       <Box
       sx={{
                                
        backgroundColor:'grey',
        backgroundSize: 'cover',
        minHeight: '100vh', 
        display: 'flex',
       alignItems: 'center',
        justifyContent: 'center',
        }}
                                                                                                     >
        <Card sx={{ minWidth: 700 ,minHeight:500,margin:5}}>
        <CardContent>
        <Typography
        sx={{
        fontSize: 28,
        color: 'text.primary',
        textAlign: 'center', // Center the text horizontally
        marginBottom: 2, // Add margin for spacing
        }}
        gutterBottom
         >
        ABOUT US
        </Typography>
        <Typography
        variant="h5"
        component="div"
        sx={{
        textAlign: 'center', // Center the text horizontally
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         }}
        >
        <YardIcon/> GARDEN GALORE
        </Typography><br></br>
        <Typography sx={{ mb: 5.5 }} color="text.primary" textAlign='center' margin='10px' fontFamily='cursive'>
         Gardening is indeed a favourite pastime for us. With our busy and concrete <br></br>lifestyle, gardening is the only way that keeps us connected to <br></br> mother nature. Gardening gives us immense joy, as we can see the shrubs and the<br></br>
        flowers growing right from their tender stage till it completely shoots and lush into their green life.  <br></br>This literally gives us a sense of mortality which the living creatures have on this planet.
        Gardening keeps our daily<br></br>  life fresh, watering the plants, nurturing them, cleaning them all gives us a sense of freshness and calmness in our mind.<br></br> 
        . A garden can be defined as a piece of property that is structured near or around our house.Different kinds of trees, <br></br>beautiful flowers, fruits, vegetables, and so on are cultivated. People are fond of grooming many types of gardens. <br></br>A flower garden which consists of varieties of beautifully scented flowers, a fruit garden <br></br>that holds nutritious fruits, a vegetable garden is very much loved by the households as they bear <br></br>healthy vegetables which are then cooked and included in their meal are the best examples. 

        </Typography>
        <Typography variant="body2">
                                                                                                                                                                                                                                                                                                                                                                                                   
        <br />
      </Typography>
        </CardContent>
        <CardActions>
        <Button variant="outlined"><Link style={{textDecoration:'none',color:'black'}} to="/">BACK</Link></Button>
        </CardActions>
                                                                                                                                                                                                                                                                                                                                                                                                                                                           
       </Card>
    </Box>
  );
}
