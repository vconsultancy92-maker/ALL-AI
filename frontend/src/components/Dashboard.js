import React from 'react';
import TextTool from './tools/TextTool';
import ImageTool from './tools/ImageTool';
import '../styles/Dashboard.css';

function Dashboard({ services, loading }) {
  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <h2>Available Tools</h2>
        <div className="tools-grid">
          <TextTool services={services} />
          <ImageTool services={services} />
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Service Status</h2>
        <div className="services-status">
          <div className={`service-card ${services.openai ? 'active' : 'inactive'}`}>
            <h3>OpenAI</h3>
            <p>{services.openai ? '✅ Connected' : '❌ Not configured'}</p>
          </div>
          <div className={`service-card ${services.anthropic ? 'active' : 'inactive'}`}>
            <h3>Anthropic (Claude)</h3>
            <p>{services.anthropic ? '✅ Connected' : '❌ Not configured'}</p>
          </div>
          <div className={`service-card ${services.gemini ? 'active' : 'inactive'}`}>
            <h3>Google Gemini</h3>
            <p>{services.gemini ? '✅ Connected' : '❌ Not configured'}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
