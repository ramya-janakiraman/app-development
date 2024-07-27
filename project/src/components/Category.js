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

export default function Category() {
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
          <NavLink to="/category3" className="nav-link" activeClassName="active-nav-link">
            Category 3
          </NavLink>
          <NavLink to="/newarrival" className="nav-link" activeClassName="active-nav-link">
            New Arrivals
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
    <div className="new">
               <h5 className='new-arrival'>Shop By Category</h5>
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
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/Jumbo-Rider9_19ba5431-72dc-40a5-9edc-2e25a5d11291_1024x1024@2x.jpg?v=1667824430"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      Jumbo Rider
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.1149.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.1999.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-image_9fd34c9c-aefd-4cb9-b91c-b8c93af4e42b_600x.jpg?v=1668079552"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Chimi Doll House
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.649.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.899.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-imaeg_93e2129c-a141-4661-a4ee-8d3f328c9e67_600x.jpg?v=1664608113"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Blaze Gun
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
        image="https://toyzone.in/cdn/shop/products/Walker-11736-01_1024x1024@2x.jpg?v=1662459371"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      My Puppy Baby Walker
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.2,299.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.3499.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/iq-watch-81517-02_600x.jpg?v=1662545719"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      IQ Watch
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.399.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/43034_600x.jpg?v=1667194431"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Golf Xylophoner
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.449.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.699.00
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
        image="https://toyzone.in/cdn/shop/products/45052-01_99dd69bb-7a11-4aa8-858a-b2b7e5969b27_1024x1024@2x.jpg?v=1665139310"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      Barbie My Little Kitchen
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.449.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.699.00
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
        image="https://toyzone.in/cdn/shop/files/IMG_9701_1024x1024@2x.jpg?v=1690618214"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Horse Rider
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.899.00
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
    </Grid>
    </Box>

    
    <div className="new">
               <h5 className='new-arrival'>products</h5>
               <h1 className='product'>Shop By Age</h1>
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
        sx={{ height: 300 }}
        image="https://toyzone.in/cdn/shop/products/12580-01_1024x1024@2x.jpg?v=1662438649"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      11 Pcs. Baby Rattles
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.749.00
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
        image="https://toyzone.in/cdn/shop/products/6_1024x1024@2x.jpg?v=1667806378"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      Baby Cat Walker
                    </Typography>
                    <Typography variant="body2" className="price">
                    Rs. 1,799.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.2799.00
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
        image="https://toyzone.in/cdn/shop/products/80213_80206_801905_1024x1024@2x.jpg?v=1667203256"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      Building Blocks - 150 pcs
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.799.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/4-in-1-My-School-Desk80039-02_600x.jpg?v=1662381689"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      4 In One My School Desk
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.1499.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.2499.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/710066_600x.jpg?v=1667822591"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      Disney Spring Full Car
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
        image="https://toyzone.in/cdn/shop/products/78_9d9bf54d-efc0-4998-8731-066dc534e792_1024x1024@2x.jpg?v=1665126186"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
      Looney Tunes Racket Set
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.229.00
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
        image="https://cdn.shopify.com/s/files/1/0654/2445/7966/products/66682_600x.jpg?v=1666939474"
        title="green iguana"
      />
      <CardContent className="card-content-custom">
      <Typography gutterBottom variant="h5">
                      SpiderMan Scooter Gaint
                    </Typography>
                    <Typography variant="body2" className="price">
                      Rs.1499.00
                    </Typography>
                    <Typography variant="body2" className="old-price">
                      Rs.2229.00
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
    </Grid>
    </Box>
    </div>
  );
}
