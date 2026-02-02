
# 🚀 TaskFlow – Role-Based Project & Task Management System

This project is developed as part of the **Full Stack MERN Intern Assessment** by **Blackbuck Engineers Pvt Ltd**.

The objective of this assessment is to design, develop, and deploy a production-ready full stack application with clean architecture, proper role-based access control, secure authentication, and professional UI.

---

## 🌐 Live Deployment Links

### Frontend (Vercel)
https://task-flow-lac-one.vercel.app/

### Backend (Render)
https://taskflow-fggn.onrender.com/

### Database
Render PostgreSQL (SQL database)

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication
- Cookie-based token persistence
- Role-based authorization

### Database
- PostgreSQL (Render)

---

## 👥 User Roles

| Role    | Access & Permissions |
|---------|----------------------|
| Admin   | Manage users, assign roles, view all projects |
| Manager | Create projects, assign users, create tasks, track progress |
| User    | View assigned tasks and update task status |

---

## 🔐 Authentication & Authorization

- Admin-only user registration
- Login using email & password
- JWT-based authentication
- Role-based protected routes
- Token persistence using HTTP-only cookies
- Secure logout functionality

---

## 📊 Role-Based Dashboards

### Admin Dashboard
- View all users
- Create / Edit / Delete users
- Assign roles
- View all projects

### Manager Dashboard
- Create projects
- Assign users to projects
- Create tasks under projects
- Update task status
- View team progress

### User Dashboard
- View assigned tasks
- Update task status

---

## 🎨 UI / UX Features

- Clean and professional UI
- Fully responsive design
- Role-based navigation
- Form validation messages
- Loading indicators
- Proper empty states

---

## 📡 RESTful API Structure

/api/auth  
/api/users  
/api/projects  
/api/tasks  

---

## 🧪 Test Credentials

Admin  
Email: admin@test.com  
Password: admin123

---

## ⚙️ Local Setup Instructions

### Backend
cd server  
npm install  

Create .env file:

PORT=5000  
DATABASE_URL=your_postgres_url  
JWT_SECRET=your_secret_key  

Run:
node server.js

### Frontend
cd client  
npm install  
npm run dev

---

## 🚀 Deployment

Frontend: Vercel  
Backend: Render  
Database: Render PostgreSQL

---

## ✅ Assignment Requirements Covered

- Role-based access control
- JWT authentication
- SQL database
- RESTful API
- Professional UI
- Proper deployment

---
