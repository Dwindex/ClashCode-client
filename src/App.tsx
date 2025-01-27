import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './modules/home/pages/Home'
import Signup from './modules/auth/page/Signup'

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
    </Routes>
  )
}

export default App
