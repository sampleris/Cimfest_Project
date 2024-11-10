import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Trending.css';

function Trending() {
    const [trendingContent, setTrendingContent] = useState([]);

   /* useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await axios.get('/api/get_trending.php');
                setTrendingContent(response.data);
            } catch (error) {
                console.error('Error fetching trending content:', error);
            }
        };

        fetchTrending();
    }, []);*/

    return (
        <div className="trending">
            <h2>Top 10 Trending</h2>
            <div className="trending-content">
                {trendingContent.map((item) => (
                    <div className="content-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>By: {item.artistName}</p>
                        <p>{item.description}</p>
                        <p>
                            Popularity: {item.popularity} points (
                            {item.platformBreakdown})
                        </p>
                        <button>Play</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trending;
