package com.example.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Product;
import com.example.backend.service.ProductService;


@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Create a new product
    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.create(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    // Get all products
    @GetMapping
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
   
    public List<Product> getProducts() {
    List<Product> products = productService.getAllProducts();
    System.out.println("Fetched products: " + products); // Debug log
    return products;
}


    // Get a product by ID
    @GetMapping("/{productId}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Product> getProductById(@PathVariable("productId") int productId) {
        Product product = productService.getById(productId);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a product
    @PutMapping("/{productId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Product> updateProduct(@PathVariable("productId") int productId, @RequestBody Product product) {
        boolean isUpdated = productService.update(productId, product);
        if (isUpdated) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    //new
    @PostMapping("/category/{category}")
@PreAuthorize("hasAuthority('ADMIN')")
public ResponseEntity<Product> createProductByCategory(@PathVariable("category") String category, @RequestBody Product product) {
    product.setCategory(category); // Set the category
    Product createdProduct = productService.create(product);
    return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
}



    // Delete a product
    @DeleteMapping("/{productId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteProduct(@PathVariable("productId") int productId) {
        boolean isDeleted = productService.delete(productId);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get products by image URL (if required)
    // Since there is no category, this endpoint is optional
    // Adjust or remove this method as needed
    @GetMapping("/image/{imageUrl}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<List<Product>> getProductsByImage(@PathVariable("imageUrl") String imageUrl) {
        List<Product> products = productService.getByImageUrl(imageUrl);
        if (!products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    //
    @GetMapping("/category/{category}")
@PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable("category") String category) {
    List<Product> products = productService.getProductsByCategory(category);
    if (!products.isEmpty()) {
        return new ResponseEntity<>(products, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

}