import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'; // Import the Home icon
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [resData, setResData] = useState([]);
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: '',
    oldPrice: '', // New field
    imageUrl: '',
    category: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin role
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get("http://127.0.0.1:8080/api/products", config);
        setResData(response.data);

        // Check if the user is an admin
        const userResponse = await axios.get("http://127.0.0.1:8080/api/user", config);
        setIsAdmin(userResponse.data.role === 'admin');
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (isEditing && editProductId) {
        // Update existing product
        await axios.put(`http://127.0.0.1:8080/api/products/${editProductId}`, productData, config);
      } else {
        // Add new product
        await axios.post('http://127.0.0.1:8080/api/products', productData, config);
      }

      // Refresh the product list after adding/updating a product
      const response = await axios.get("http://127.0.0.1:8080/api/products", config);
      setResData(response.data);

      // Reset form and editing state
      setProductData({
        productName: '',
        productPrice: '',
        oldPrice: '', // Reset new field
        imageUrl: '',
        category: ''
      });
      setIsEditing(false);
      setEditProductId(null);

    } catch (error) {
      console.error('Error adding/updating product:', error.message);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://127.0.0.1:8080/api/products/${productId}`, config);

      // Update the product list after deletion
      setResData(resData.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const handleEdit = (product) => {
    setProductData({
      productName: product.productName,
      productPrice: product.productPrice,
      oldPrice: product.oldPrice, // Initialize new field
      imageUrl: product.imageUrl,
      category: product.category
    });
    setIsEditing(true);
    setEditProductId(product.productId);

    // Navigate based on category
    if (product.category === 'games') {
      navigate('/games'); // Replace '/games' with the actual route for games
    }
  };

  return (
    <div style={{ background: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {/* Home Icon Button */}
      <IconButton 
        style={{ position: 'absolute', top: '20px', left: '20px' }} 
        onClick={() => {
          navigate('/category');
          if (isAdmin) {
            // Hide header for admin role
            document.querySelector('header').style.display = 'none';
          }
        }} // Navigate to the category page
      >
        <HomeIcon />
      </IconButton>

      <h1 style={{ marginBottom: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        {isEditing ? 'Edit Product' : 'Add Product'}
      </h1>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mb: 5, width: '100%', maxWidth: '600px' }}>
        <TextField
          name="productName"
          label="Product Name"
          value={productData.productName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
          
        />
        <TextField
          name="productPrice"
          label="Product Price"
          type="number"
          value={productData.productPrice}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <TextField
          name="oldPrice"
          label="Old Price" // New field label
          type="number"
          value={productData.oldPrice}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <TextField
          name="imageUrl"
          label="Product Image URL"
          value={productData.imageUrl}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <TextField
          name="category"
          label="Category"
          value={productData.category}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <Button type="submit" variant="contained"  sx={{ mt: 2,backgroundColor:'#F6BE00' }}>
          {isEditing ? 'Update Product' : 'Add Product'}
        </Button>
      </Box>

      <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>All Products</h3>
      <TableContainer component={Paper} sx={{ maxWidth: '1200px', width: '100%', marginBottom: '2rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Price</TableCell>
              <TableCell>Old Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resData.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>
                  <img src={item.imageUrl} alt={item.productName} style={{ width: '100px', height: 'auto' }} />
                </TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>₹ {item.productPrice}.00</TableCell>
                <TableCell>
                  {item.oldPrice ? `₹ ${item.oldPrice}.00` : 'N/A'}
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(item)}
                    sx={{ mr: 1 ,backgroundColor:'#F6BE00'}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(item.productId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductForm;
