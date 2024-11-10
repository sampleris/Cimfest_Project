import React, { useState } from 'react';
import axios from 'axios';
import './ArtistPostContent.css';

function ArtistPostContent() {
    const [contentData, setContentData] = useState({
        artistId: '', // Assume logged-in artist's ID
        title: '',
        description: '',
        trimDuration: 0,
        watermarkText: '',
        selectedPlatforms: [],
    });
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);

    const platforms = [
        { name: 'YouTube', maxDuration: 1800, type: 'video' },
        { name: 'YouTube Short', maxDuration: 60, type: 'video' },
        { name: 'Spotify', maxDuration: 300, type: 'audio' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handlePlatformSelect = (platformName) => {
        setContentData((prevData) => ({
            ...prevData,
            selectedPlatforms: prevData.selectedPlatforms.includes(platformName)
                ? prevData.selectedPlatforms.filter((p) => p !== platformName)
                : [...prevData.selectedPlatforms, platformName],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('artistId', contentData.artistId);
        formData.append('title', contentData.title);
        formData.append('description', contentData.description);
        formData.append('trimDuration', contentData.trimDuration);
        formData.append('watermarkText', contentData.watermarkText);
        formData.append('file', file);
        formData.append('selectedPlatforms', JSON.stringify(contentData.selectedPlatforms));

        try {
            const response = await axios.post('/api/upload_content.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error('Upload error:', error);
            setUploadStatus('Error uploading content');
        }
    };

    return (
        <div className="artist-post-content">
            <h2>Post Your Content</h2>
            {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    Title:
                    <input type="text" name="title" value={contentData.title} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={contentData.description} onChange={handleChange} />
                </label>
                <label>
                    Trim Duration (seconds):
                    <input
                        type="number"
                        name="trimDuration"
                        value={contentData.trimDuration}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Watermark Text:
                    <input
                        type="text"
                        name="watermarkText"
                        value={contentData.watermarkText}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Select File:
                    <input type="file" name="file" onChange={handleFileChange} />
                </label>
                <div className="platform-selection">
                    <h3>Select Platforms</h3>
                    {platforms.map((platform) => (
                        <label key={platform.name}>
                            <input
                                type="checkbox"
                                checked={contentData.selectedPlatforms.includes(platform.name)}
                                onChange={() => handlePlatformSelect(platform.name)}
                                disabled={file && file.duration > platform.maxDuration}
                            />
                            {platform.name} (Max: {platform.maxDuration / 60} mins)
                        </label>
                    ))}
                </div>
                <button type="submit">Upload Content</button>
            </form>
        </div>
    );
}

export default ArtistPostContent;
