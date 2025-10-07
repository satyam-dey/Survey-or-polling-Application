package com.example.demo.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping; // Import this
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.SurveyRequestDto;
import com.example.demo.service.SurveyService;

@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "http://localhost:3000")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @PostMapping
    public ResponseEntity<?> createSurvey(@RequestBody SurveyRequestDto surveyDto, Principal principal) {
        surveyService.createSurvey(surveyDto, principal.getName());
        return ResponseEntity.ok("Survey created successfully!");
    }
}