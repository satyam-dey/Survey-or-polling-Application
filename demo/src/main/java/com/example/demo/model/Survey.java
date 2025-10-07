package com.example.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @ManyToOne // Many surveys can belong to one user
    @JoinColumn(name = "creator_id", nullable = false)
    private User creator;

    @OneToMany(mappedBy = "survey", cascade = CascadeType.ALL) // One survey can have many questions
    private List<Question> questions;

    // Getters and Setters...

    public void setCreator(User user) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public void setTitle(Object title) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public void setQuestions(List<Question> questions) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}