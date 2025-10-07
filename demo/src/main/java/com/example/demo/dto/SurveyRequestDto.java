package com.example.demo.dto;
import java.util.List;
public class SurveyRequestDto {
    private String title;
    private List<QuestionDto> questions;
    // getters and setters
    public Object getTitle() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getTitle'");
    }

    public Iterable<QuestionDto> getQuestions() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}