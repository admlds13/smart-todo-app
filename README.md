# 🧠 Smart Todo List with AI Integration

An intelligent task management system with AI-powered prioritization, deadline suggestion, context-aware recommendations, and smart categorization. Built as part of a full-stack developer assessment.

---

## 🔥 Features

- ✅ AI-powered task suggestions using LM Studio / OpenAI
- ✅ Smart prioritization and deadline recommendation
- ✅ Context processing from daily notes, emails, messages
- ✅ Auto-categorization of tasks based on input
- ✅ Clean and responsive UI with Tailwind CSS
- ✅ Built with Django REST Framework + Next.js

---

## 🛠 Tech Stack

| Layer     | Tech                                  |
|-----------|---------------------------------------|
| Frontend  | Next.js 14, Tailwind CSS              |
| Backend   | Django REST Framework (DRF)           |
| Database  | Supabase (PostgreSQL)                 |
| AI Engine | LM Studio (local LLM) / OpenAI API    |
| Storage   | Supabase Storage (optional)           |

---

## 🚀 Screenshots

### 📋 Dashboard

![Dashboard](/screenshots/dashboard.png)

### ➕ Task Creation with AI

![Task Creation](/screenshots/task_ai.png)

### 📝 Context Input Page

![Context Input](/screenshots/context.png)

---

## 🧪 Sample AI Suggestion Response

```json
{
  "priority_score": 85,
  "suggested_deadline": "2025-07-04",
  "category": "Documentation",
  "enhanced_description": "Prepare a complete report of all work done this week with timelines and status"
}


📦 Setup Instructions

🔧 Backend (Django DRF)

cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Make sure to configure CORS and AI keys (or LM Studio).


💻 Frontend (Next.js + Tailwind)

cd frontend
npm install
npm run dev


📡 API Endpoints
✅ Tasks

    GET /api/tasks/ – List all tasks

    POST /api/tasks/ – Create new task

✅ Context

    GET /api/contexts/ – View context history

    POST /api/contexts/ – Add new context

✅ AI

    POST /api/ai/suggest/ – Get AI suggestions for task

🧠 AI Integration Options
Option 1: OpenAI API

    Set OPENAI_API_KEY in .env file

Option 2: LM Studio (Recommended)

    Download from: https://lmstudio.ai

    Run local model (e.g., Mistral, LLaMA)

    Connect backend to local server (usually http://localhost:1234/v1/chat/completions)


smart-todo/
├── backend/
│   ├── smarttodo
│   ├── tasks.py
│   ├── manage.py
│   ├── requirements.txt
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── ....
├── screenshots/
│   ├── dashboard.png
│   ├── task_ai.png
│   └── context.png

