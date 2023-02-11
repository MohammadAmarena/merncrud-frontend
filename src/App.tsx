import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import './App.scss'
import { Books } from './pages/Books'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { useContext } from 'react'
import { AppContext } from './AppContext'

function App() {

  const { adminIsLoggedIn } = useContext(AppContext);
	return (
		<div className="App">
			<h1>Book Site</h1>
			<nav>
				<NavLink to="/books">Books</NavLink>
				{adminIsLoggedIn ? (
					<NavLink to="/logout">Logout</NavLink>
				) : (
					<NavLink to="/login">Login</NavLink>
				)}
			</nav>

			<Routes>
				<Route path="/books" element={<Books />} />
				{adminIsLoggedIn ? (
					<Route path="/logout" element={<Logout />} />
				) : (
					<Route path="/login" element={<Login />} />
				)}
				<Route path="/" element={<Navigate to="/books" replace />} />
			</Routes>
		</div>
  )
}

export default App
