Kenmark ITan Solutions – AI Website Chatbot

An AI-powered virtual assistant built as a full-stack application for Kenmark ITan Solutions.
The chatbot answers user queries related to company information, services, and FAQs using a structured knowledge base and safe backend logic.

📌 Project Overview

This project implements a production-style AI chatbot that can be embedded into a company website.
It focuses on accuracy, modular architecture, and clean UI/UX, while preventing hallucinated or misleading responses.

Key Capabilities:

Floating chatbot UI

Session-based chat history

Knowledge retrieval from Excel & static content

Safe response handling (no hallucinations)

Dark / Light mode toggle

Typing indicator for better UX

🛠 Tech Stack
Frontend:
React.js (Vite)
TypeScript
Tailwind CSS

Backend:
Node.js
Express.js
TypeScript
xlsx (Excel parsing)

AI / Logic:
Rule-based knowledge retrieval (Excel + static content)
Optional AI layer (Local LLM / Ollama supported)
AI usage intentionally restricted for factual accuracy

🧠 Architecture Overview
frontend/
 ├─ components/
 │   ├─ ChatWidget.tsx
 │   ├─ ChatBubble.tsx
 │   ├─ TypingIndicator.tsx
 │   └─ HeroSection.tsx
 ├─ services/
 │   └─ api.ts
 └─ App.tsx

backend/
 ├─ routes/
 │   └─ chat.ts
 ├─ services/
 │   └─ knowledge.ts
 ├─ data/
 │   └─ knowledge.xlsx
 └─ server.ts


Flow:
User sends message from chatbot UI
Backend analyzes intent
Knowledge retrieved from Excel / site data
Exact response returned (no hallucination)
UI displays response with typing indicator


📚 Knowledge Base

The chatbot uses an Excel (.xlsx) file as its primary knowledge source.


🚀 Features Implemented
✅ Core Features:
Floating chatbot interface
Real-time chat interaction
Backend API integration
Excel-based knowledge retrieval
Session-based conversation memory

⭐ Bonus Features:
Suggested question buttons
Typing indicator with minimum delay
Dark / Light mode toggle
Landing Page (non-blank UI)
Strict non-hallucinatory responses
Modular & scalable architecture


🔒 AI Safety & Accuracy

To ensure reliability:
AI is not used for factual company data
Responses come directly from the knowledge base
If information is unavailable, the bot replies politely:
"I don’t have that information yet."
This approach prevents hallucinations and ensures trustworthiness.



🧪 API Testing

You can test the backend API using Thunder Client / Postman:
POST /chat
{
  "message": "What services do you offer?"
}


🌗 Dark / Light Mode

Toggle button available on top-right
Preference stored in localStorage
Fully Tailwind-based (class strategy)


