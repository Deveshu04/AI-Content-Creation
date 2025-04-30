import React, { useState } from 'react';
import ErrorBanner from './ErrorBanner';

interface ContentGeneratorProps {
  token: string;
}

const ContentGenerator: React.FC<ContentGeneratorProps> = ({ token }) => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('informative');
  const [tone, setTone] = useState('professional');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedContent('');

    try {
      const response = await fetch('http://localhost:5000/content/generate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt, style, tone })
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedContent(data.content);
      } else {
        setError(data.error || 'Failed to generate content');
      }
    } catch (err: any) {
      console.error('Error generating content:', err);
      setError('An error occurred while generating content. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">AI Content Generator</h2>
      
      <ErrorBanner error={error} />
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
          What would you like to create?
        </label>
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your topic or idea"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="style">
            Content Style
          </label>
          <select
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="informative">Informative</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="persuasive">Persuasive</option>
            <option value="descriptive">Descriptive</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tone">
            Tone
          </label>
          <select
            id="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="humorous">Humorous</option>
            <option value="serious">Serious</option>
            <option value="enthusiastic">Enthusiastic</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            loading || !prompt ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </div>

      {generatedContent && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Generated Content</h3>
          <div className="p-4 bg-gray-50 rounded border">
            <p className="whitespace-pre-wrap">{generatedContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator; 