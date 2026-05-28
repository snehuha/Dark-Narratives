# Dark Narratives: AI-Powered Interactive Storytelling Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/AI-Story%20Generation-orange"/>
  <img src="https://img.shields.io/badge/Status-Active-success"/>
</p>

---

## ✨ Overview

**Dark Narratives** is a full-stack AI-powered storytelling web application that allows users to generate immersive stories across multiple genres in real time.

Users can choose a genre, enter a story prompt, and instantly receive AI-generated narratives tailored to their imagination. The platform combines creative storytelling with modern web technologies to create an engaging and interactive experience.

Built using **React**, **FastAPI**, and **Python**, the project demonstrates frontend-backend integration, REST API communication, responsive UI design, and AI-powered content generation.

---

## 🚀 Features

- 🎭 Multiple story genres
  - Fantasy
  - Horror
  - Mystery
  - Science Fiction

- 🤖 AI-generated storytelling
- ⚡ Real-time story generation
- 🎨 Responsive modern UI
- 🔄 Frontend-backend API integration
- 📖 Interactive storytelling experience
- 🌐 Full-stack web architecture
- ⏳ Loading states and smooth navigation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- FastAPI
- Python
- Uvicorn

### AI Integration
- OpenAI API

### Database
- SQLite / PostgreSQL

### Tools & Platforms
- Git & GitHub
- VS Code
- npm
- Python Virtual Environment

---

## 📂 Project Structure

```bash
infinite-story/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── main.js
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── models/
│   ├── database/
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/infinite-story.git
cd infinite-story
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🧠 Backend Setup

### Create Virtual Environment

```bash
cd backend
python -m venv .venv
```

### Activate Virtual Environment

#### Windows

```bash
.venv\Scripts\activate
```

#### Mac/Linux

```bash
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run FastAPI Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENAI_API_KEY=your_api_key_here
PORT=8000
```

> ⚠️ Never push your `.env` file to GitHub.

---

## 📡 API Example

### Generate Story

```http
POST /generate-story
```

### Request Body

```json
{
  "genre": "Fantasy",
  "prompt": "A forgotten kingdom rises from beneath the ocean."
}
```

### Response

```json
{
  "story": "The sea trembled as ancient towers slowly emerged from the depths..."
}
```



## 📚 Learning Outcomes

Through this project, I learned:

- Full-stack web development
- Frontend-backend communication
- REST API integration
- React state management
- FastAPI backend development
- AI prompt engineering
- Responsive UI design
- Error handling and debugging
- Git & GitHub workflow

---

## ⚡ Challenges Faced

- Integrating React with FastAPI
- Handling asynchronous requests
- Managing API responses
- Debugging CORS and backend errors
- Structuring prompts for better AI storytelling
- Maintaining smooth UI interactions

---

## 🔮 Future Improvements

- User authentication system
- Save & continue stories feature
- Story history dashboard
- AI-generated scene images
- Dark/light mode toggle
- Story export as PDF
- Multiplayer collaborative storytelling

---

## 🧪 Testing

### Frontend

```bash
npm run lint
```

### Backend

```bash
pytest
```

---

## 🌍 Deployment

### Frontend

Deploy using:
- Vercel
- Netlify
- GitHub Pages

### Backend

Deploy using:
- Render
- Railway
- Heroku

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Sneha Chakraborty**

Frontend Developer • UI/UX Enthusiast • Creative Technologist

---

## 🌟 Acknowledgements

- React Documentation
- FastAPI Documentation
- OpenAI API Documentation
- MDN Web Docs
- Open-source developer community