import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { CssBaseline, Container } from '@mui/material'; // Import CssBaseline

function App() {
    return (
        <React.Fragment>
            <CssBaseline /> {/* Add this component */}
            <Router>
                <Container>
                    <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/" element={<h2>Welcome! Please <a href="/register">register</a>.</h2>} />
                    </Routes>
                </Container>
            </Router>
        </React.Fragment>
    );
}

export default App;