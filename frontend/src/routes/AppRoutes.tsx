import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import CreateContent from '../pages/CreateContent'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ErrorPage from '../pages/ErrorPage'
import ProtectedRoute from '../components/ProtectedRoute'
import { useAuth } from '../context/AuthContext'

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateContent />
          </ProtectedRoute>
        }
      />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRoutes 