import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import './App.css'
import Home from './Components/Home'
import LoginPage from './Components/LoginPage'
import SignupPage from './Components/SignupPage'
import { auth } from './Context/Firebase'
function App() {

  const [user, setUser] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName)
      } else setUser('')
      // console.log(user)
    })
  }, [])
  return (

    <div className='container'>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/' element={<Home name={user} />} />

        </Routes>
      </Router>
    </div>

  )
}

export default App
