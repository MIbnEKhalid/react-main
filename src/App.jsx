import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div className="App">
      <h1>React + Node.js Fullstack</h1>
      <p>Backend message: {message}</p>
    </div>
  )
}

export default App