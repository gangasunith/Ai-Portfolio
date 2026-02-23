# 🤖 AI Portfolio – R. Ganga Sunith

An elite full-stack developer portfolio with an integrated AI Resume Assistant that answers questions based on my resume using OpenRouter AI.

## 🌐 Live Demo

* Frontend: https://your-frontend-url.vercel.app
* Backend: https://ai-portfolio-nt5p.onrender.com
* GitHub: https://github.com/gangasunith/Ai-Portfolio

---

# 🚀 Features

* Modern and professional portfolio UI
* AI Resume Assistant powered by OpenRouter
* Full-stack architecture using React and FastAPI
* Persistent chat history using SQLite database
* Responsive design for desktop and mobile
* Live deployment on Render and Vercel
* Resume-based contextual AI responses
* Floating chat assistant UI

---

# 🛠️ Tech Stack

## Frontend

* React.js
* TypeScript
* Tailwind CSS
* Axios
* Framer Motion
* Lucide React Icons

## Backend

* Python
* FastAPI
* SQLAlchemy
* SQLite
* OpenRouter API
* Requests
* Uvicorn

## Deployment

* Frontend: Vercel
* Backend: Render
* Version Control: GitHub

---

# 📂 Project Structure

```
Ai-Portfolio/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.tsx
│   │   │   └── FloatingChat.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── chat.py
│   ├── database.py
│   ├── models.py
│   ├── resume_context.py
│   └── requirements.txt
│
└── README.md
```

---

# ⚙️ Installation (Local Setup)

## 1. Clone repository

```
git clone https://github.com/gangasunith/Ai-Portfolio.git
cd Ai-Portfolio
```

---

## 2. Backend Setup

```
cd backend
pip install -r requirements.txt
```

Create `.env`

```
OPENROUTER_API_KEY=your_api_key_here
```

Run backend:

```
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

---

## 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🤖 AI Assistant Capabilities

The AI assistant can answer questions like:

* What are your skills?
* What projects have you built?
* What is your experience?
* What technologies do you use?
* What is your education?

The AI only answers based on resume context.

---

# 🧠 Database

SQLite database stores:

* User messages
* AI responses
* Chat history persistence

---

# 🔐 Environment Variables

Backend requires:

OPENROUTER_API_KEY=your_api_key

# 🚀 Deployment

## Backend (Render)

Build Command:

```
pip install -r requirements.txt
```

Start Command:

```
uvicorn main:app --host 0.0.0.0 --port 10000
```

---

## Frontend (Vercel)

Build Command:

```
npm run build
```



Features:

* Modern portfolio UI
* Floating AI assistant
* Chat persistence
* Live AI responses



