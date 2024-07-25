import React from "react";
//import './category.css';
import { Box, Button, Card,CardActionArea,CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import Footer from "./Footer";
  <Box 
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
</Box>

export default function Category() {
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  
  return (
    <div>
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
 <br></br>
<Grid container spacing={2} sx={{
  padding:'50px'
}}>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Sofia Macrame Plant Hanger - Set Of Two
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹384.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px',
        }}>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img2.jpeg"
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Coloured Tribal Planter - Set Of Three
        </Typography>
        <Typography variant="body2"  color="black" fontWeight="bold">
        ₹1,380.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={5.0} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img3.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Terazzo Terracotta Planters - Set Of Three
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,300.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={3.5} readOnly />
      </CardContent>
     </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
<CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img4.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Delights Hanging Planter - Set Of Five
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,000.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400}}
        image="img5.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ugaoo Kalanchoe Plant - Yellow
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹800.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
       <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img6.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ugaoo Ixora (Rugmini) Variegated Plant
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹500.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={3.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img7.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ugaoo Money Plant Golden Plant - Set of 2
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,500.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={5.0} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img8.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ugaoo Peperomia Caperata Plant
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹400.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={3.5} readOnly />
      </CardContent>
     </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img9.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Pink Punk Watering Can
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,300.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img10.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        3 Step Planter Pot Stand
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,800.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={5.0} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img11.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ugaoo Double Prong Weeder
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹999.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={3.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img12.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ugaoo Pole Saw
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,200.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
       <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img13.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
       5 Tier Flower Pot Holder
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,100.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
       <Rating name="half-rating-read" defaultValue={2.5} precision={5.0} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img14.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Premium Metal Planter Stand (Set of 3)
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹500.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={3.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img15.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        INKULTURE Plastic Round Flower Pots
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹600.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
     </CardActionArea>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 400 }}
        image="img16.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        GIGAWATTS Solar Crystal Lawn Light
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,800.00
        </Typography>
        <Button variant="contained" onClick={handleClick} 
        color={flag ? "primary" : "secondary"} sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px',
        
        }}>Buy Now</Button><br></br>
        <Rating name="half-rating-read" defaultValue={2.5} precision={5.0} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </Box>
    <Footer/>
    </div>
  );
}
