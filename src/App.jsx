import './App.css'
import Login from './component/Login'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Registration from './component/Registration'
function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Registration />} />

     </Routes>
     </BrowserRouter>

     
    </>
  )
}

export default App
