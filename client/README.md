# Multi-User Notes & Task Manager App

A full-stack web application combining three progressive projects:

1. **Week 1:** Personal Notes API + Minimal UI
2. **Week 2:** User Authentication with JWT & Cookies
3. **Week 3:** Advanced Task Manager with user-specific tasks, status management, and filters

This project demonstrates real-world full-stack development with **Node.js, Express, PostgreSQL, React, Tailwind CSS, and JWT-based authentication**.

---

## Features

### Notes (Week 1)

- Create, view, and delete personal notes
- Notes are user-specific

### Authentication (Week 2)

- Sign up / Login system
- JWT authentication stored in cookies (via `cookie-parser`)
- Protected routes: only authenticated users can access notes and tasks

### Tasks (Week 3)

- Create, edit, delete tasks
- Each task belongs to a specific user
- Tasks have `status` (`todo`, `in_progress`, `done`) and `due date`
- Filter tasks by status
- Frontend displays tasks in columns by status
- UI built with Tailwind CSS

---

## Tech Stack

**Backend:** Node.js, Express, PostgreSQL, JWT, Cookie-Parser, Bcrypt
**Frontend:** React.js, Tailwind CSS, Axios, React Router DOM

---

## Project Structure

backend/
db.js # PostgreSQL connection
server.js # Express server setup
routes/
auth.js # Signup & login
notes.js # Notes CRUD routes
tasks.js # Tasks CRUD routes
middleware/
auth.js # JWT + cookie auth middleware

frontend/
src/
pages/
Login.jsx
Signup.jsx
Dashboard.jsx
components/
NoteCard.jsx
TaskCard.jsx
TaskColumn.jsx

---

## Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
Install dependencies:
npm install express pg bcrypt jsonwebtoken cookie-parser cors dotenv
Create a .env file:
PORT=5000
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database>
JWT_SECRET=your_jwt_secret
Create database tables:
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Notes table
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tasks table
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'todo',
  due_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Start the frontend and backend server:

- npm run dev

### Install dependencies:

- npm install react react-dom axios react-router-dom tailwindcss

### API Endpoints

- Authentication
- Method Endpoint Description Body Params
- POST /auth/signup Create new user { email, password }
- POST /auth/login Login user { email, password }
- `Note: JWT is returned and stored in cookies for session management.`

### Notes

- Method Endpoint Description Protected
- GET /notes Get all notes for user Yes
- POST /notes Create a new note Yes
- DELETE /notes/:id Delete a note by ID
- `Yes All notes are user-specific.`

### Tasks

- Method Endpoint Description Body Params Protected
- GET /tasks Get all tasks for user None Yes
- POST /tasks Create a task { title, description, due_date, status } Yes
- PATCH /tasks/:id Update task (title, status...) { title?, description?, status?, due_date? } Yes
- DELETE /tasks/:id Delete a task None Yes

- `Ownership enforcement: Only the user who created a task can modify or delete it.`
