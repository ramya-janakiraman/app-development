package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Product {
    @Id
    private int productId;
    private String productName;
    private double productPrice;
    private String category; 

    public Product() {
    }

    public Product(int productId, String productName, double productPrice, String category) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
    //product to user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_uid")
    @JsonBackReference
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    //product to buy
    @OneToOne(mappedBy = "product",cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Buy buy;

    public Buy getBuy() {
        return buy;
    }

    public void setBuy(Buy buy) {
        this.buy = buy;
    }
    
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "wish_id", nullable = false)
    // @JsonBackReference
    // private AddWish addWish;

    // public AddWish getAddWish() {
    //     return addWish;
    // }

    // public void setAddWish(AddWish addWish) {
    //     this.addWish = addWish;
    // }

   

    
   
}