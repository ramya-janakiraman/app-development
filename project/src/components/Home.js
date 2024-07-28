
import React, { useState } from 'react';
import '../assets/css/Home.css';
import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Snackbar, Typography } from "@mui/material";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };

  const [favorites, setFavorites] = useState(Array(5).fill(false));
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Handle click for favorite icon
  const handleFavoriteClick = (index) => {
    setFavorites(favorites.map((fav, i) => (i === index ? !fav : fav)));
  };
  const handleAddToCartClick = (product) => {
    setSnackbarMessage(`${product.title} added to cart`);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const products = [
    {
      title: 'Super Premium Magic Car - Pink',
      price: 'Rs.1499.00',
      oldPrice: 'Rs.1999.00',
      image: 'https://toyzone.in/cdn/shop/products/976458.jpg?v=1668512269',
      discount: '20% OFF',
      rating: 4.0
    },
    {
      title: 'Vegga RC Car - Red',
      price: 'Rs.799.00',
      oldPrice: 'Rs.1599.00',
      image: 'https://toyzone.in/cdn/shop/products/54269.jpg?v=1668514009',
      discount: '25% OFF',
      rating: 3.5
    },
    {
      title: 'Varuna Missile Launcher Truck',
      price: 'Rs.149.00',
      oldPrice: 'Rs.299.00',
      image: 'https://toyzone.in/cdn/shop/products/723934.jpg?v=1668491719',
      discount: '30% OFF',
      rating: 4.5
    },
    {
      title: 'Speedster Remote Control Boat',
      price: 'Rs.2999.00',
      oldPrice: 'Rs.3999.00',
      image: 'https://toyzone.in/cdn/shop/products/72591.jpg?v=1668585650',
      discount: '40% OFF',
      rating: 2.5
    },
    {
      title: 'Doll House',
      price: 'Rs.4999.00',
      oldPrice: 'Rs.5999.00',
      image: 'https://toyzone.in/cdn/shop/products/primary-image_9fd34c9c-aefd-4cb9-b91c-b8c93af4e42b_1024x1024@2x.jpg?v=1668079552',
      discount: '50% OFF',
      rating: 5.0
    }
  ];
  
  return (
    <div>
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://toyzone.in/cdn/shop/files/99-store_0ac2798c-09fa-4c4e-99f1-7241d0ded53d.jpg?v=1672121636" alt="Toys" width="1000" height="600" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://toyzone.in/cdn/shop/files/149-store_73c76dba-6ef8-4408-bc1d-ae34539be2ff.jpg?v=1672122090" alt="Chicago" width="1000" height="600" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://toyzone.in/cdn/shop/files/199-store-banner_3ef4af54-489b-44e7-b0ca-904877c63956.jpg?v=1670236638" alt="New York" width="1000" height="600" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://toyzone.in/cdn/shop/files/magic-car-banner_171f3762-e6e5-4e34-a1df-f93f88ac3f62.jpg?v=1686133287" alt="New York" width="1000" height="600" />
        </Carousel.Item>
      </Carousel>
<br></br>
<div>
        <div className='new'>
          <h5 className='new-arrival'>New Arrivals</h5>
          <h1 className='product'>Products</h1>
        </div>
        <div className='na'>
          <Box
            sx={{
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <br />
            <Grid container spacing={2} sx={{ padding: '50px' }}>
              {products.map((product, index) => (
                <Grid item xs={2.4} key={index}> {/* Adjusted size for more cards in a row */}
                  <Card sx={{ maxWidth: 300 }}> {/* Adjusted width for smaller cards */}
                    <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          borderColor: '#F6BE00',
                          color: favorites[index] ? '#F6BE00' : 'grey',
                          '&:hover': {
                            color: '#F6BE00', // Change color on hover
                          },
                        }}
                        onClick={() => handleFavoriteClick(index)}
                      >
                        <Favorite />
                      </IconButton>
                      <Button
                        sx={{
                          backgroundColor: '#F6BE00',
                          fontWeight: 'bold',
                          color: 'black',
                          padding: '10px',
                          fontFamily: 'sans-serif',
                          fontSize: 'medium',
                          '&:hover': {
                            backgroundColor: '#F6BE00',
                            color: 'black',
                          },
                        }}
                      >
                        {product.discount}
                      </Button>
                      <CardMedia
                        sx={{ height: 200 }}
                        image={product.image}
                        title={`Product Image ${index + 1}`}
                      />
                      <CardContent className="card-content-custom">
                        <Typography gutterBottom variant="h5">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" className="price">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" className="old-price">
                          {product.oldPrice}
                        </Typography>
                        <Button
                          variant="contained"
                          color={flag ? "primary" : "secondary"}
                          sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '10px',
                            letterSpacing: '3px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            border: '2px solid',
                            borderColor: 'black',
                            fontWeight: 'bold',
                            '&:hover': {
                              backgroundColor: 'black', // Background color on hover
                              color: 'white', // Font color on hover
                            },
                            '&:active': {
                              backgroundColor: 'gray', // Background color on click
                              color: 'white', // Font color on click
                            },
                          }}
                          onClick={() => handleAddToCartClick(product)}
                        >
                          ADD TO CART
                        </Button>
                        <Rating
                          name={`half-rating-read-${index}`}
                          defaultValue={product.rating}
                          precision={0.5}
                          readOnly
                        />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </div>
<center>
        <Link to="/newarrival">
        <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{bottom:'15px',borderRadius:'20px',padding:'15px',
                        backgroundColor: '#F6BE00', color: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      New Arrivals
                    </Button>
                    </Link>
                    </center>



                    <div style={{backgroundColor:'#FAE6E7'}}>
                        <div className='sh' style={{padding:'20px'}}>
                    <h5 className='new-arrival'>Shop By Categories</h5>
                    <h1 className='product'>Toys For Kids</h1>
                    </div>
                    <div class="image-list-container">
    <div class="image-list-item">
    <Link to='/ride'>
      <img
        src="https://toyzone.in/cdn/shop/collections/ride-on.jpg?v=1660039484"
        alt="Ride-On Toys"
        class="image-list-item-img"
      />
      </Link>
      <div class="image-list-item-bar">
        <span class="title">Ride-On Toys</span>
        <button class="info-button" aria-label="info about Ride-On Toys">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    
    <div className="image-list-item">
    <Link to='/doll'>
  <img
    src="https://toyzone.in/cdn/shop/collections/doll-houses.jpg?v=1667218681"
    alt="Doll Houses"
    className="image-list-item-img"
  />
  </Link>
  <div className="image-list-item-bar">
    <span className="title">Doll Houses</span>
    <button className="info-button" aria-label="info about Doll Houses">
      <i className="info-icon"></i> 
    </button>
  </div>
</div>
    
    <div class="image-list-item">
    <Link to='/gun'>
      <img
        src="https://toyzone.in/cdn/shop/collections/guns.jpg?v=1659594982"
        alt="Board Games"
        class="image-list-item-img"
      />
      </Link>
      <div class="image-list-item-bar">
        <span class="title">Guns</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <div class="image-list-item">
    <Link to='/baby'>
      <img
        src="https://toyzone.in/cdn/shop/collections/baby-walker.jpg?v=1659594746"
        alt="Board Games"
        class="image-list-item-img"
      />
      </Link>
      <div class="image-list-item-bar">
        <span class="title">Baby Walker Toy</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <div class="image-list-item">
    <Link to='/edu'>
      <img
        src="https://toyzone.in/cdn/shop/collections/800x800_88de1a24-b56f-4259-8aab-3c5d025650f6.png?v=1662966886"
        alt="Board Games"
        class="image-list-item-img"
      />
      </Link>
      <div class="image-list-item-bar">
        <span class="title">Educational</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <div class="image-list-item">
    <Link to='/music'>
      <img
        src="https://toyzone.in/cdn/shop/collections/800x800_93867640-8d5d-43e5-8ebd-5bad0a38a291.png?v=1660039386"
        alt="Board Games"
        class="image-list-item-img"
      />
      </Link>
      <div class="image-list-item-bar">
        <span class="title">Musical Instrument</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <Link to="/category">
        <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{bottom:'15px',borderRadius:'20px',padding:'15px',
                        backgroundColor: '#F6BE00', color: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      See all categories
                    </Button>
                    </Link>
    </div>
    <div className='shop-age'>
    <div className='sa' style={{padding:'20px'}}>
    <h5 className='new-arrival'>products</h5>
    <h1 className='product'>Shop By Age</h1>
    </div>
    <Box display="flex" justifyContent="center" gap={2} className="card-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
          <CardMedia
            component="img"
            image="https://toyzone.in/cdn/shop/files/age1.png?v=1658387974"
            alt="green iguana"
          />
          <CardContent>
            <Link to='/threeage'>
            <Button
              variant="contained"
              onClick={handleClick}
              color={flag ? "primary" : "secondary"}
              sx={{
                bottom: '15px',
                borderRadius: '20px',
                padding: '15px',
                left: '10px',
                top: '8px',
                height: '50px',
                width: '300px',
                fontSize: '25px',
                backgroundColor: '#FF6701',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'black', // Background color on hover
                  color: 'white', // Font color on hover
                },
                '&:active': {
                  backgroundColor: 'gray', // Background color on click
                  color: 'white', // Font color on click
                },
              }}
            >
              0-3 Ages
            </Button>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
          <CardMedia
            component="img"
            image="https://toyzone.in/cdn/shop/files/age2.png?v=1658387975"
            alt="green iguana"
          />
          <CardContent>
          <Link to='/eightage'>
            <Button
              variant="contained"
              onClick={handleClick}
              color={flag ? "primary" : "secondary"}
              sx={{
                bottom: '15px',
                borderRadius: '20px',
                padding: '15px',
                left: '10px',
                top: '8px',
                height: '50px',
                width: '300px',
                fontSize: '25px',
                backgroundColor: '#FF6701',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'black', // Background color on hover
                  color: 'white', // Font color on hover
                },
                '&:active': {
                  backgroundColor: 'gray', // Background color on click
                  color: 'white', // Font color on click
                },
              }}
            >
              3-8 Ages
            </Button>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
          <CardMedia
            component="img"
            image="https://toyzone.in/cdn/shop/files/age3.png?v=1658387975"
            alt="green iguana"
          />
          <CardContent>
          <Link to='/lastage'>
            <Button
              variant="contained"
              onClick={handleClick}
              color={flag ? "primary" : "secondary"}
              sx={{
                bottom: '15px',
                borderRadius: '20px',
                padding: '15px',
                left: '10px',
                top: '8px',
                height: '50px',
                width: '300px',
                fontSize: '25px',
                backgroundColor: '#FF6701',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'black', // Background color on hover
                  color: 'white', // Font color on hover
                },
                '&:active': {
                  backgroundColor: 'gray', // Background color on click
                  color: 'white', // Font color on click
                },
              }}
            >
              8+ Ages
            </Button>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </div>
    <div className='flash' style={{backgroundColor:'#F9F6EE'}}>
    <div className='sa' style={{padding:'20px'}}>
    <h5 className='new-arrival'>Toyzone</h5>
    <h1 className='product'>Premium</h1>
    </div>
      <img src='https://toyzone.in/cdn/shop/files/premium-range.jpg?v=1671702631' style={{marginLeft:'100px'}}></img>
   
      <img src='https://toyzone.in/cdn/shop/files/best-sellers.jpg?v=1671707575' style={{marginLeft:'100px'}}></img>
      <img src='https://toyzone.in/cdn/shop/files/new-launch.jpg?v=1671707567' style={{margin:'20px'}}></img>
    </div>
</div>

      </div>
      {/* <Footer/> */}
    </div>
  );
};


export default Home;