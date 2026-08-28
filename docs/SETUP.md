# Setup Guide

## Prerequisites

- Node.js 16 or higher
- npm or yarn
- API keys for AI services

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vconsultancy92-maker/ALL-AI.git
cd ALL-AI
```

### 2. Setup Backend

```bash
cd backend
npm install
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_GEMINI_API_KEY=...
BACKEND_PORT=5000
```

## Running the Application

### Terminal 1: Start Backend

```bash
cd backend
npm start
```

Backend will run on `http://localhost:5000`

### Terminal 2: Start Frontend

```bash
cd frontend
npm start
```

Frontend will run on `http://localhost:3000`

## Getting API Keys

### OpenAI
1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy and paste into `.env`

### Anthropic (Claude)
1. Go to https://console.anthropic.com/
2. Create a new API key
3. Copy and paste into `.env`

### Google Gemini
1. Go to https://makersuite.google.com/app/apikey
2. Create a new API key
3. Copy and paste into `.env`

## Troubleshooting

**Port already in use**: Change `BACKEND_PORT` in `.env`

**Module not found**: Run `npm install` in both frontend and backend directories

**CORS errors**: Ensure `BACKEND_PORT` and `FRONTEND_URL` match your setup

## Next Steps

1. Implement actual AI API calls in the backend routes
2. Add authentication and user management
3. Set up database for storing results
4. Add more tools (translation, code generation, etc.)
5. Deploy to production
