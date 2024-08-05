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
public class AddWish {
    @Id
    private int cid;
    private String categoryType;
    public AddWish() {
    }
    public AddWish(int cid, String categoryType) {
        this.cid = cid;
        this.categoryType = categoryType;
    }
    public int getCid() {
        return cid;
    }
    public void setCid(int cid) {
        this.cid = cid;
    }
    public String getCategoryType() {
        return categoryType;
    }
    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }
    
//wish list to user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_uid")
    @JsonBackReference
    private User user;
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    
}