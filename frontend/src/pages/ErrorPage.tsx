import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8 text-gray-900">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">Service Temporarily Unavailable</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">What's Happening?</h2>
          <p className="mb-4">
            Our AI content generation service is currently experiencing issues with our model provider, Hugging Face. 
            This is preventing us from generating content at this time.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Possible Causes</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <span className="font-medium">Model Discontinuation:</span> The model we use (MBZUAI/LaMini-T5-738M) 
              may have been discontinued or updated by Hugging Face, making it no longer available through their API.
            </li>
            <li>
              <span className="font-medium">API Changes:</span> Hugging Face may have changed their API endpoints 
              or authentication methods, requiring updates to our integration.
            </li>
            <li>
              <span className="font-medium">Service Disruption:</span> There might be temporary service disruptions 
              with Hugging Face's inference API that are affecting all users.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-4">What You Can Do</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Try running the application locally by cloning the repository from GitHub.</li>
            <li>Ensure you have Python, Node.js, and npm installed.</li>
            <li>In the <code>/backend</code> folder, create a <code>.env</code> file with your Hugging Face API token:<br/><code>HUGGINGFACE_API_TOKEN=your_token_here</code></li>
            <li>Install backend dependencies:<br/><code>cd backend && pip install -r requirements.txt</code></li>
            <li>Start the backend server:<br/><code>python run.py</code></li>
            <li>In the <code>/frontend</code> folder, install frontend dependencies:<br/><code>cd frontend && npm install</code></li>
            <li>Start the frontend development server:<br/><code>npm run dev</code></li>
            <li>If you wish to use a different Hugging Face model, update the model name in the backend code and provide a valid access token.</li>
            <li>For more help, check the project README or contact support.</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 