import { useState } from 'react'
import Home from './pages/Home/home'
import Signin from './pages/SignIn/Signin'
import Signup from './pages/SignUp/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
          path="/" 
          element={<Home />} 
        />
        
        <Route 
          path="/signin" 
          element={<Signin />} 
        />
        
        <Route 
          path="/signup" 
          element={<Signup />} 
          />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App
