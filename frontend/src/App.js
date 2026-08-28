import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkServices();
  }, []);

  const checkServices = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/health/services`);
      setServices(response.data.services);
    } catch (err) {
      setError('Failed to load services');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {error && <div className="error-banner">{error}</div>}
        <Dashboard services={services} loading={loading} />
      </main>
    </div>
  );
}

export default App;
