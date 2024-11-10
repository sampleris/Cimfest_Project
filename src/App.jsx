import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ArtistSignup from './components/ArtistSignup/ArtistSignup';
import InvestorSignup from './components/InvestorSignup/InvestorSignup';
import ArtistDashboard from './pages/ArtistDashboard/ArtistDashboard';
import ArtistPostContent from './components/ArtistPostContent/ArtistPostContent';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup/artist" element={<ArtistSignup />} />
                <Route path="/signup/investor" element={<InvestorSignup />} />
                <Route path="/dashboard" element={<ArtistDashboard />} />
                <Route path="/dashboard/post-content" element={<ArtistPostContent />} />
            </Routes>
        </Router>
    );
}

export default App;
