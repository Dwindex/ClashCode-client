import { Route, Routes } from 'react-router-dom'
import Home from './modules/home/pages/Home'
import Signup from './modules/auth/page/Signup'
import Match from './modules/v1Contests/page/match'
import Play from './modules/v1Contests/page/play'
import Allcontest from './modules/v1Contests/page/allContests/allcontest'
import ProfilePage from './modules/ProfilePage/ProfilePage'
import './App.css'
import Dashboard from './modules/dashboard/pages/Dashboard'
import Leaderboard from './modules/leaderboard'

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/match"} element={<Match />} />
      <Route path={"/play"} element={<Play />} />
      <Route path={"/1v1/contests"} element={<Allcontest />} />
      <Route path={"/profile"} element={<ProfilePage />} />
      <Route path={"/leaderboard"} element={<Leaderboard />} />

    </Routes>
  )
}

export default App
