import React from "react";
 import '../assets/css/Category.css';
import { Box, Button, Card,CardActionArea,CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { AppBar, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
<Box 
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
</Box>
export default function NewArrival() {
    const [flag, setFlag] = React.useState(true);
    const handleClick = () => {
      setFlag(!flag);
    };
    
    return (
      <div>
        <AppBar position="static" sx={{ backgroundColor: '#fff7cc'}}>
      <Toolbar>
        <nav>
          <NavLink to="/category" className="nav-link" activeClassName="active-nav-link">
            All Categories
          </NavLink>
          <NavLink to="/newarrival" className="nav-link" activeClassName="active-nav-link">
            Category 2
          </NavLink>
          <NavLink to="/category3" className="nav-link" activeClassName="active-nav-link">
            Category 3
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
    <div className="new">
               <h5 className='new-arrival'>New Arrivals</h5>
               <h1 className='product'>Products</h1>
               </div>
        <Box
    sx={{
        backgroundColor:'#fff7cc',
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
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 ,}}
        image="https://toyzone.in/cdn/shop/products/976458.jpg?v=1668512269"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Super Premium Magic Car - Pink
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.1499.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.1499.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/54269.jpg?v=1668514009"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Vegga RC Car - Red
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.799.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.1599.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/723934.jpg?v=1668491719"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Varuna Missile Launcher Truck
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.149.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.299.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/72591.jpg?v=1668585650"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Food Fest
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.399.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.599.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/46_d00bf425-8007-4b84-8327-558af8144740.jpg?v=1668585732"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Fast Cargo
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.399.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.599.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/21988_1024x1024@2x.jpg?v=1668494109"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Dancing StrawBerry
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.549.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.799.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/D72515-6_1024x1024@2x.jpg?v=1668491662"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      My Road Runners-Van
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.199.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.499.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/13112-B3_d7196418-8949-4fa0-b852-58f43881cf29_1024x1024@2x.png?v=1664260102"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      Baby Deluxe Bather - Pink
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.749.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.1099.00
                    </Typography>
                    <Button
  variant="contained"
  onClick={handleClick}
  sx={{
    backgroundColor: '#F6BE00', // Button background color
    color: 'black', // Button text color
    left: '90px',
    '&:hover': {
      backgroundColor: '#FFC107', // Color when hovered
      color: 'white', // Text color when hovered
    },
  }}
>Buy Now</Button><br></br>
      <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </Box>
        </div>
    );
};