const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Content Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Content</h2>
          <div className="space-y-4">
            <p className="text-gray-300">No content created yet. Start creating!</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Analytics will be available once you create content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 