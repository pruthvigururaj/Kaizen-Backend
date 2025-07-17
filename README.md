# Kaizen-Backend

# 📝 Form Submission Backend API

A simple Node.js + Express + MySQL backend service to receive and display user form data.

## 📦 Tech Stack
- Node.js + Express.js
- MySQL + Sequelize
- express-validator
- CORS
- dotenv

## 📬 API Endpoints

### POST `/api/form`
Submit form data  
**Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "Hello from the backend!"
}
