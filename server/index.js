const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const upload = multer();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; 

if (!GOOGLE_API_KEY) {
  console.error("❌ GOOGLE_API_KEY is not set in .env file!");
  process.exit(1); 
}

// Add a simple GET route for the root path
app.get("/", (req, res) => {
  res.status(200).send("Resume Optimizer Backend is running! Send a POST request to /analyze.");
});

function extractKeywords(text) {
  const words = text.toLowerCase().match(/\b[a-z]{4,}\b/g);
  return [...new Set(words)];
}

app.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    console.log("🔄 /analyze called");
    if (!req.file || !req.body.jobDescription) {
      return res.status(400).json({ error: "Missing resume or job description" });
    }

    const resumeText = (await pdfParse(req.file.buffer)).text;
    const jdText = req.body.jobDescription;

    const resumeWords = extractKeywords(resumeText);
    const jdWords = extractKeywords(jdText);
    const missing = jdWords.filter(word => !resumeWords.includes(word));
    const score = Math.round(((jdWords.length - missing.length) / jdWords.length) * 100);

    const prompt = `
Resume:
${resumeText}

Job Description:
${jdText}

Suggest 3 improvements to tailor this resume for the job description above.
`;

    const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = { contents: chatHistory };
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`;

    console.log("Sending request to Gemini API...");
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      console.error("❌ Gemini API error:", errorData);
      throw new Error(`Gemini API responded with status ${geminiResponse.status}: ${JSON.stringify(errorData)}`);
    }

    const result = await geminiResponse.json();
    console.log("✅ Received response from Gemini API.");

    let suggestions = [];
    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      const geminiText = result.candidates[0].content.parts[0].text;
      suggestions = geminiText.split("\n").filter(line => line.trim() !== "");
    } else {
      console.warn("⚠️ Gemini API response structure unexpected or empty.");
      suggestions = ["Could not generate suggestions. Please try again or refine the input."];
    }

    res.json({ score, missingKeywords: missing, suggestions });

  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: "Internal server error", details: err.message });
  }
});

app.listen(port, () => {
  console.log("✅ Backend running at http://localhost:" + port);
});
