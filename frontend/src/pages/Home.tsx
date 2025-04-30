import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          AI-Powered Content Creation
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Create engaging content with the power of artificial intelligence. Transform your ideas into compelling articles, social media posts, and more.
        </p>
        <Link
          to="/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium inline-block transition-colors duration-200"
        >
          Start Creating
        </Link>
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Smart Generation</h3>
          <p className="text-gray-300">
            Leverage advanced AI models to generate high-quality content tailored to your needs.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Multiple Formats</h3>
          <p className="text-gray-300">
            Create various types of content from blog posts to social media updates.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
          <p className="text-gray-300">
            Simple and intuitive interface designed for content creators of all levels.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home 