package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String username);
    }
