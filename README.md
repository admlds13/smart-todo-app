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


⚠️ Ensure you configure CORS and add your .env file with either an OpenAI API key or LM Studio endpoint.


💻 Frontend (Next.js + Tailwind)

cd frontend
npm install
npm run dev

App runs at http://localhost:3000/


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

Option 1: OpenAI API (Cloud)

    Add your key in .env:
    OPENAI_API_KEY=sk-xxxxxxxx

Option 2: LM Studio (Local)

    Download from https://lmstudio.ai

    Load a local model (e.g. Mistral)

    Use endpoint: http://localhost:1234/v1/chat/completions


🗂️ Folder Structure

smart-todo-app/
├── backend/
│   ├── smarttodo/
│   ├── manage.py
│   ├── requirements.txt
├── frontend/
│   ├── src/
│   ├── package.json
├── screenshots/
│   ├── dashboard.png
│   ├── task_ai.png
│   └── context.png
├── README.md
└── .gitignore

🔐 Security

Secrets like .env and API keys are excluded from the repo using .gitignore.
If you find any issue, please raise it in GitHub Issues or email the maintainer.


🙌 Author

Loganathan Thamotharan
Full Stack Developer Assignment – DevGods