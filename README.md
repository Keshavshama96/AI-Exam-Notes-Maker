AI Exam Notes Maker – AI-Powered Exam Preparation Platform
1. Project Overview
AI Exam Notes Maker is a full-stack, AI-powered exam preparation platform designed to help students generate structured study notes using artificial intelligence.

Users can enter a topic, select relevant details, and generate exam-oriented notes through the Gemini API. The platform also supports revision material and question generation to make exam preparation easier.

It follows a credit-based SaaS model where users receive free credits and can purchase additional credits through Stripe.
2. Key Features
Authentication & User Management
- Google Authentication using Firebase.
- Secure user authentication.
- JWT-based authentication middleware.
- Protected routes for authenticated users.
- User profile and account management.
AI Notes Generation
- Generate notes by entering a topic.
- AI-powered notes generation using Gemini API.
- Structured and exam-oriented notes.
- Prompt engineering for consistent AI responses.
- Store generated notes in the database.
- Access previously generated notes.
Revision Sheet Generation
- Generate concise revision sheets.
- Convert lengthy notes into quick revision material.
- Help students revise important concepts efficiently.
Question Generation
- Generate questions based on study topics.
- Create practice material for exam preparation.
- AI-generated questions based on the selected topic.
Notes Management & History
- Save generated notes.
- Access previously generated notes.
- Maintain notes generation history.
- Retrieve saved study material.
Credit-Based SaaS System
- Initial 50 credits for registered users.
- Credit deduction for AI-powered notes generation.
- Credit balance tracking.
- Pricing plans for purchasing additional credits.
- Backend-side credit management.
Payment Integration
- Stripe payment gateway integration.
- Create Stripe Checkout Sessions.
- Redirect users to Stripe's hosted checkout page.
- Stripe webhook integration.
- Verify webhook signatures.
- Update user credits after successful payment.
User Interface
- Responsive React-based interface.
- Tailwind CSS styling.
- Interactive dashboard.
- Notes generation interface.
- Credit balance and pricing interface.
- User-friendly navigation.
3. Technology Stack
Frontend:
- React.js
- Vite
- Tailwind CSS
- JavaScript
Backend:
- Node.js
- Express.js
- REST APIs
Database:
- MongoDB
- Mongoose
Authentication:
- Firebase Google Authentication
- JWT-based authentication middleware
- HTTP-only cookie-based authentication
AI Integration:
- Google Gemini API
- Gemini 2.5 Flash
- Prompt Engineering
- AI-powered content generation
- Structured JSON response handling
Payment Gateway:
- Stripe Checkout
- Stripe Webhooks
Deployment:
- Render
- MongoDB Atlas
4. High-Level Application Architecture
The application follows a client-server architecture:
1. User interacts with the React frontend.
2. Firebase handles Google authentication.
3. Frontend communicates with the Express backend through REST APIs.
4. Backend authentication middleware verifies protected requests.
5. User submits a topic for notes generation.
6. Backend checks whether the user has sufficient credits.
7. Backend creates a structured prompt and sends it to the Gemini API.
8. Gemini generates structured study notes.
9. Backend processes the AI response and saves the generated notes in MongoDB.
10. User credits are deducted after successful generation.
11. Stripe handles additional credit purchases.
12. Stripe webhook verifies successful payments and updates user credits.
13. Frontend displays generated notes and updated credit balance.
5. Main Application Modules
- Authentication Module
- User Management Module
- Notes Generation Module
- AI Integration Module
- Prompt Engineering Module
- Revision Sheet Module
- Question Generation Module
- Notes History Module
- Credit Management Module
- Payment Integration Module
6. Project Structure
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


Note: Folder names are illustrative; verify them against the current repository before publishing this structure.
7. Database Design
User Model
Stores user-related information such as:
- Name
- Email
- Firebase UID
- Credits
- Created At
- Updated At
Notes Model
Stores generated notes-related information such as:
- Notes ID
- User reference
- Topic
- Generated notes content
- Creation timestamp
Exact fields depend on the implemented schema.
8. Business Model
AI Exam Notes Maker follows a credit-based SaaS model.
- Users receive 50 initial credits.
- Each notes generation consumes 10 credits.
- Users can purchase additional credits through Stripe.
- Different pricing plans are available.
- Platform manages credit balances through the backend and database.
Example pricing plans:
- ₹100 – 50 credits
- ₹200 – 120 credits
- ₹500 – 300 credits
9. Security Considerations
- Firebase authentication for Google sign-in.
- JWT verification for protected APIs.
- HTTP-only cookies for authentication tokens.
- Environment variables for sensitive credentials.
- Backend-side credit validation.
- Stripe webhook signature verification.
- User-specific access to protected operations.
10. Future Enhancements
- AI-powered MCQ and quiz generator.
- AI doubt-solving chatbot based on generated notes.
- PDF export and download.
- Multiple difficulty levels for questions.
- Subject-wise notes organization.
- Flashcards for quick revision.
- Progress tracking and performance analytics.
- More AI-powered exam preparation features.
11. Project Links
- GitHub Repository: [Add GitHub URL]
- Live Application: [Add Frontend URL]
- Backend API: [Add Render Backend URL]
- Project Demo: [Add Demo Video URL]
- Tutorial Reference: YouTube Tutorial
12. Project Objective
The primary objective of AI Exam Notes Maker is to make exam preparation easier, faster and more efficient through AI-powered content generation.

The project demonstrates full-stack development, authentication, REST API design, database management, AI integration, prompt engineering, payment processing and credit-based SaaS architecture.
