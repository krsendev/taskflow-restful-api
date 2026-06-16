# TaskFlow

TaskFlow is a Fullstack Task Management application built with React, Express.js, Supabase PostgreSQL, and JWT Authentication. The project implements a RESTful API architecture with user authentication, authorization, and complete CRUD operations for task management.

## Features

### Authentication & Authorization

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User-based Resource Authorization

### RESTful API

- Create Task
- Get All Tasks
- Get Task By ID
- Update Task
- Delete Task
- Toggle Task Completion Status

### Frontend

- React SPA
- Protected Dashboard
- Authentication Context
- Task Management Interface

### Database

- Supabase PostgreSQL
- Relational Data Structure
- User-Task Ownership

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- JWT
- bcrypt

### Database

- Supabase PostgreSQL

## RESTful API Endpoints

Authentication:

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

Tasks:

- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id

Full API documentation is available via Swagger:

http://localhost:5000/docs
