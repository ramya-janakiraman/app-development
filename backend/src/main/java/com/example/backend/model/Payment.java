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
public class Payment {
    @Id
    private int paymentId;
    private String name;
    private String cardNumber;
    private String cvv;
    private String expiryDate;

    public Payment() {

    }

    public Payment(int paymentId, String name, String cardNumber, String cvv, String expiryDate) {
        this.paymentId = paymentId;
        this.name = name;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }
    //payment to buy
    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "aid", referencedColumnName = "aid", nullable = false)
    private Buy buy;

public Buy getBuy() {
    return buy;
}

public void setBuy(Buy buy) {
    this.buy=buy;
}
//payment to feedback
@OneToOne(mappedBy = "payment",cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @JsonIgnore
    private Feedback feedback;

   
//payment to orders
    @OneToOne(mappedBy = "payment",cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @JsonIgnore
    private Orders orders;

   
}
