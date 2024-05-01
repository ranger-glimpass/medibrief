import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CallSection from './components/CallSection';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/call-section" element={<CallSection />} />
            </Routes>
        </Router>
    );
};

export default App;
