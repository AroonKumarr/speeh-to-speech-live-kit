# 🎤 Speech-to-Speech LiveKit Frontend

This is the frontend application for the real-time voice AI assistant.

It connects to:
- LiveKit for real-time audio streaming
- FastAPI Token Server for authentication
- OpenAI Realtime Voice Model via backend agent

---

## 🏗 Architecture

User Browser  
   ↓  
Next.js Frontend  
   ↓  
FastAPI Token Server (backend_STS)  
   ↓  
LiveKit Room  
   ↓  
Voice Agent (OpenAI Realtime)

---

## 🛠 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- LiveKit Client SDK

---

## ⚙️ Environment Variables

Create a `.env.local` file:
NEXT_PUBLIC_TOKEN_SERVER=http://localhost:8000

NEXT_PUBLIC_LIVEKIT_URL=wss://your-livekit-url


---

## 🚀 Installation

```bash
git clone https://github.com/AroonKumarr/speeh-to-speech-live-kit.git
cd speeh-to-speech-live-kit

npm install


or if using pnpm:

pnpm install

▶️ Run Development Server
npm run dev


Open:

http://localhost:3000

🔗 Backend Required

Make sure backend_STS is running:

uvicorn token_server:app --reload --port 8000

👤 Author

Aroon Kumar
GitHub: https://github.com/AroonKumarr


---
