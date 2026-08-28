const express = require('express');
const router = express.Router();

// Check all AI services status
router.get('/services', (req, res) => {
  const services = {
    openai: !!process.env.OPENAI_API_KEY,
    anthropic: !!process.env.ANTHROPIC_API_KEY,
    gemini: !!process.env.GOOGLE_GEMINI_API_KEY,
  };

  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    services
  });
});

module.exports = router;
