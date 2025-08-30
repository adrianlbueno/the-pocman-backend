# The Pocman Backend

A **Node.js REST API** backend for illustration and artwork management with **JWT-based user authentication**.

---

## 📌 Overview

The Pocman Backend provides secure user authentication and CRUD operations for managing illustration metadata including titles, descriptions, pricing, and quantities.  
It is built with **Express.js** and **MongoDB**, following RESTful API design principles.

---

## ✨ Features

- **User Authentication**: Registration, login, and session management using JWT  
- **User Management**: CRUD operations for user accounts (with authorization)  
- **Illustration Management**: Create, read, update, and delete artwork metadata  
- **Cross-Origin Support**: CORS-enabled for web and mobile clients  
- **Logging**: HTTP request logging with Morgan  

---

## 🛠 Technology Stack

- **Runtime**: Node.js ≥18  
- **Framework**: Express.js 5.1.0  
- **Database**: MongoDB with Mongoose ODM  
- **Authentication**: JWT tokens & bcrypt password hashing  
- **Middleware**: CORS, Morgan  

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥18  
- MongoDB instance (local or Atlas)

### Installation
```bash
git clone https://github.com/adrianlbueno/the-pocman-backend
cd the-pocman-backend
npm install
