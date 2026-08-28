// ALL-AI API Helper
const API_BASE = window.location.origin; // or your deployed backend URL

const AllAI = {
  // 1. AI Chat
  async chat(message, history = []) {
    const res = await fetch(`${API_BASE}/api/ai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history })
    });
    return await res.json();
  },

  // 2. Code Assistant
  async codeAssist({ prompt, code, language = "javascript", action = "generate" }) {
    const res = await fetch(`${API_BASE}/api/ai/code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, code, language, action })
    });
    return await res.json();
  },

  // 3. Find AI Tools
  async findTools(query) {
    const res = await fetch(`${API_BASE}/api/ai/tools-recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });
    return await res.json();
  }
};
