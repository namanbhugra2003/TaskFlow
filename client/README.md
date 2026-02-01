# TaskFlow -- Role-Based Project & Task Management System

TaskFlow is a full‑stack role-based project and task management
application built with React (Vite), Redux Toolkit, Tailwind CSS,
Node.js, Express, Sequelize, and MySQL.

It implements authentication using JWT stored in httpOnly cookies and
provides three separate dashboards for Admin, Manager, and User with
proper role protection.

------------------------------------------------------------------------

## 🚀 Tech Stack

### Frontend

-   React (Vite)
-   Redux Toolkit
-   React Router
-   Tailwind CSS
-   Axios

### Backend

-   Node.js
-   Express.js
-   Sequelize ORM
-   MySQL
-   JWT Authentication (Cookies)

------------------------------------------------------------------------

## 📁 Project Structure

    blackbucks/
     ├── client/      # React + Vite frontend
     └── server/      # Node + Express backend

------------------------------------------------------------------------

## ⚙️ Backend Setup

``` bash
cd server
npm install
npm run dev
```

Make sure you create a `.env` file in the server folder with:

    PORT=5000
    DB_NAME=your_db_name
    DB_USER=your_db_user
    DB_PASS=your_db_password
    JWT_SECRET=your_secret_key

------------------------------------------------------------------------

## 🎨 Frontend Setup

``` bash
cd client
npm install
npm run dev
```

------------------------------------------------------------------------

## 🔐 Test Credentials

### Admin

-   Email: admin@test.com
-   Password: admin123

### Manager

-   Email: manager@test.com
-   Password: manager123

### User

-   Email: user@test.com
-   Password: user123

------------------------------------------------------------------------

## ✅ Features

### Admin

-   Create Manager and User accounts
-   View all users

### Manager

-   Create projects
-   Create tasks
-   Assign tasks to users

### User

-   View assigned tasks
-   Update task status (Todo → In Progress → Done)

------------------------------------------------------------------------

## 🔒 Security

-   JWT stored in httpOnly cookies
-   Role-based route protection
-   Backend authorization middleware

------------------------------------------------------------------------

## 🧪 How to Test

1.  Login as Admin → create Manager and User
2.  Login as Manager → create Project and Task
3.  Login as User → view and update task status

------------------------------------------------------------------------

## 📌 Notes

-   Tailwind CSS is used for UI styling
-   Axios is configured with `withCredentials: true`
-   All routes are protected both on frontend and backend
