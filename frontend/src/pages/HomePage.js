import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh', // Takes up most of the screen height
                    textAlign: 'center'
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to SurveyApp
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Create and share surveys with ease. Get the insights you need.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/register"
                    sx={{ mt: 4 }} // margin-top
                >
                    Get Started
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;