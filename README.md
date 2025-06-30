📄 RESUME OPTIMIZER AI 

Your Personal AI-Powered Resume Tailoring Assistant
This project is a full-stack web application designed to help job seekers optimize their resumes for specific job descriptions. By leveraging AI (Google's Gemini API), it analyzes the relevance of a resume against a given job description, identifies missing keywords, and provides actionable suggestions for improvement, significantly increasing the chances of passing initial screening filters.

📸 Preview
(Screenshot of the Site)
![image](https://github.com/user-attachments/assets/ce1df345-3a96-47ea-ab86-d9a77621e53b)

🚀 Live Demo
1. 🔗 https://resume-optimizer-ai-pxcz.vercel.app/ (Frontend)
2. 🔗 https://resume-optimizer-ai-dcqv.onrender.com (Backend)

✨ Features  
1. 📄 Upload your resume in PDF format  
2. 🧾 Paste any job description  
3. 📊 AI-generated match percentage  
4. ❌ View missing keywords not found in your resume  
5. ✅ Receive 3 intelligent suggestions from Google's Gemini

🛠️ Technologies Used
| Frontend     | Backend           | AI Integration                  |
| ------------ | ----------------- | ------------------------------- |
| React (Vite) | Node.js + Express | GoogleGenerativeAI (Gemini API) |
| Tailwind CSS | multer, pdf-parse |                                 |
| Axios        | dotenv, cors      |                                 |

Other Tools  
- Vercel (Frontend Hosting)  
- Render (Backend Hosting)

📁 Folder Structure

```
Resume-Optimizer-AI/
├── client/          # React frontend
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── server/          # Node.js + Express backend
│   ├── index.js
│   ├── .env
│   └── ...
```


🔍 How It Works
1. Upload a PDF resume
2. Paste a job description
3. Click Analyze Resume
4. Backend:
   * Extracts text from PDF
   * Compares it with job description
   * Sends prompt to Google Gemini
   * Returns match score, missing keywords, and suggestions
5. Frontend displays all results beautifully

📦 API Details
POST /analyze
| Field          | Type        | Description                |
| -------------- | ----------- | -------------------------- |
| resume         | File (.pdf) | Resume file (required)     |
| jobDescription | Text        | Job description (required) |

Returns:
* score: Match percentage
* missingKeywords: Array of missing terms
* suggestions: 3 AI-generated tips

🔮 Future Enhancements
* 🌟 User Authentication
* 📤 Resume improvement export as PDF
* 🎯 Highlight matched/missing terms visually
* 📈 Dashboard for resume analytics
* 🗃️ Save multiple resume versions

👤 Author
💼 [Tanisha Chauhan](https://github.com/tanisha222)
🔗 [LinkedIn Profile](https://www.linkedin.com/in/tanisha-chauhan-9227671b0/)

Based on your Resume Optimizer AI project and inspired by the [Weather App repo](https://github.com/RushabhJain30/Weather), here’s a **professional and properly structured README.md** description you can use on GitHub:

---

# 📄 Resume Optimizer AI

An intelligent resume analyzer tool that compares your resume against any job description using **OpenAI GPT-3.5**, and gives you a **match score**, identifies **missing keywords**, and provides **3 AI-generated improvement suggestions** to enhance your resume for better job targeting.

---

## 📸 Demo

> 📍 [Live Frontend Link (Vercel)](https://your-vercel-link.vercel.app)
> ⚙️ [Live Backend Link (Render)](https://your-render-backend.onrender.com)

---

## 📌 Features

* 🧠 Uses OpenAI GPT-3.5 to suggest tailored resume improvements
* 📄 Upload your resume in PDF format
* 🧾 Paste any job description
* 📊 Get a **match percentage score**
* ❌ See **missing keywords** from the job description
* ✅ Get **3 intelligent suggestions** to improve your resume

---

## 🖼️ UI Overview

<p align="center">
  <img src="https://your-image-url.png" width="700" />
</p>

---

## 🛠️ Tech Stack

| Frontend           | Backend                 | AI Integration       |
| ------------------ | ----------------------- | -------------------- |
| React.js (Vite)    | Node.js + Express       | OpenAI GPT-3.5-Turbo |
| Tailwind CSS / CSS | Multer (file upload)    | openai NPM SDK       |
| Axios              | dotenv, cors, pdf-parse |                      |

---

## 🧩 Folder Structure

```
Resume-Optimizer-AI/
├── client/          # React frontend
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── server/          # Node.js + Express backend
│   ├── index.js
│   ├── .env
│   └── ...
```

---

## 🚀 Installation & Setup

### ⚙️ Backend (Render-compatible)

```bash
cd server
npm install
node index.js
```

Set up your `.env` in `server/`:

```env
OPENAI_API_KEY=sk-proj-...
OPENAI_PROJECT_ID=proj_...
```

---

### 💻 Frontend (Vercel-compatible)

```bash
cd client
npm install
npm run dev
```

In `client/.env`:

```env
VITE_BACKEND_URL=https://your-backend.onrender.com
```

---

## ⚡ How It Works

1. Upload a **PDF resume**.
2. Paste a **job description**.
3. Click **Analyze Resume**.
4. Backend:

   * Extracts keywords from both inputs.
   * Uses GPT-3.5 to generate improvement suggestions.
   * Calculates match percentage and missing keywords.
5. Frontend displays results dynamically.

---

## 📦 API Endpoint

### `POST /analyze`

| Field            | Type        | Description            |
| ---------------- | ----------- | ---------------------- |
| `resume`         | File (.pdf) | Resume file (required) |
| `jobDescription` | Text        | JD content (required)  |

---

## 📌 Future Improvements

* 🧠 GPT-4 integration
* 📤 Export optimized resume
* 🧾 Highlight matched/missing words
* 📊 Visual analytics dashboard
* 🗃️ Multiple resume versions

---

## 👩‍💻 Author

* 💼 [Tanisha Chauhan](https://github.com/tanisha222)
* ✉️ Feel free to connect on [LinkedIn](https://www.linkedin.com)

---

## ⭐ Support

If you find this project helpful, please consider giving it a ⭐ on GitHub.

---

Would you like this saved as an actual `README.md` file with formatting + images inserted? I can generate the file directly.


