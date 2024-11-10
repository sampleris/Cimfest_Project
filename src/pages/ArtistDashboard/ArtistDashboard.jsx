import React from 'react';
import './ArtistDashboard.css';

const ArtistDashboard = () => {
    return (
        <div className="artist-dashboard">
            <h2>Welcome to Your Dashboard, Artist!</h2>
            <div className="dashboard-section">
                <button className="dashboard-btn">Upload New Content</button>
                <button className="dashboard-btn">View Rankings</button>
                <button className="dashboard-btn">Manage Profile</button>
                <button className="dashboard-btn">Subscription Details</button>
            </div>
        </div>
    );
};

export default ArtistDashboard;