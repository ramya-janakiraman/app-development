package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private double productPrice;
    private double oldPrice; // New field
    private String imageUrl;
    private String category;

    public Product() {
    }

    public Product(int productId, String productName, double productPrice, double oldPrice, String imageUrl, String category) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.oldPrice = oldPrice; // Initialize new field
        this.imageUrl = imageUrl;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public double getOldPrice() { // New getter
        return oldPrice;
    }

    public void setOldPrice(double oldPrice) { // New setter
        this.oldPrice = oldPrice;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
