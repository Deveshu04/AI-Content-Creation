import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const CreateContent = () => {
  const [contentType, setContentType] = useState('blog')
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('informative')
  const [tone, setTone] = useState('professional')
  const [generatedContent, setGeneratedContent] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setGeneratedContent('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/content/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          prompt,
          style,
          tone
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setGeneratedContent(data.content)
      } else {
        setError(data.error || 'Failed to generate content')
      }
    } catch (err) {
      setError('Failed to connect to the server')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Content</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Content Type</label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="blog">Blog Post</option>
            <option value="social">Social Media Post</option>
            <option value="email">Email Newsletter</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="informative">Informative</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="humorous">Humorous</option>
            <option value="serious">Serious</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe what you want to create..."
            required
          />
        </div>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Content'}
        </button>
      </form>

      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Generated Content</h2>
          <div className="bg-gray-700 p-6 rounded-lg whitespace-pre-wrap">
            {generatedContent}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateContent 