import React from 'react';
import Trending from '../../components/Trending/Trending';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Music Platform</h1>
                <button className="signup-btn">Sign Up</button>
            </header>
            <section className="trending-section">
                <h2>Top 10 Trending Content</h2>
                <Trending />
            </section>
            <section className="current-trending">
                <h2>Current Trending Level</h2>
                {/* Placeholder for dynamically loaded trending content */}
            </section>
        </div>
    );
};

export default Home;
