package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {
}