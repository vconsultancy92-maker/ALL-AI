# AI Tools Dashboard

🤖 A comprehensive dashboard for accessing and managing multiple AI tools and services in one place.

## Features

- 🎯 **Multi-AI Integration** - Support for GPT, Claude, Gemini, and more
- 🎨 **Beautiful UI** - Modern, responsive dashboard interface
- 🔧 **Multiple Tools** - Text generation, image analysis, transcription, summarization
- ⚙️ **Easy Configuration** - Simple setup for API keys and settings
- 📊 **Usage Tracking** - Monitor API usage and costs
- 🔐 **Secure** - Environment-based configuration, no hardcoded secrets

## Project Structure

```
ALL-AI/
├── frontend/              # React web application
├── backend/               # Node.js/Express API
├── config/                # Configuration files
├── docs/                  # Documentation
└── .env.example           # Environment variables template
```

## Tech Stack

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, dotenv
- **AI Integrations**: OpenAI, Anthropic, Google Gemini APIs
- **Database**: Optional (MongoDB/PostgreSQL)

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- API keys for AI services

### Installation

1. Clone the repository
```bash
git clone https://github.com/vconsultancy92-maker/ALL-AI.git
cd ALL-AI
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Configure environment variables
```bash
cp ../.env.example ../.env
# Edit .env with your API keys
```

5. Start the application
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm start
```

## Available AI Tools

- **Text Generation** - GPT, Claude, Gemini
- **Image Analysis** - Vision capabilities
- **Text Summarization** - Condense long documents
- **Translation** - Multi-language support
- **Code Generation** - AI-powered coding assistance
- **Speech-to-Text** - Audio transcription

## Environment Variables

See `.env.example` for complete configuration options.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open a GitHub issue.
