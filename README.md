# 💬 Real-Time Chat Application

A simple real-time chat application built using **Spring Boot**, **React (Vite)**, **WebSocket**, and **STOMP**.
Users can join with a name, send messages instantly, and view chats in a clean minimal UI.

---

## 🚀 Features

* Real-time messaging using WebSocket
* Multi-user chat support
* Spring Boot backend
* React frontend with Vite
* STOMP protocol for message handling
* Clean minimal UI
* Responsive design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* CSS3
* STOMPJS

### Backend

* Spring Boot
* Spring WebSocket
* Maven
* Java 17+

---

## 📁 Project Structure

```bash
exp10/
│── Demo_WebSocket/        # Spring Boot Backend
│── frontend/              # React Frontend
```

---

## ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## 2️⃣ Run Backend (Spring Boot)

```bash
cd Demo_WebSocket
./mvnw spring-boot:run
```

For Windows:

```bash
.\mvnw.cmd spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

## 3️⃣ Run Frontend (React)

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

## 🔌 WebSocket Endpoint

```bash
/ws
```

## STOMP Topics

### Send Message

```bash
/app/chat
```

### Receive Messages

```bash
/topic/messages
```

---

## 💻 How to Use

1. Open frontend in browser
2. Enter your name
3. Type message
4. Click **Send**
5. Messages appear instantly for all connected users

---

## 📸 UI Preview

* Powder blue background
* White bordered chat box
* Lime green own messages
* Powder blue received messages
* Minimal clean layout

---

## Screenshots

<img width="1919" height="847" alt="Screenshot 2026-04-20 144725" src="https://github.com/user-attachments/assets/cd5c9f88-9e6f-4da5-96d9-cdf5524f2155" />




<img width="1919" height="858" alt="Screenshot 2026-04-20 144716" src="https://github.com/user-attachments/assets/e90428a7-7df7-4ae4-8592-4297892e5561" />



