package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Orders;
public interface OrderRepo extends JpaRepository<Orders, Integer> {
}