package com.example.demo.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.*;
import com.example.demo.model.*;
import com.example.demo.repository.*;

@Service
public class SurveyService {
    @Autowired private SurveyRepository surveyRepository;
    @Autowired private UserRepository userRepository;

    public Survey createSurvey(SurveyRequestDto surveyDto, String username) {
        User user = userRepository.findByUsername(username);

        Survey survey = new Survey();
        survey.setTitle(surveyDto.getTitle());
        survey.setCreator(user);

        List<Question> questions = new ArrayList<>();
        for (QuestionDto qDto : surveyDto.getQuestions()) {
            Question question = new Question();
            question.setQuestionText(qDto.getQuestionText());
            question.setSurvey(survey);

            List<Option> options = new ArrayList<>();
            for (OptionDto oDto : qDto.getOptions()) {
                Option option = new Option();
                option.setOptionText(oDto.getOptionText());
                option.setQuestion(question);
                options.add(option);
            }
            question.setOptions(options);
            questions.add(question);
        }
        survey.setQuestions(questions);

        return surveyRepository.save(survey);
    }
}