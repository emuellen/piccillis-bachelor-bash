import React, { useState } from 'react';
import axios from 'axios';
import './VideoSelector.css'; // Create a CSS file for styling

const VideoSelector = () => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://4hr26wm5cb.execute-api.us-east-1.amazonaws.com/leandros-bachelor-password', {
        option1,
        option2,
        option3
      });
      setVideoUrl(response.data.url);
    } catch (error) {
        setYoutubeUrl("aabb");
    }
  };

  if (videoUrl) {
    return (
      <div className="video-container">
        <iframe
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoplay
          title="Video"
        ></iframe>
      </div>
    );
  }

  if (youtubeUrl) {
    return (
      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=eHQqRxzl9RyaaDfm?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    );
  }

  return (
    <div className="selector-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            What teams played on the Europa League on the 4th of April 2018?:
            <select value={option1} onChange={(e) => setOption1(e.target.value)}>
              <option value="">Select...</option>
              <option value="option1A">1. FC Köln - Bayern München</option>
              <option value="option1B">RB Leipzig - Olympique de Marseille</option>
              <option value="option1C">Fluminense FC - SE Palmeiras</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            What costume did Imke wear Halloween 2019?:
            <select value={option2} onChange={(e) => setOption2(e.target.value)}>
              <option value="">Select...</option>
              <option value="option2A">Giraffe</option>
              <option value="option2B">Vampire Zombie</option>
              <option value="option2C">Penguin</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Which words were displayed on the wall in La Cocina Negra?:
            <select value={option3} onChange={(e) => setOption3(e.target.value)}>
              <option value="">Select...</option>
              <option value="option3A">Você é uma gatinha</option>
              <option value="option3B">Solo la puntita</option>
              <option value="option3C">De Puta Madre</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VideoSelector;