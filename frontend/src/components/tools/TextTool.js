import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/TextTool.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function TextTool({ services }) {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('openai');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      const result = await axios.post(`${API_URL}/text/generate`, {
        prompt,
        model,
        maxTokens: 500
      });
      setResponse(result.data.text);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error generating text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-card text-tool">
      <h3>📝 Text Generation</h3>
      <form onSubmit={handleGenerate}>
        <div className="form-group">
          <label>Select AI Model</label>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="openai">OpenAI GPT</option>
            <option value="anthropic">Anthropic Claude</option>
            <option value="gemini">Google Gemini</option>
          </select>
        </div>

        <div className="form-group">
          <label>Enter Your Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What would you like me to write about?"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {response && (
        <div className="response-box">
          <h4>Response:</h4>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default TextTool;
