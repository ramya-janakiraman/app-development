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

@Entity
public class User {
    @Id
    private int uid;
    private String email;
    private String password;

    public User() {
    }

    public User(int uid, String email, String password) {
        this.uid = uid;
        this.email = email;
        this.password = password;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    //user to product
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Product> product=new ArrayList<>();

    public List<Product> getOrderdata() {
        return product;
    }

    public void setOrderdata(List<Product> product) {
        this.product= product;
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<AddWish> wishlists = new ArrayList<>();

    public List<AddWish> getWishlists() {
        return wishlists;
    }

    public void setWishlists(List<AddWish> wishlists) {
        this.wishlists = wishlists;
    }
    
    
}