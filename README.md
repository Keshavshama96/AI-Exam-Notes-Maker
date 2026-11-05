# 📘 AI Exam Notes Maker – AI-Powered Exam Preparation Platform

An AI-powered exam preparation platform that helps students generate structured study notes, revision sheets, and practice questions using Google's Gemini API. Built with the MERN stack and a credit-based SaaS monetization model.

---

## 🚀 Features

### 🔐 Authentication & User Management
- Google Authentication using Firebase.
- JWT-based authentication and authorization.
- HTTP-only cookie-based session management.
- Protected routes for authenticated users.
- User profile and account management.

### 🤖 AI Notes Generation
- Generate exam-oriented notes from any topic.
- AI-powered content generation using Gemini 2.5 Flash.
- Structured notes using prompt engineering.
- Save generated notes in MongoDB.
- Access previously generated notes.

### 📝 Revision Sheet Generation
- Generate concise revision sheets.
- Convert lengthy study material into quick revision notes.
- Focus on important concepts for efficient exam preparation.

### ❓ Question Generation
- Generate AI-powered questions based on study topics.
- Create additional practice material.
- Support exam-oriented preparation.

### 📚 Notes Management & History
- Save generated notes.
- Maintain notes generation history.
- Retrieve previously generated study material.
- Access saved notes whenever required.

### 💳 Credit-Based SaaS System
- 50 free credits for newly registered users.
- 10 credits deducted per notes generation.
- Track user credit balance.
- Multiple credit purchase plans.
- Backend-side credit validation and management.

### 💰 Stripe Payment Integration
- Stripe Checkout integration.
- Create Stripe Checkout Sessions.
- Secure hosted payment page.
- Stripe Webhook integration.
- Webhook signature verification.
- Automatically update user credits after successful payment.

### 🎨 User Interface
- Responsive React-based interface.
- Tailwind CSS styling.
- Interactive dashboard.
- Notes generation interface.
- Credit balance and pricing plans.
- User-friendly navigation.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, Tailwind CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Firebase Authentication, JWT |
| AI Integration | Gemini API, Gemini 2.5 Flash |
| Payment Gateway | Stripe Checkout, Webhooks |
| API Architecture | REST APIs |
| Deployment | Render, MongoDB Atlas |

---

## 🏗️ Application Architecture

The application follows a client-server architecture.

```text
              USER
                |
                v
        REACT FRONTEND
                |
                v
         EXPRESS SERVER
                |
        +-------+-------+
        |       |       |
        v       v       v
    Firebase  MongoDB  Gemini API
    Auth      Database  AI
        |       |       |
        +-------+-------+
                |
                v
          API RESPONSE
                |
                v
          REACT FRONTEND


       PAYMENT WORKFLOW

          FRONTEND
              |
              v
         EXPRESS SERVER
              |
              v
            STRIPE
              |
              v
       PAYMENT SUCCESS
              |
              v
       STRIPE WEBHOOK
              |
              v
       EXPRESS SERVER
              |
              v
       UPDATE USER CREDITS
              |
              v
           MONGODB
```

---

## 🔄 Core Application Workflows

### 1. Authentication Flow

1. User signs in using Google Authentication.
2. Firebase authenticates the user.
3. Frontend obtains the Firebase authentication token.
4. Token is sent to the backend.
5. Backend verifies the Firebase token.
6. Backend generates a JWT.
7. JWT is stored in an HTTP-only cookie.
8. Protected APIs verify the JWT through authentication middleware.

### 2. AI Notes Generation Flow

1. User enters a topic on the frontend.
2. Frontend sends a request to the backend.
3. Backend verifies user authentication.
4. Backend checks the available credits.
5. A structured prompt is generated.
6. Backend sends the prompt to Gemini API.
7. Gemini generates exam-oriented notes.
8. Backend processes the AI response.
9. Generated notes are saved in MongoDB.
10. User can access the generated notes through the frontend.

### 3. Payment Flow

1. User selects a credit package.
2. Frontend sends a payment request to the backend.
3. Backend creates a Stripe Checkout Session.
4. User is redirected to Stripe Checkout.
5. User completes the payment.
6. Stripe sends a webhook event to the backend.
7. Backend verifies the webhook signature.
8. User credits are updated in MongoDB after successful payment.

---

## 📂 Project Structure

```text
AI-EXAM-NOTES-MAKER/
│
├── client/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── package.json
│
└── README.md
```

*Note: This is an illustrative structure. Verify folder and file names against the actual repository.*

---

## 🗄️ Database Design

### User Model

Stores user-related information:

- Name
- Email
- Firebase UID
- Credits
- Created At
- Updated At

### Notes Model

Stores generated study material:

- Notes ID
- User Reference
- Topic
- Generated Notes Content
- Creation Timestamp

*Exact schema fields depend on the implemented Mongoose models.*

---

## 💎 Credit & Pricing System

The platform follows a credit-based SaaS monetization model.

| Credit Package | Credits |
|---|---:|
| ₹100 | 50 Credits |
| ₹200 | 120 Credits |
| ₹500 | 300 Credits |

- New users receive 50 free credits.
- Each notes generation consumes 10 credits.
- Users can purchase additional credits through Stripe.
- Credit balances are managed on the backend.

---

## 🔒 Security Features

- Firebase-based Google authentication.
- JWT verification middleware.
- HTTP-only cookies for secure token storage.
- Protected backend routes.
- Environment variables for sensitive credentials.
- Backend-side credit validation.
- Stripe webhook signature verification.
- User-specific access to protected operations.

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account
- Firebase project
- Google Gemini API key
- Stripe account

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd AI-EXAM-NOTES-MAKER
```

### 2. Install Dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd ../server
npm install
```

### 3. Configure Environment Variables

Create `.env` files in the appropriate frontend and backend directories.

Add the required configuration for:

- MongoDB connection string
- Firebase credentials/configuration
- JWT secret
- Gemini API key
- Stripe secret key
- Stripe webhook secret
- Frontend/backend URLs

Use the exact environment variable names referenced in your source code.

### 4. Run the Application

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

---

## 🔮 Future Enhancements

- AI-powered MCQ and quiz generator.
- AI doubt-solving chatbot based on generated notes.
- PDF export and download.
- Multiple difficulty levels for questions.
- Subject-wise notes organization.
- Flashcards for quick revision.
- Progress tracking and performance analytics.
- Additional AI-powered exam preparation features.

---

## 🔗 Project Links

- **Live Application:** https://ai-exam-notes-maker-client.onrender.com
- **Backend API:** https://ai-exam-notes-maker-server.onrender.com

---

## 🎯 Project Objective

The primary objective of AI Exam Notes Maker is to simplify and improve exam preparation through AI-powered content generation.

This project demonstrates practical implementation of full-stack development, REST API architecture, authentication, database management, AI integration, prompt engineering, payment processing, and credit-based SaaS architecture.

---

**Built with ❤️ using the MERN Stack and Google Gemini AI.**
