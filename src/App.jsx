import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import PropertyDetails from './pages/PropertyDetails';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterForm />} />
                 <Route path="/login" element={<LoginForm />} />
                <Route path="/seller-dashboard" element={<SellerDashboard />} />
                <Route path="/buyer-dashboard" element={<BuyerDashboard />} /> 
                <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
