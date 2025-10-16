# Express.js API – Scrimba Assignment

This project is a code-along assignment from Scrimba, focused on building a basic REST API using **Express.js**. The goal was to learn how to structure an API, handle routes, and respond to different types of HTTP GET requests.

## 🚀 What the Project Covers

- ✅ Express.js setup and server creation
- ✅ Handling **GET requests** with responses
- ✅ Using **Express Params** (`req.params`)
- ✅ Using **Express Query** (`req.query`)
- ✅ Modular routing with `express.Router`
- ✅ Clean and organized folder structure

## 🛠 Tech Stack

- **Node.js**
- **Express.js**

## 📁 Project Structure (example)

project/
├─ server.js
├─ routes/
│ └─ apiRoutes.js
└─ data/
└─ data.json (or similar)

Routing is handled using `express.Router` and the logic is split into separate files to keep the code organized and easy to read.

## ▶️ Running the Project

Install dependencies (if required):

```bash
npm install
Start the server:


node server.js
Or, if Nodemon is set up:


npm run dev
The API typically runs on:


http://localhost:8000


🌐 Example Usage

Basic GET request:
GET /api

Using Params:
GET /api/items/123
Accessed via:
req.params

Using Query Strings:
GET /api/items?type=popular
Accessed via:
req.query

✅ What I Practiced
Creating a server with Express

Organizing routes using express.Router

Responding to API requests

Working with route parameters and query strings

Keeping the project modular and readable

📚 Purpose
This project was built purely for learning as part of the Scrimba Express.js course. It serves as a foundation for building more advanced APIs in the future.

```
