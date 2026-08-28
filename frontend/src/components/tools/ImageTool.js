import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ImageTool.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function ImageTool({ services }) {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('openai');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      const result = await axios.post(`${API_URL}/image/generate`, {
        prompt,
        model,
        size: '1024x1024'
      });
      setImageUrl(result.data.imageUrl);
    } catch (error) {
      console.error('Error:', error);
      alert('Error generating image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-card image-tool">
      <h3>🎨 Image Generation</h3>
      <form onSubmit={handleGenerate}>
        <div className="form-group">
          <label>Select AI Model</label>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="openai">DALL-E</option>
            <option value="stability">Stability AI</option>
          </select>
        </div>

        <div className="form-group">
          <label>Describe the Image</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </form>

      {imageUrl && (
        <div className="image-result">
          <img src={imageUrl} alt="Generated" />
        </div>
      )}
    </div>
  );
}

export default ImageTool;
