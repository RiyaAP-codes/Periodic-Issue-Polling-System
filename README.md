# Periodic Issue Polling & Feedback System

## 🚀 Project Overview
This is a backend system for submitting issues, collecting feedback, and conducting periodic polls.

## 🔧 Features Implemented
- User Registration & Login
- Password Hashing (bcrypt)
- JWT Authentication
- Role-Based Access Control (Admin/User)
- Protected Routes
- Issue Model (MongoDB)

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📌 Future Work
- Issue submission API
- Polling system
- Frontend UI
- Notifications system

## ▶️ How to Run
1. Clone the repository
2. Run `npm install` inside backend
3. Create `.env` file
4. Run `npm run dev`

5. ## 📸 Current Status
- Backend authentication system completed
- Role-based access implemented
- Issue module in progress

## 🔐 Roles
- User: Can submit and view own issues
- Admin: Can view all issues and update status

## 📊 API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Issues
- POST /api/issues/create
- GET /api/issues/my
- GET /api/issues/all (Admin)
- PUT /api/issues/update/:id (Admin)