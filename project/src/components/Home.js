import React from 'react';
import '../assets/css/Home.css';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import Header from './Header';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Footer';

const Home = () => {
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };

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
        <h5 className='new-arrival'>New Arrivals</h5>
        <h1 className='product'>Products</h1>
        <Box className="container-box">
          <Grid container spacing={2} className="grid-container">
            <Grid item className="grid-item">
              <Card className="card-custom">
                <CardActionArea>
                  <Button sx={{ backgroundColor: '#F6BE00', fontWeight: 'bold', color: 'black', right: '30px', padding: '10px', fontFamily: 'sans-serif', fontSize: 'medium', marginLeft: '30px' }}>40% off</Button>
                  <CardMedia className="card-media-custom" image="https://toyzone.in/cdn/shop/products/976458.jpg?v=1668512269" title="green iguana" />
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
                    <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{
                        backgroundColor: 'white', color: 'black', padding: '10px', letterSpacing: '3px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '2px solid', borderColor: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      ADD TO CART
                    </Button><br></br>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item className="grid-item">
              <Card className="card-custom">
                <CardActionArea>
                  <Button sx={{ backgroundColor: '#F6BE00', fontWeight: 'bold', color: 'black', right: '30px', padding: '10px', fontFamily: 'sans-serif', fontSize: 'medium', marginLeft: '30px' }}>50% off</Button>
                  <CardMedia className="card-media-custom" image="https://toyzone.in/cdn/shop/products/54269.jpg?v=1668514009" title="green iguana" />
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
                    <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{
                        backgroundColor: 'white', color: 'black', padding: '10px', letterSpacing: '3px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '2px solid', borderColor: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      ADD TO CART
                    </Button><br></br>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item className="grid-item">
              <Card className="card-custom">
                <CardActionArea>
                  <Button sx={{ backgroundColor: '#F6BE00', fontWeight: 'bold', color: 'black', right: '30px', padding: '10px', fontFamily: 'sans-serif', fontSize: 'medium', marginLeft: '30px' }}>50% off</Button>
                  <CardMedia className="card-media-custom" image="https://toyzone.in/cdn/shop/products/723934.jpg?v=1668491719" title="green iguana" />
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
                    <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{
                        backgroundColor: 'white', color: 'black', padding: '10px', letterSpacing: '3px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '2px solid', borderColor: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      ADD TO CART
                    </Button><br></br>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item className="grid-item">
              <Card className="card-custom">
                <CardActionArea>
                  <Button sx={{ backgroundColor: '#F6BE00', fontWeight: 'bold', color: 'black', right: '30px', padding: '10px', fontFamily: 'sans-serif', fontSize: 'medium', marginLeft: '30px' }}>33% off</Button>
                  <CardMedia className="card-media-custom" image="https://toyzone.in/cdn/shop/products/72591.jpg?v=1668585650" title="green iguana" />
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
                    <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{
                        backgroundColor: 'white', color: 'black', padding: '10px', letterSpacing: '3px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '2px solid', borderColor: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      ADD TO CART
                    </Button><br></br>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item className="grid-item">
              <Card className="card-custom">
                <CardActionArea>
                  <Button sx={{ backgroundColor: '#F6BE00', fontWeight: 'bold', color: 'black', right: '30px', padding: '10px', fontFamily: 'sans-serif', fontSize: 'medium', marginLeft: '30px' }}>33% off</Button>
                  <CardMedia className="card-media-custom" image="https://toyzone.in/cdn/shop/products/46_d00bf425-8007-4b84-8327-558af8144740.jpg?v=1668585732" title="green iguana" />
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
                    <Button variant="contained" onClick={handleClick}
                      color={flag ? "primary" : "secondary"} sx={{
                        backgroundColor: 'white', color: 'black', padding: '10px', letterSpacing: '3px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '2px solid', borderColor: 'black', fontWeight: 'bold', '&:hover': {
                          backgroundColor: 'black', // Background color on hover
                          color: 'white', // Font color on hover
                        },
                        '&:active': {
                          backgroundColor: 'gray', // Background color on click
                          color: 'white', // Font color on click
                        },
                      }}>
                      ADD TO CART
                    </Button><br></br>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <center>
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
                    </center>

                    <div style={{backgroundColor:'#FAE6E7'}}>
                        <div className='sh' style={{padding:'20px'}}>
                    <h5 className='new-arrival'>Shop By Categories</h5>
                    <h1 className='product'>Toys For Kids</h1>
                    </div>
                    <div class="image-list-container">
    <div class="image-list-item">
      <img
        src="https://toyzone.in/cdn/shop/collections/ride-on.jpg?v=1660039484"
        alt="Ride-On Toys"
        class="image-list-item-img"
      />
      <div class="image-list-item-bar">
        <span class="title">Ride-On Toys</span>
        <button class="info-button" aria-label="info about Ride-On Toys">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    
    <div className="image-list-item">
  <img
    src="https://toyzone.in/cdn/shop/collections/doll-houses.jpg?v=1667218681"
    alt="Doll Houses"
    className="image-list-item-img"
  />
  <div className="image-list-item-bar">
    <span className="title">Doll Houses</span>
    <button className="info-button" aria-label="info about Doll Houses">
      <i className="info-icon"></i> 
    </button>
  </div>
</div>
    
    <div class="image-list-item">
      <img
        src="https://toyzone.in/cdn/shop/collections/guns.jpg?v=1659594982"
        alt="Board Games"
        class="image-list-item-img"
      />
      <div class="image-list-item-bar">
        <span class="title">Guns</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <div class="image-list-item">
      <img
        src="https://toyzone.in/cdn/shop/collections/baby-walker.jpg?v=1659594746"
        alt="Board Games"
        class="image-list-item-img"
      />
      <div class="image-list-item-bar">
        <span class="title">Baby Walker Toy</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <div class="image-list-item">
      <img
        src="https://toyzone.in/cdn/shop/collections/800x800_88de1a24-b56f-4259-8aab-3c5d025650f6.png?v=1662966886"
        alt="Board Games"
        class="image-list-item-img"
      />
      <div class="image-list-item-bar">
        <span class="title">Educational</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    <div class="image-list-item">
      <img
        src="https://toyzone.in/cdn/shop/collections/800x800_93867640-8d5d-43e5-8ebd-5bad0a38a291.png?v=1660039386"
        alt="Board Games"
        class="image-list-item-img"
      />
      <div class="image-list-item-bar">
        <span class="title">Educational</span>
        <button class="info-button" aria-label="info about Board Games">
          <i class="info-icon"></i> 
        </button>
      </div>
    </div>
    </div>
    <div className='shop-age'>
    <div className='sa' style={{padding:'20px'}}>
    <h5 className='new-arrival'>products</h5>
    <h1 className='product'>Shop By Age</h1>
    </div>
    <Box display="flex" justifyContent="center" gap={2} className="card-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://toyzone.in/cdn/shop/files/age1.png?v=1658387974"
            alt="green iguana"
          />
          <CardContent>
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
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://toyzone.in/cdn/shop/files/age2.png?v=1658387975"
            alt="green iguana"
          />
          <CardContent>
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
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://toyzone.in/cdn/shop/files/age3.png?v=1658387975"
            alt="green iguana"
          />
          <CardContent>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </div>
    
</div>

      </div>
      {/* <Footer/> */}
    </div>
  );
};


export default Home;