import React from 'react';
import './InvestorDashboard.css';

const InvestorDashboard = () => {
    return (
        <div className="investor-dashboard">
            <h2>Welcome to Your Dashboard, Investor!</h2>
            <div className="dashboard-section">
                <button className="dashboard-btn">Browse Artists</button>
                <button className="dashboard-btn">View Deals</button>
                <button className="dashboard-btn">Update Profile</button>
                <button className="dashboard-btn">Subscription Details</button>
            </div>
        </div>
    );
};

export default InvestorDashboard;

