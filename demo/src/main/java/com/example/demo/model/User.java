package com.example.demo.model; // The package name should match its location

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // Tells JPA that this class is a table in the database
@Table(name = "users") // Explicitly names the table "users"
public class User {

    @Id // Marks this field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Configures the ID to be auto-incremented
    private Long id;

    @Column(nullable = false, unique = true) // Makes the column non-nullable and unique
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    // --- Constructors, Getters, and Setters ---
    // A no-argument constructor is required by JPA
    public User() {
    }

    // You can generate getters and setters automatically in most IDEs
    // (e.g., Right-click -> Source Action -> Generate Getters and Setters)

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
}