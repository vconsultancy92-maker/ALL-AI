# API Documentation

## Base URL

```
http://localhost:5000/api
```

## Endpoints

### Health Check

#### GET `/health/services`

Check which AI services are configured.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00Z",
  "services": {
    "openai": true,
    "anthropic": true,
    "gemini": false
  }
}
```

### Text Generation

#### POST `/text/generate`

Generate text using AI models.

**Request Body:**
```json
{
  "prompt": "Write a haiku about coding",
  "model": "openai",
  "maxTokens": 100
}
```

**Response:**
```json
{
  "model": "openai",
  "prompt": "Write a haiku about coding",
  "text": "Lines of logic flow...\nDebugging the endless night\nSuccess at last breaks",
  "tokens": 100,
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Text Summarization

#### POST `/text/summarize`

Summarize long text content.

**Request Body:**
```json
{
  "text": "Long text content here...",
  "model": "openai"
}
```

**Response:**
```json
{
  "original_length": 5000,
  "summary": "Summarized text here...",
  "model": "openai",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Image Generation

#### POST `/image/generate`

Generate images from text descriptions.

**Request Body:**
```json
{
  "prompt": "A serene mountain landscape at sunset",
  "model": "openai",
  "size": "1024x1024"
}
```

**Response:**
```json
{
  "prompt": "A serene mountain landscape at sunset",
  "model": "openai",
  "size": "1024x1024",
  "imageUrl": "https://example.com/image.png",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Image Analysis

#### POST `/image/analyze`

Analyze images using computer vision.

**Request Body:**
```json
{
  "imageUrl": "https://example.com/image.png",
  "prompt": "What objects are in this image?",
  "model": "openai"
}
```

**Response:**
```json
{
  "imageUrl": "https://example.com/image.png",
  "prompt": "What objects are in this image?",
  "analysis": "The image contains...",
  "model": "openai",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Error Handling

All errors follow this format:

```json
{
  "error": {
    "message": "Error description",
    "status": 400
  }
}
```

## Rate Limiting

API calls may be rate limited based on your AI service plans.
