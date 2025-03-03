import { Route, Routes } from 'react-router-dom'
import Home from './modules/home/pages/Home'
import Signup from './modules/auth/page/Signup'
import Match from './modules/v1Contests/page/match'
import Play from './modules/v1Contests/page/play'
import Allcontest from './modules/v1Contests/page/allContests/allcontest'
import './App.css'
import Dashboard from './modules/dashboard/pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/match"} element={<Match />} />
      <Route path={"/play"} element={<Play />} />
      <Route path={"/1v1/contests"} element={<Allcontest />} />
    </Routes>
  )
}

export default App
