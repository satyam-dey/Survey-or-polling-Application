import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Survey Application</h1>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    {/* You will add other routes here later, like the home page */}
                    <Route path="/" element={<h2>Welcome! Please <a href="/register">register</a>.</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;