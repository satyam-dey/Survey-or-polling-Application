import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateSurveyPage = () => {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ questionText: '', options: [{ optionText: '' }] }]);
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        setQuestions([...questions, { questionText: '', options: [{ optionText: '' }] }]);
    };

    const handleRemoveQuestion = (qIndex) => {
        const list = [...questions];
        list.splice(qIndex, 1);
        setQuestions(list);
    };

    const handleAddOption = (qIndex) => {
        const list = [...questions];
        list[qIndex].options.push({ optionText: '' });
        setQuestions(list);
    };

    const handleRemoveOption = (qIndex, oIndex) => {
        const list = [...questions];
        list[qIndex].options.splice(oIndex, 1);
        setQuestions(list);
    };

    const handleQuestionChange = (e, qIndex) => {
        const { value } = e.target;
        const list = [...questions];
        list[qIndex].questionText = value;
        setQuestions(list);
    };

    const handleOptionChange = (e, qIndex, oIndex) => {
        const { value } = e.target;
        const list = [...questions];
        list[qIndex].options[oIndex].optionText = value;
        setQuestions(list);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/surveys', { title, questions });
            alert('Survey created successfully!');
            navigate('/'); // Redirect to home page
        } catch (error) {
            console.error('Failed to create survey', error);
            alert('Failed to create survey.');
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Create a New Survey</Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField fullWidth label="Survey Title" value={title} onChange={(e) => setTitle(e.target.value)} required sx={{ mb: 2 }} />
                
                {questions.map((q, qIndex) => (
                    <Box key={qIndex} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                        <TextField fullWidth label={`Question ${qIndex + 1}`} value={q.questionText} onChange={(e) => handleQuestionChange(e, qIndex)} required />
                        
                        {q.options.map((o, oIndex) => (
                            <Box key={oIndex} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <TextField size="small" label={`Option ${oIndex + 1}`} value={o.optionText} onChange={(e) => handleOptionChange(e, qIndex, oIndex)} required />
                                {q.options.length > 1 && <IconButton onClick={() => handleRemoveOption(qIndex, oIndex)}><RemoveCircleOutlineIcon /></IconButton>}
                            </Box>
                        ))}
                        <Button size="small" startIcon={<AddCircleOutlineIcon />} onClick={() => handleAddOption(qIndex)} sx={{ mt: 1 }}>Add Option</Button>
                        
                        {questions.length > 1 && <Button color="error" onClick={() => handleRemoveQuestion(qIndex)} sx={{ mt: 1 }}>Remove Question</Button>}
                    </Box>
                ))}

                <Button onClick={handleAddQuestion} sx={{ mr: 2 }}>Add Question</Button>
                <Button type="submit" variant="contained">Create Survey</Button>
            </Box>
        </Container>
    );
};

export default CreateSurveyPage;