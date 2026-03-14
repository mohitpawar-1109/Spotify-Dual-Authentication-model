# Spotify-Dual-Authentication-model


A **Spotify-inspired backend system** built using **Node.js, Express.js, MongoDB, and JWT authentication**.
This project demonstrates how streaming platforms manage **authentication, music uploads, albums, and relational data** in a scalable backend architecture.

---

# 🚀 Features

- 🔐 **Secure Authentication System**

  - User registration
  - Login & logout
  - Password hashing using **bcrypt**
  - JWT-based authentication
  - Token stored in **HTTP cookies**

* 🛡 **Protected Routes**

  * Middleware verifies JWT tokens
  * Secure access to APIs

* 🎵 **Music Upload System**

  * File uploads using **Multer**
  * Storage handled via **cloud upload service**

* 💿 **Album Management**

  * Artists can create albums
  * Albums contain multiple music tracks

* 🔗 **MongoDB Relationships**

  * Artist → Music
  * Artist → Albums
  * Albums → Music tracks

* ⚡ **Optimized Queries**

  * `.limit()` for pagination
  * `.select()` for specific fields
  * `.populate()` for relational data

---

# 🛠 Tech Stack

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Authentication

- bcrypt (password hashing)
- JWT (jsonwebtoken)
- Cookie-based authentication

File Upload

* Multer

---

# 📂 Project Structure

```
Spotify-Dual-Authentication-model
│
├── src
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── middleware
│   │   └── auth.middleware.js
│   │
│   ├── models
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services
│   │   └── storage.service.js
│   │
│   └── db
│       └── db.js
│
├── app.js
├── server.js
└── .env
```

---

# 🔑 Authentication Flow

1. User registers or logs in.
2. Server verifies credentials.
3. JWT token is generated.
4. Token is stored in cookies.
5. Protected routes verify the token using middleware.

```
Login Request
     ↓
Validate Credentials
     ↓
Generate JWT Token
     ↓
Store Token in Cookie
     ↓
Access Protected Routes
```

---

# 🎵 Music Upload Workflow

```
Artist Upload Request
        ↓
Multer Middleware
        ↓
File Buffer Processing
        ↓
Upload to Cloud Storage
        ↓
Store Music Metadata in MongoDB
```

---

# 📡 API Endpoints

### Authentication

```
POST api/auth/register
POST api/auth/login
POST api/auth/logout
```

### Music

```
POST /music/upload
GET /music
```

### Albums

```
POST /album/create
GET /albums
GET /album/:albumId
```

---

# ⚙️ Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/mohitpawar-1109/Spotify-Dual-Authentication-model.git
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create .env File

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

# 📊 Database Models

### User

```
username
email
password
role
```

### Music

```
title
uri
artist
```

### Album

```
title
artist
musics[]
```

---

# 📸 Architecture

---

# 🧠 What I Learned

* Designing scalable backend architecture
* Implementing JWT authentication
* Handling file uploads using Multer
* Managing relational data in MongoDB
* Structuring production-ready Express APIs

---

# 🔗 GitHub Repository

https://github.com/mohitpawar-1109/Spotify-Dual-Authentication-model

---

# 👨‍💻 Author

Mohit Pawar
Backend Developer | MERN Stack Learner

