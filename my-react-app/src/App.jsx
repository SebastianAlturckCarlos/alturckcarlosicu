import { useState } from 'react'
import './App.css'
import React from 'react';
import Homepage from './components/Homepage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  )
}

export default App
