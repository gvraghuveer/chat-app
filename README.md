# 💬 Chat App

A simple and clean real-time chat application built using the **MERN stack (MongoDB, Express, React, Node.js)** along with **Socket.IO** for instant messaging.

> 🔧 Made while learning full-stack development.

---

## 🚀 Features

- ✅ Real-time messaging using Socket.IO
- ✅ User authentication with JWT
- ✅ Secure backend API with Express
- ✅ MongoDB for user and message storage
- ✅ Responsive UI built with React
- ✅ Basic chat room functionality

---

## ⚙️ Tech Stack

- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Real-time:** Socket.IO
- **Database:** MongoDB (Mongoose)
- **Authentication:** JSON Web Tokens (JWT)

---

## 🛠️ Getting Started

### 📁 Clone the project
```bash
git clone https://github.com/gvraghuveer/chat-app.git
cd chat-app
```

### 📦 Install dependencies

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd ../server
npm install
```

### 🔐 Setup `.env` for backend

In the `server/` folder, create a file named `.env` and add the following:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key ( any random characters )
CLOUDINARY_CLOUD_NAME=your_cloud_name ( any random characters )
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

You can get the CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET from [Cloudinary](https://cloudinary.com/)

### ▶️ Run the app

#### Start backend
```bash
cd server
npm start
```

#### Start frontend
```bash
cd ../client
npm start
```

---

## 🧠 Credits

Inspired by [Codesistency's MERN Chat App Tutorial](https://youtu.be/ntKkVrQqBYY?si=WaKeiGXB_WqgFWGF) — with improvements and personal touch too.

---

## 🌟 Support

If you found this helpful, please ⭐ the repo and share it!  
New to open source? Fork and play around — that’s how I started too :)
