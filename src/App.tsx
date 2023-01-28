import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import './App.scss'
import { Books } from './pages/Books'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'

function App() {

  return (
    <div className="App">
      <h1>Book-site</h1>
      <nav>
        <NavLink to='/books'>Books</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/logout'>Logout</NavLink>
      </nav>

      <Routes>
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/' element={<Navigate to='/books' />} />
      </Routes>
    
    </div>
  )
}

export default App
