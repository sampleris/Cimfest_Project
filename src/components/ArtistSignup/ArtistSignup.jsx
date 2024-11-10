import React, { useState } from 'react';
import './ArtistSignup.css';
import axios from 'axios';

function ArtistSignup() {
    const [artistData, setArtistData] = useState({
        name: '',
        location: '',
        contact: '',
        showcaseType: '',
        socialMedia: {
            facebook: '',
            twitter: '',
            instagram: '',
        },
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('socialMedia')) {
            const platform = name.split('.')[1];
            setArtistData((prevData) => ({
                ...prevData,
                socialMedia: {
                    ...prevData.socialMedia,
                    [platform]: value,
                },
            }));
        } else {
            setArtistData({ ...artistData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register_artist.php', artistData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error registering artist:', error);
        }
    };

    return (
        <div className="artist-signup">
            <h2>Sign Up as an Artist</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={artistData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={artistData.location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contact:
                    <input
                        type="text"
                        name="contact"
                        value={artistData.contact}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Showcase Type:
                    <select
                        name="showcaseType"
                        value={artistData.showcaseType}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="showcasing">Showcasing</option>
                        <option value="showcasing-post-one-post-all">Showcasing + Post-One-Post-All</option>
                    </select>
                </label>
                <h3>Social Media Links</h3>
                <label>
                    Facebook:
                    <input
                        type="text"
                        name="socialMedia.facebook"
                        value={artistData.socialMedia.facebook}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Twitter:
                    <input
                        type="text"
                        name="socialMedia.twitter"
                        value={artistData.socialMedia.twitter}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Instagram:
                    <input
                        type="text"
                        name="socialMedia.instagram"
                        value={artistData.socialMedia.instagram}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={artistData.agreeToTerms}
                        onChange={() =>
                            setArtistData({
                                ...artistData,
                                agreeToTerms: !artistData.agreeToTerms,
                            })
                        }
                    />
                    I agree to the terms and conditions
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default ArtistSignup;

