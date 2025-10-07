import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { CssBaseline, Container } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import CreateSurveyPage from "./pages/CreateSurveyPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <Navbar /> {/* Add the Navbar here */}
        <main>
          <Container sx={{ mt: 4 }}>
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />{" "}
              <Route
                path="/create-survey"
                element={
                  <ProtectedRoute>
                    <CreateSurveyPage />
                  </ProtectedRoute>
                }
              />
              {/* Use the new HomePage */}
            </Routes>
          </Container>
        </main>
      </AuthProvider>
    </Router>
  );
}

export default App;
