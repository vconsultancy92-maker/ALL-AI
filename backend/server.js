const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const textRoutes = require('./routes/text');
const imageRoutes = require('./routes/image');
const healthRoutes = require('./routes/health');

// Routes
app.use('/api/text', textRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/health', healthRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Dashboard Backend running on port ${PORT}`);
  console.log(`📊 Visit http://localhost:${PORT}/health`);
});
