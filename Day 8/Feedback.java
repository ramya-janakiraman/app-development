package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Feedback {
    @Id
    private int fid;
    private String rating;
    private String description;

    public Feedback() {
    }

    public Feedback(int fid, String rating,String description) {
        this.fid = fid;
        this.rating=rating;
        this.description=description;
    }

    public int getUid() {
        return fid;
    }

    public void setFid(int fid) {
        this.fid = fid;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating=rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description=description;
    }
    //feedback to payment
    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "payment_id", referencedColumnName = "paymentId", nullable = false)
    private Payment payment;

public Payment getPayment() {
    return payment;
}

public void setPayment(Payment payment) {
    this.payment=payment;
}
}