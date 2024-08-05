package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Buy {
    @Id
    private int aid;
    private String name;
    private String mobile;
    private String pincode;
    private String address;
    private String city;
    private String state;

    public Buy() {
    }

    public Buy(int aid, String name, String mobile, String pincode, String address, String city, String state) {
        this.aid = aid;
        this.name = name;
        this.mobile = mobile;
        this.pincode = pincode;
        this.address = address;
        this.city = city;
        this.state = state;
    }

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
    //product to buy
   @OneToOne
    @JsonBackReference
    @JoinColumn(name = "product_id", referencedColumnName = "productId", nullable = false)
    private Product product;

public Product getProduct() {
    return product;
}

public void setProduct(Product product) {
    this.product = product;
}
    //buy to payment
 @OneToOne(mappedBy = "buy",cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @JsonIgnore
    private Payment payment;

    
    
}