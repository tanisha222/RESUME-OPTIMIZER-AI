import React, { useState } from 'react';
import axios from 'axios';
import { FileUp, FileText, Lightbulb, Loader2, XCircle, CheckCircle } from 'lucide-react';

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' }); // For custom alerts

  // Function to show custom message
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000); // Hide after 5 seconds
  };

  const handleSubmit = async () => {
    if (!resume) {
      showMessage('error', "Please upload a resume (PDF file).");
      return;
    }
    if (!jobDescription.trim()) {
      showMessage('error', "Please paste the job description.");
      return;
    }

    setLoading(true);
    setResult(null); // Clear previous results
    setMessage({ type: '', text: '' }); // Clear previous messages

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescription', jobDescription);

    try {
      // Ensure the URL matches your backend server's address and port
      // It's explicitly set to http://localhost:5000/analyze
      const res = await axios.post('http://localhost:5000/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(res.data);
      showMessage('success', "Analysis completed successfully!");
    } catch (err) {
      console.error("Request failed:", err);
      let errorMessage = "Analysis failed. Please try again.";
      if (err.response && err.response.data && err.response.data.error) {
        // If the error has a response from the server, use its error message
        errorMessage = `Server Error: ${err.response.data.error}`;
      } else if (err.request) {
        // The request was made but no response was received (e.g., backend not running, CORS issue)
        errorMessage = "Could not connect to the backend server. Please ensure the backend is running at http://localhost:5000.";
      } else {
        // Something else happened in setting up the request
        errorMessage = `Error: ${err.message}`;
      }
      showMessage('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 sm:p-6 font-inter">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 w-full max-w-lg border border-blue-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Resume Optimizer <span className="text-purple-500">AI</span>
        </h1>
         
        {/* Custom Message Box */}
        {message.text && (
          <div className={`p-3 mb-4 rounded-lg flex items-center gap-3 ${
            message.type === 'error' ? 'bg-red-100 text-red-700 border border-red-300' :
            'bg-green-100 text-green-700 border border-green-300'
          }`}>
            {message.type === 'error' ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
            <p className="text-sm font-medium">{message.text}</p>
          </div>
        )}

        {/* Resume Upload */}
        <div className="mb-5">
          <label htmlFor="resume-upload" className="block text-gray-700 text-sm font-semibold mb-2">
            <FileUp className="inline-block w-4 h-4 mr-2 text-blue-500" /> Upload Your Resume (PDF)
          </label>
          <input
            id="resume-upload"
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg"
            accept=".pdf"
          />
          {resume && (
            <p className="text-xs text-gray-500 mt-2">Selected: <span className="font-medium text-blue-600">{resume.name}</span></p>
          )}
        </div>

        {/* Job Description Input */}
        <div className="mb-6">
          <label htmlFor="job-description" className="block text-gray-700 text-sm font-semibold mb-2">
            <FileText className="inline-block w-4 h-4 mr-2 text-purple-500" /> Paste Job Description
          </label>
          <textarea
            id="job-description"
            placeholder="Paste the full job description here (e.g., responsibilities, qualifications, required skills)."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows="7"
            className="w-full h-auto min-h-[120px] max-h-[250px] border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 resize-y text-gray-800 placeholder-gray-400 font-normal"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" /> Analyzing...
            </>
          ) : (
            "Analyze Resume"
          )}
        </button>

        {/* Results Display */}
        {result && (
          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-inner">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Analysis Results</h2>
            
            <div className="mb-4">
              <p className="text-lg font-extrabold text-green-700">
                Match Score: <span className="text-blue-800">{result.score}%</span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
            </div>

            {result.missingKeywords.length > 0 && (
              <div className="mb-4">
                <p className="font-semibold text-red-600 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Missing Keywords:
                </p>
                <p className="text-sm text-gray-700 mt-1 pl-6">
                  {result.missingKeywords.join(", ") || "None"}
                </p>
              </div>
            )}

            <div className="mt-4">
              <p className="font-semibold text-purple-700 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Suggestions for Improvement:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-800 mt-2 pl-6">
                {result.suggestions.length > 0 ? (
                  result.suggestions.map((s, i) => <li key={i}>{s}</li>)
                ) : (
                  <li>No specific suggestions generated. Try refining your input.</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
