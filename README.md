# 📄 Resume Optimizer AI

Your Personal AI-Powered Resume Tailoring Assistant
This project is a full-stack web application designed to help job seekers optimize their resumes for specific job descriptions. By leveraging AI (Google's Gemini API), it analyzes the relevance of a resume against a given job description, identifies missing keywords, and provides actionable suggestions for improvement, significantly increasing the chances of passing initial screening filters.

---

# 📸 Preview
(Screenshot of the Site)
![image](https://github.com/user-attachments/assets/ce1df345-3a96-47ea-ab86-d9a77621e53b)

---

## 📸 Demo

1. 📍  https://resume-optimizer-ai-pxcz.vercel.app/ (Frontend)
2. ⚙️  https://resume-optimizer-ai-dcqv.onrender.com (Backend)
---

## 📌 Features

1. 📄 Upload your resume in PDF format  
2. 🧾 Paste any job description  
3. 📊 AI-generated match percentage  
4. ❌ View missing keywords not found in your resume  
5. ✅ Receive 3 intelligent suggestions from Google's Gemini

---

## 🛠️ Technologies Used
| Frontend     | Backend           | AI Integration                  |
| ------------ | ----------------- | ------------------------------- |
| React (Vite) | Node.js + Express | GoogleGenerativeAI (Gemini API) |
| Tailwind CSS | multer, pdf-parse |                                 |
| Axios        | dotenv, cors      |                                 |

Other Tools  
- Vercel (Frontend Hosting)  
- Render (Backend Hosting)
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
## ⚡ How It Works

1. Upload a PDF resume
2. Paste a job description
3. Click Analyze Resume
4. Backend:
   * Extracts text from PDF
   * Compares it with job description
   * Sends prompt to Google Gemini
   * Returns match score, missing keywords, and suggestions
5. Frontend displays all results beautifully

---

## 📦 API Endpoint

### `POST /analyze`

| Field            | Type        | Description            |
| ---------------- | ----------- | ---------------------- |
| `resume`         | File (.pdf) | Resume file (required) |
| `jobDescription` | Text        | JD content (required)  |

---
Returns:
* score: Match percentage
* missingKeywords: Array of missing terms
* suggestions: 3 AI-generated tips
---

## 📌 Future Improvements

* 🌟 User Authentication
* 📤 Resume improvement export as PDF
* 🎯 Highlight matched/missing terms visually
* 📈 Dashboard for resume analytics
* 🗃️ Save multiple resume versions

---

## 👩‍💻 Author

* 💼 [Tanisha Chauhan](https://github.com/tanisha222)
* ✉️ [LinkedIn Profile](https://www.linkedin.com/in/tanisha-chauhan-9227671b0/)

---


