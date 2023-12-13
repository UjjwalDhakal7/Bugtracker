import react from 'react'
import './App.css'
import BugList from './views/BugList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './views/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={< Dashboard/>} />
          <Route path="/BugList" element={<BugList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
